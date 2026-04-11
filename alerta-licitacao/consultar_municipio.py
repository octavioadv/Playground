#!/usr/bin/env python3
"""
Consulta dados de município: população (IBGE) e dispensas de licitação (PNCP).
Uso CLI:
    python consultar_municipio.py populacao "Araguari" MG
    python consultar_municipio.py dispensas "Araguari" MG
    python consultar_municipio.py tudo "Araguari" MG
"""

import requests
import json
import sys
import re
from datetime import datetime, timedelta
from urllib.parse import quote

PNCP_BASE = "https://pncp.gov.br/api/consulta/v1/contratacoes/publicacao"
IBGE_MUNICIPIOS = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios"
# Estimativas de população (SIDRA tabela 6579 — censo/estimativa anual)
IBGE_POPULACAO = "https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2022/variaveis/9324"

TIMEOUT = 30


# ── Normalização de nomes ─────────────────────────────────────────────────────

def _normalizar(texto):
    """Remove acentos e converte para minúsculas para comparação."""
    import unicodedata
    nfd = unicodedata.normalize("NFD", texto)
    sem_acento = "".join(c for c in nfd if unicodedata.category(c) != "Mn")
    return sem_acento.lower().strip()


# ── IBGE — população ──────────────────────────────────────────────────────────

def get_populacao_ibge(municipio: str, uf: str) -> dict:
    """
    Retorna código IBGE e população estimada do município.
    Estratégia:
      1. Busca lista de municípios da UF via API localidades
      2. Encontra o código IBGE pelo nome (fuzzy)
      3. Busca estimativa de população no SIDRA
    """
    uf = uf.upper()
    municipio_norm = _normalizar(municipio)

    # 1. Lista municípios da UF
    url_munic = f"https://servicodados.ibge.gov.br/api/v1/localidades/estados/{uf}/municipios"
    try:
        resp = requests.get(url_munic, timeout=TIMEOUT)
        resp.raise_for_status()
        lista = resp.json()
    except Exception as e:
        return {"erro": f"IBGE localidades: {e}"}

    # 2. Encontra código pelo nome
    codigo = None
    nome_oficial = None
    for m in lista:
        nome = m.get("nome", "")
        if _normalizar(nome) == municipio_norm:
            codigo = m["id"]
            nome_oficial = nome
            break

    if not codigo:
        # Busca parcial
        candidatos = [m for m in lista if municipio_norm in _normalizar(m.get("nome", ""))]
        if len(candidatos) == 1:
            codigo = candidatos[0]["id"]
            nome_oficial = candidatos[0]["nome"]
        elif len(candidatos) > 1:
            nomes = [c["nome"] for c in candidatos]
            return {"erro": f"Município ambíguo. Candidatos: {nomes}"}
        else:
            return {"erro": f"Município '{municipio}' não encontrado em {uf}"}

    # 3. Estimativa de população
    url_pop = (
        f"https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2022"
        f"/variaveis/9324?localidades=N6[{codigo}]"
    )
    try:
        resp = requests.get(url_pop, timeout=TIMEOUT)
        resp.raise_for_status()
        dados = resp.json()
        populacao = None
        ano = "2022"
        if dados and isinstance(dados, list):
            resultados = dados[0].get("resultados", [])
            if resultados:
                series = resultados[0].get("series", [])
                if series:
                    valores = series[0].get("serie", {})
                    # Pega o último ano disponível
                    for yr in sorted(valores.keys(), reverse=True):
                        v = valores[yr]
                        if v and v != "-":
                            try:
                                populacao = int(v)
                                ano = yr
                                break
                            except (ValueError, TypeError):
                                pass
    except Exception as e:
        return {
            "codigo_ibge": codigo,
            "municipio": nome_oficial,
            "uf": uf,
            "populacao": None,
            "ano_referencia": None,
            "erro_populacao": str(e),
        }

    return {
        "codigo_ibge": codigo,
        "municipio": nome_oficial,
        "uf": uf,
        "populacao": populacao,
        "ano_referencia": ano,
    }


# ── PNCP — dispensas de licitação ────────────────────────────────────────────

def get_dispensas_pncp(municipio: str, uf: str, dias: int = 60) -> dict:
    """
    Retorna dispensas de licitação (modalidade 8) publicadas nos últimos `dias`
    para o município/UF indicados.
    Filtra resultados pelo nome do município (campo 'municipioNome').
    """
    uf = uf.upper()
    municipio_norm = _normalizar(municipio)

    hoje = datetime.now()
    data_fim = hoje.strftime("%Y%m%d")
    data_ini = (hoje - timedelta(days=dias)).strftime("%Y%m%d")

    params = {
        "dataInicial": data_ini,
        "dataFinal": data_fim,
        "uf": uf,
        "codigoModalidadeContratacao": 8,  # Dispensa de Licitação
        "tamanhoPagina": 50,
        "pagina": 1,
    }

    dispensas = []
    total_registros = 0

    try:
        pagina = 1
        while pagina <= 10:
            params["pagina"] = pagina
            resp = requests.get(PNCP_BASE, params=params, timeout=TIMEOUT)
            if resp.status_code == 400:
                break
            resp.raise_for_status()
            data = resp.json()

            items = data.get("data", [])
            if not items:
                break

            total_registros = data.get("totalRegistros", 0)

            for item in items:
                unidade = item.get("unidadeOrgao", {})
                mun_api = unidade.get("municipioNome", "")
                if _normalizar(mun_api) == municipio_norm:
                    orgao = item.get("orgaoEntidade", {})
                    dispensas.append({
                        "id": item.get("numeroControlePNCP", ""),
                        "numero_compra": item.get("numeroCompra", ""),
                        "processo": item.get("processo", ""),
                        "objeto": item.get("objetoCompra", ""),
                        "valor_estimado": item.get("valorTotalEstimado"),
                        "situacao": item.get("situacaoCompraNome", ""),
                        "orgao_nome": orgao.get("razaoSocial", ""),
                        "unidade_nome": unidade.get("nomeUnidade", ""),
                        "data_publicacao": item.get("dataPublicacaoPncp", ""),
                        "data_abertura": item.get("dataAberturaProposta", ""),
                        "data_encerramento": item.get("dataEncerramentoProposta", ""),
                        "link_sistema": item.get("linkSistemaOrigem", ""),
                        "link_pncp": f"https://pncp.gov.br/app/editais/{item.get('numeroControlePNCP', '')}",
                        "amparo_legal": item.get("amparoLegalNome", ""),
                    })

            if data.get("paginasRestantes", 0) <= 0:
                break
            pagina += 1

    except Exception as e:
        return {
            "municipio": municipio,
            "uf": uf,
            "periodo_dias": dias,
            "data_inicial": data_ini,
            "data_final": data_fim,
            "dispensas": dispensas,
            "total_encontradas": len(dispensas),
            "erro": str(e),
        }

    return {
        "municipio": municipio,
        "uf": uf,
        "periodo_dias": dias,
        "data_inicial": data_ini,
        "data_final": data_fim,
        "dispensas": dispensas,
        "total_encontradas": len(dispensas),
        "total_registros_uf_periodo": total_registros,
    }


# ── CLI ───────────────────────────────────────────────────────────────────────

def _print_populacao(municipio, uf):
    resultado = get_populacao_ibge(municipio, uf)
    if "erro" in resultado and "populacao" not in resultado:
        print(f"ERRO: {resultado['erro']}")
        return
    pop = resultado.get("populacao")
    pop_fmt = f"{pop:,}".replace(",", ".") if pop else "indisponível"
    print(f"\nMunicípio : {resultado.get('municipio')} / {resultado.get('uf')}")
    print(f"Código IBGE: {resultado.get('codigo_ibge')}")
    print(f"População  : {pop_fmt} hab. (ref. {resultado.get('ano_referencia', 'N/A')})")
    if "erro_populacao" in resultado:
        print(f"Aviso pop  : {resultado['erro_populacao']}")


def _print_dispensas(municipio, uf, dias=60):
    resultado = get_dispensas_pncp(municipio, uf, dias)
    print(f"\nDispensas de licitação — {municipio}/{uf} — últimos {dias} dias")
    print(f"Período   : {resultado['data_inicial']} a {resultado['data_final']}")
    print(f"Encontradas: {resultado['total_encontradas']}")
    if "erro" in resultado:
        print(f"ERRO: {resultado['erro']}")
    disp = resultado.get("dispensas", [])
    if not disp:
        print("(nenhuma dispensa encontrada no período)")
    else:
        for i, d in enumerate(disp, 1):
            val = f"R$ {d['valor_estimado']:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".") \
                  if d.get("valor_estimado") else "N/I"
            print(f"\n  {i}. {d['objeto'][:100]}")
            print(f"     Órgão    : {d['orgao_nome']}")
            print(f"     Valor est: {val}")
            print(f"     Situação : {d['situacao']}")
            print(f"     Publicado: {(d.get('data_publicacao') or '')[:10]}")
            print(f"     Link     : {d['link_pncp']}")


if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Uso: python consultar_municipio.py <populacao|dispensas|tudo> <municipio> <uf> [dias]")
        print("Ex : python consultar_municipio.py tudo Araguari MG 60")
        sys.exit(1)

    cmd = sys.argv[1].lower()
    mun = sys.argv[2]
    uf_ = sys.argv[3]
    dias_ = int(sys.argv[4]) if len(sys.argv) > 4 else 60

    if cmd in ("populacao", "pop"):
        _print_populacao(mun, uf_)
    elif cmd in ("dispensas", "disp"):
        _print_dispensas(mun, uf_, dias_)
    elif cmd == "tudo":
        _print_populacao(mun, uf_)
        _print_dispensas(mun, uf_, dias_)
    else:
        print(f"Comando desconhecido: {cmd}")
        sys.exit(1)
