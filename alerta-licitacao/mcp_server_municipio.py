#!/usr/bin/env python3
"""
MCP stdio server — ferramentas de municipio para Claude.
Protocolo: JSON-RPC 2.0 via stdin/stdout (sem pacote `mcp`).

Ferramentas expostas:
  populacao_ibge   — população estimada de um município via IBGE
  dispensas_pncp   — dispensas de licitação recentes via PNCP (modalidade 8)

Instalação no Claude Desktop / Claude Code:
  Adicionar ao .mcp.json (ver raiz do projeto).
"""

import sys
import json
import traceback
from consultar_municipio import get_populacao_ibge, get_dispensas_pncp

# ── Definição das ferramentas ──────────────────────────────────────────────────

TOOLS = [
    {
        "name": "populacao_ibge",
        "description": (
            "Retorna a população estimada de um município brasileiro via API do IBGE. "
            "Útil para avaliar porte do município antes de abordar licitações."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "municipio": {
                    "type": "string",
                    "description": "Nome do município (ex: 'Araguari', 'Uberaba')"
                },
                "uf": {
                    "type": "string",
                    "description": "Sigla do estado (ex: 'MG', 'GO', 'SP')",
                    "minLength": 2,
                    "maxLength": 2
                }
            },
            "required": ["municipio", "uf"]
        }
    },
    {
        "name": "dispensas_pncp",
        "description": (
            "Consulta o PNCP (Portal Nacional de Contratações Públicas) e retorna as dispensas "
            "de licitação (modalidade 8) publicadas recentemente para um município. "
            "Use para verificar se o município tem dispensa de licitação ativa ou recente. "
            "O campo 'objeto' descreve o que está sendo contratado."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "municipio": {
                    "type": "string",
                    "description": "Nome do município (ex: 'Frutal', 'Araguari')"
                },
                "uf": {
                    "type": "string",
                    "description": "Sigla do estado (ex: 'MG')",
                    "minLength": 2,
                    "maxLength": 2
                },
                "dias": {
                    "type": "integer",
                    "description": "Quantos dias para trás buscar (padrão: 60)",
                    "default": 60,
                    "minimum": 1,
                    "maximum": 365
                }
            },
            "required": ["municipio", "uf"]
        }
    }
]

# ── Protocolo MCP JSON-RPC ─────────────────────────────────────────────────────

def send(obj):
    line = json.dumps(obj, ensure_ascii=False)
    sys.stdout.write(line + "\n")
    sys.stdout.flush()


def send_result(req_id, result):
    send({"jsonrpc": "2.0", "id": req_id, "result": result})


def send_error(req_id, code, message):
    send({"jsonrpc": "2.0", "id": req_id, "error": {"code": code, "message": message}})


# ── Handlers ───────────────────────────────────────────────────────────────────

def handle_initialize(req_id, params):
    send_result(req_id, {
        "protocolVersion": "2024-11-05",
        "capabilities": {"tools": {}},
        "serverInfo": {
            "name": "municipio-sst",
            "version": "1.0.0"
        }
    })


def handle_tools_list(req_id, params):
    send_result(req_id, {"tools": TOOLS})


def handle_tools_call(req_id, params):
    tool_name = params.get("name")
    args = params.get("arguments", {})

    try:
        if tool_name == "populacao_ibge":
            municipio = args.get("municipio", "").strip()
            uf = args.get("uf", "").strip().upper()
            if not municipio or not uf:
                send_error(req_id, -32602, "Parâmetros obrigatórios: municipio, uf")
                return
            resultado = get_populacao_ibge(municipio, uf)
            texto = _formatar_populacao(resultado)

        elif tool_name == "dispensas_pncp":
            municipio = args.get("municipio", "").strip()
            uf = args.get("uf", "").strip().upper()
            dias = int(args.get("dias", 60))
            if not municipio or not uf:
                send_error(req_id, -32602, "Parâmetros obrigatórios: municipio, uf")
                return
            resultado = get_dispensas_pncp(municipio, uf, dias)
            texto = _formatar_dispensas(resultado)

        else:
            send_error(req_id, -32601, f"Ferramenta desconhecida: {tool_name}")
            return

        send_result(req_id, {
            "content": [{"type": "text", "text": texto}]
        })

    except Exception as e:
        tb = traceback.format_exc()
        send_error(req_id, -32603, f"Erro interno: {e}\n{tb}")


# ── Formatadores de saída ──────────────────────────────────────────────────────

def _formatar_populacao(r: dict) -> str:
    if "erro" in r and "populacao" not in r:
        return f"ERRO: {r['erro']}"
    pop = r.get("populacao")
    pop_fmt = f"{pop:,}".replace(",", ".") if pop else "indisponível"
    linhas = [
        f"Município  : {r.get('municipio')} / {r.get('uf')}",
        f"Código IBGE: {r.get('codigo_ibge')}",
        f"População  : {pop_fmt} hab. (ref. {r.get('ano_referencia', 'N/A')})",
    ]
    if "erro_populacao" in r:
        linhas.append(f"Aviso      : {r['erro_populacao']}")
    return "\n".join(linhas)


def _formatar_dispensas(r: dict) -> str:
    linhas = [
        f"Dispensas de licitação — {r['municipio']}/{r['uf']}",
        f"Período    : últimos {r['periodo_dias']} dias ({r['data_inicial']} a {r['data_final']})",
        f"Encontradas: {r['total_encontradas']}",
    ]
    if "erro" in r:
        linhas.append(f"ERRO: {r['erro']}")

    disp = r.get("dispensas", [])
    if not disp:
        linhas.append("\nNenhuma dispensa encontrada no período para este município.")
    else:
        for i, d in enumerate(disp, 1):
            val = d.get("valor_estimado")
            val_fmt = f"R$ {val:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".") \
                      if val else "N/I"
            linhas.append(f"\n{i}. {d.get('objeto', '')[:120]}")
            linhas.append(f"   Órgão    : {d.get('orgao_nome', '')}")
            linhas.append(f"   Valor est: {val_fmt}")
            linhas.append(f"   Situação : {d.get('situacao', '')}")
            linhas.append(f"   Publicado: {(d.get('data_publicacao') or '')[:10]}")
            linhas.append(f"   Amparo   : {d.get('amparo_legal', '')}")
            linhas.append(f"   Link PNCP: {d.get('link_pncp', '')}")
            if d.get("link_sistema"):
                linhas.append(f"   Link orig: {d.get('link_sistema', '')}")
    return "\n".join(linhas)


# ── Loop principal ─────────────────────────────────────────────────────────────

def main():
    # Força encoding UTF-8 no stdout
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    for raw_line in sys.stdin:
        raw_line = raw_line.strip()
        if not raw_line:
            continue

        try:
            msg = json.loads(raw_line)
        except json.JSONDecodeError as e:
            send_error(None, -32700, f"Parse error: {e}")
            continue

        req_id = msg.get("id")
        method = msg.get("method", "")
        params = msg.get("params") or {}

        if method == "initialize":
            handle_initialize(req_id, params)
        elif method == "initialized":
            pass  # notificação, sem resposta
        elif method == "tools/list":
            handle_tools_list(req_id, params)
        elif method == "tools/call":
            handle_tools_call(req_id, params)
        elif method == "ping":
            send_result(req_id, {})
        else:
            if req_id is not None:
                send_error(req_id, -32601, f"Método não implementado: {method}")


if __name__ == "__main__":
    main()
