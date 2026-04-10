#!/usr/bin/env python3
"""
Monitor de Licitações PNCP — Higilabor SST
Consulta a API pública do PNCP, filtra por palavras-chave de SST,
salva resultados em JSON e gera dados para o dashboard.
"""

import requests
import json
import os
import sys
from datetime import datetime, timedelta
from pathlib import Path
import time
import re

# ── Configuração ──────────────────────────────────────────────────────
BASE_URL = "https://pncp.gov.br/api/consulta/v1/contratacoes/publicacao"

# Palavras-chave SST (case-insensitive, busca no objetoCompra)
# Keywords que podem buscar como substring simples (termos longos, sem ambiguidade)
KEYWORDS_SUBSTRING = [
    # Core SST
    "segurança do trabalho", "saúde ocupacional", "saúde e segurança",
    "medicina do trabalho", "medicina ocupacional",
    # Programas obrigatórios
    "pcmso", "ltcat",
    # Laudos e perícias
    "laudo técnico", "laudo pericial", "perícia trabalhista",
    "insalubridade", "periculosidade",
    # NRs específicas
    "norma regulamentadora",
    "treinamento nr", "capacitação nr",
    "treinamento segurança", "treinamento saúde",
    # Riscos
    "risco ocupacional", "risco psicossocial", "risco ergonômico",
    "agente nocivo", "mapa de risco",
    # eSocial SST
    "esocial sst", "evento s-2210", "evento s-2220", "evento s-2240",
    # Equipamentos / gestão
    "equipamento de proteção",
    "atestado de saúde ocupacional",
    "comunicação de acidente",
    "consultoria sst", "assessoria sst",
    "gestão de sst", "programa de prevenção",
    "programa de gerenciamento de risco",
    "saúde do trabalhador",
    "acidente de trabalho",
    "doença ocupacional",
    "higiene ocupacional",
]

# Keywords curtas que precisam de word boundary (regex) para evitar falso-positivo
# Ex: "pgr" não pode casar com "programa", "epi" com "epidemia", "cipa" com "municipal"
KEYWORDS_REGEX = {
    "pgr": r'\bpgr\b',
    "ppra": r'\bppra\b',
    "ppro": r'\bppro\b',
    "nr-1": r'\bnr[\s\-\.]*0?1\b',
    "nr-5": r'\bnr[\s\-\.]*0?5\b',
    "nr-6": r'\bnr[\s\-\.]*0?6\b',
    "nr-7": r'\bnr[\s\-\.]*0?7\b',
    "nr-9": r'\bnr[\s\-\.]*0?9\b',
    "nr-10": r'\bnr[\s\-\.]*10\b',
    "nr-12": r'\bnr[\s\-\.]*12\b',
    "nr-15": r'\bnr[\s\-\.]*15\b',
    "nr-17": r'\bnr[\s\-\.]*17\b',
    "nr-33": r'\bnr[\s\-\.]*33\b',
    "nr-35": r'\bnr[\s\-\.]*35\b',
    "cipa": r'\bcipa\b',
    "epi": r'\bepi\b',
    "epc": r'\bepc\b',
    "aso": r'\baso\b',  # Atestado de Saúde Ocupacional
    "cat": r'\bcat\b',  # Comunicação de Acidente de Trabalho
    "sst": r'\bsst\b',
    "sesmt": r'\bsesmt\b',
}

# UFs de interesse (MG + vizinhos acessíveis)
UFS = ["MG", "GO", "SP"]

# Modalidades: todas relevantes
MODALIDADES = {
    4: "Concorrência Eletrônica",
    5: "Concorrência Presencial",
    6: "Pregão Eletrônico",
    7: "Pregão Presencial",
    8: "Dispensa de Licitação",
    9: "Inexigibilidade",
    12: "Credenciamento",
}

DATA_DIR = Path(__file__).parent / "data"
DATA_DIR.mkdir(exist_ok=True)

HISTORICO_FILE = DATA_DIR / "historico_ids.json"
RESULTADOS_FILE = DATA_DIR / "resultados.json"
LOG_FILE = DATA_DIR / "monitor.log"


def log(msg):
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    try:
        print(line)
    except UnicodeEncodeError:
        print(line.encode('ascii', 'replace').decode('ascii'))
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(line + "\n")


def load_historico():
    if HISTORICO_FILE.exists():
        return set(json.loads(HISTORICO_FILE.read_text(encoding="utf-8")))
    return set()


def save_historico(ids):
    HISTORICO_FILE.write_text(json.dumps(list(ids)), encoding="utf-8")


def load_resultados():
    if RESULTADOS_FILE.exists():
        return json.loads(RESULTADOS_FILE.read_text(encoding="utf-8"))
    return []


def save_resultados(resultados):
    RESULTADOS_FILE.write_text(
        json.dumps(resultados, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )


def match_keywords(texto):
    """Retorna lista de keywords encontradas no texto."""
    if not texto:
        return []
    texto_lower = texto.lower()
    found = []

    # Substring match para termos longos
    for kw in KEYWORDS_SUBSTRING:
        if kw.lower() in texto_lower:
            found.append(kw)

    # Regex match para termos curtos (word boundary)
    for kw, pattern in KEYWORDS_REGEX.items():
        if re.search(pattern, texto_lower):
            found.append(kw)

    return found


def consultar_pncp(data_inicial, data_final, uf, modalidade=None, pagina=1, tamanho=50):
    """Consulta a API pública do PNCP."""
    params = {
        "dataInicial": data_inicial,
        "dataFinal": data_final,
        "uf": uf,
        "tamanhoPagina": tamanho,
        "pagina": pagina,
    }
    if modalidade:
        params["codigoModalidadeContratacao"] = modalidade

    try:
        resp = requests.get(BASE_URL, params=params, timeout=60)
        if resp.status_code == 200:
            return resp.json()
        elif resp.status_code == 400:
            return None
        else:
            log(f"  WARN: status {resp.status_code} para {uf} mod={modalidade} pg={pagina}")
            return None
    except requests.exceptions.Timeout:
        log(f"  TIMEOUT: {uf} mod={modalidade} pg={pagina}")
        return None
    except Exception as e:
        log(f"  ERRO: {e}")
        return None


def extrair_dados(item, keywords_found):
    """Extrai campos relevantes de um item da API."""
    orgao = item.get("orgaoEntidade", {})
    unidade = item.get("unidadeOrgao", {})

    return {
        "id": item.get("numeroControlePNCP", ""),
        "numero_compra": item.get("numeroCompra", ""),
        "processo": item.get("processo", ""),
        "objeto": item.get("objetoCompra", ""),
        "valor_estimado": item.get("valorTotalEstimado"),
        "valor_homologado": item.get("valorTotalHomologado"),
        "modalidade": item.get("modalidadeNome", ""),
        "modo_disputa": item.get("modoDisputaNome", ""),
        "situacao": item.get("situacaoCompraNome", ""),
        "amparo_legal": item.get("amparoLegalNome", ""),
        "srp": item.get("srp", False),
        "orgao_cnpj": orgao.get("cnpj", ""),
        "orgao_nome": orgao.get("razaoSocial", ""),
        "unidade_nome": unidade.get("nomeUnidade", ""),
        "uf": unidade.get("ufSigla", ""),
        "municipio": unidade.get("municipioNome", ""),
        "data_publicacao": item.get("dataPublicacaoPncp", ""),
        "data_abertura": item.get("dataAberturaProposta", ""),
        "data_encerramento": item.get("dataEncerramentoProposta", ""),
        "link_sistema": item.get("linkSistemaOrigem", ""),
        "link_pncp": f"https://pncp.gov.br/app/editais/{item.get('numeroControlePNCP', '')}",
        "keywords_match": keywords_found,
        "data_captura": datetime.now().isoformat(),
    }


def calcular_relevancia(item):
    """Score 0-100 baseado em relevância para Higilabor."""
    score = 0
    obj = (item.get("objeto") or "").lower()
    kws = item.get("keywords_match", [])

    # Mais keywords = mais relevante
    score += min(len(kws) * 15, 45)

    # Termos de alta relevância
    high_value = ["pcmso", "pgr", "medicina do trabalho", "saúde ocupacional",
                  "segurança do trabalho", "ltcat", "nr-1", "consultoria sst"]
    for hv in high_value:
        if hv in obj:
            score += 10

    # MG = bônus
    if item.get("uf") == "MG":
        score += 15

    # Valor estimado acessível (< R$ 500k = mais viável para Higilabor)
    val = item.get("valor_estimado")
    if val and val < 500000:
        score += 10
    elif val and val < 100000:
        score += 15

    # Modalidade favorável
    mod = (item.get("modalidade") or "").lower()
    if "dispensa" in mod or "credenciamento" in mod:
        score += 10

    # Prazo aberto
    enc = item.get("data_encerramento")
    if enc:
        try:
            dt_enc = datetime.fromisoformat(enc.replace("Z", "+00:00"))
            if dt_enc > datetime.now(dt_enc.tzinfo):
                score += 5
        except:
            pass

    return min(score, 100)


def rodar_monitoramento(dias_atras=1):
    """Executa o ciclo completo de monitoramento."""
    log("=" * 60)
    log("INICIANDO MONITORAMENTO PNCP")

    hoje = datetime.now()
    data_fim = hoje.strftime("%Y%m%d")
    data_ini = (hoje - timedelta(days=dias_atras)).strftime("%Y%m%d")

    log(f"Período: {data_ini} a {data_fim}")

    historico = load_historico()
    resultados_existentes = load_resultados()
    novos = []
    total_consultados = 0

    for uf in UFS:
        for cod_mod, nome_mod in MODALIDADES.items():
            log(f"Consultando {uf} | {nome_mod}...")
            pagina = 1
            while pagina <= 20:  # max 20 páginas por segurança
                data = consultar_pncp(data_ini, data_fim, uf, cod_mod, pagina)
                if not data:
                    break

                items = data.get("data", [])
                if not items:
                    break

                total_reg = data.get("totalRegistros", 0)
                total_consultados += len(items)

                for item in items:
                    id_pncp = item.get("numeroControlePNCP", "")
                    if not id_pncp or id_pncp in historico:
                        continue

                    objeto = item.get("objetoCompra", "")
                    keywords_found = match_keywords(objeto)

                    if keywords_found:
                        resultado = extrair_dados(item, keywords_found)
                        resultado["relevancia"] = calcular_relevancia(resultado)
                        novos.append(resultado)
                        historico.add(id_pncp)
                        log(f"  >> MATCH [{resultado['relevancia']}] {objeto[:80]}...")

                paginas_restantes = data.get("paginasRestantes", 0)
                if paginas_restantes <= 0:
                    break
                pagina += 1
                time.sleep(0.5)  # rate limit gentil

            time.sleep(0.3)

    # Ordenar novos por relevância
    novos.sort(key=lambda x: x.get("relevancia", 0), reverse=True)

    # Merge com existentes (manter últimos 30 dias)
    cutoff = (hoje - timedelta(days=30)).isoformat()
    resultados_existentes = [
        r for r in resultados_existentes
        if r.get("data_captura", "") >= cutoff
    ]
    todos = novos + resultados_existentes
    todos.sort(key=lambda x: x.get("relevancia", 0), reverse=True)

    save_resultados(todos)
    save_historico(historico)

    log(f"Total consultado: {total_consultados} contratações")
    log(f"Novos matches SST: {len(novos)}")
    log(f"Total ativo no banco: {len(todos)}")
    log("MONITORAMENTO CONCLUÍDO")
    log("=" * 60)

    return novos


def gerar_resumo(novos):
    """Gera resumo para notificação."""
    if not novos:
        return "Nenhuma licitação SST nova encontrada."

    linhas = [f"[ALERTA] {len(novos)} licitacao(oes) SST nova(s) encontrada(s)!\n"]
    for i, r in enumerate(novos[:10], 1):
        val = f"R$ {r['valor_estimado']:,.2f}" if r.get("valor_estimado") else "Valor NI"
        abertura = (r.get('data_abertura') or 'NI')[:10]
        linhas.append(
            f"{i}. [{r['relevancia']}pts] {r['municipio']}/{r['uf']} -- {r['modalidade']}\n"
            f"   {r['objeto'][:100]}\n"
            f"   {val} | Abertura: {abertura}\n"
            f"   {r['link_pncp']}\n"
        )

    if len(novos) > 10:
        linhas.append(f"\n... e mais {len(novos) - 10} resultados no dashboard.")

    return "\n".join(linhas)


if __name__ == "__main__":
    dias = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    novos = rodar_monitoramento(dias)
    resumo = gerar_resumo(novos)
    print("\n" + resumo)
