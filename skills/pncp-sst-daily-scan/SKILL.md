---
name: pncp-sst-daily-scan
description: |
  Scan diário do PNCP para oportunidades SST da Higilabor.
  Use SEMPRE que o usuário mencionar:
  - "roda PNCP", "scan licitações", "oportunidades PNCP", "dispensas SST"
  - "buscar licitação", "pncp hoje", "daily scan", "licitação SST"
  - Qualquer menção a PNCP, dispensas, licitações ou contratações públicas SST
  Contexto: Higilabor consultoria SST Uberlândia/MG. Busca dispensas eletrônicas
  (Lei 14.133/21 art. 75 II, teto R$ 59.906,02 em 2026) para disputar.
---

# PNCP — Scan Diário de Oportunidades SST

## Objetivo

Encontrar oportunidades de dispensa de licitação ABERTAS no Portal Nacional de Contratações Públicas (PNCP) que a Higilabor possa disputar. Foco em serviços SST: PGR, PCMSO, LTCAT, medicina do trabalho, segurança do trabalho, saúde ocupacional.

## Procedimento

### Passo 1 — Buscar no PNCP

Acessar via WebFetch a URL base com filtros:

```
https://pncp.gov.br/app/editais?status=recebendo_proposta&tipos_documento=edital
```

Fazer buscas com as palavras-chave (uma por vez):
1. "PCMSO"
2. "PGR"
3. "LTCAT"
4. "saúde ocupacional"
5. "segurança do trabalho"
6. "medicina do trabalho"
7. "SST"

**API alternativa** (preferível para dados estruturados):
```
GET https://pncp.gov.br/api/consulta/v1/contratacoes/publicacao
Params:
  dataInicial: YYYYMMDD (hoje - 7 dias)
  dataFinal: YYYYMMDD (hoje)
  uf: MG (depois GO, SP, BA, ES, DF, depois outros)
  codigoModalidadeContratacao: 8 (Dispensa)
  tamanhoPagina: 50
  pagina: 1
```

Iterar UFs na ordem de prioridade:
1. **P1**: MG
2. **P2**: GO, SP, BA, ES, DF
3. **P3**: amostra de PR, SC, RS, RJ, PE, CE, PA, MT, MS, TO

### Passo 2 — Filtrar resultados

Para cada resultado, verificar `objetoCompra` contra keywords SST:

**Keywords substring (termos longos, sem ambiguidade):**
- segurança do trabalho, saúde ocupacional, saúde e segurança, medicina do trabalho, medicina ocupacional
- pcmso, ltcat, laudo técnico, laudo pericial, perícia trabalhista, insalubridade, periculosidade
- norma regulamentadora, treinamento nr, capacitação nr, treinamento segurança, treinamento saúde
- risco ocupacional, risco psicossocial, risco ergonômico, agente nocivo, mapa de risco
- esocial sst, evento s-2210, evento s-2220, evento s-2240
- equipamento de proteção, atestado de saúde ocupacional, comunicação de acidente
- consultoria sst, assessoria sst, gestão de sst, programa de prevenção
- programa de gerenciamento de risco, saúde do trabalhador, acidente de trabalho
- doença ocupacional, higiene ocupacional

**Keywords regex (termos curtos — exigem word boundary):**
- pgr, ppp, aso, cipa, sipat, epi, cat, ppra, sesmt

**Descartar:**
- Valor estimado > R$ 59.906,02 (fora do teto de dispensa pequeno valor)
- Objetos que não sejam claramente SST
- Itens já encerrados (data encerramento < hoje)

### Passo 3 — Capturar dados

Para cada resultado válido, capturar:
| Campo | Fonte |
|-------|-------|
| Órgão | nomeOrgao ou similar |
| UF | uf |
| Município | municipio |
| Objeto | objetoCompra (resumo) |
| Valor estimado | valorTotalEstimado |
| Data encerramento | dataEncerramentoProposta |
| Link PNCP | URL completa do edital |

### Passo 4 — Priorizar

| Prioridade | Critério |
|------------|----------|
| **P1** | UF = MG (qualquer câmara/prefeitura/autarquia) |
| **P2** | UF em GO, SP, BA, ES, DF (estados vizinhos) |
| **P3** | Resto do Brasil |

Dentro de cada prioridade, ordenar por data de encerramento (mais urgente primeiro).

### Passo 5 — Gerar output

Criar/atualizar o arquivo:
```
/home/user/Playground/pncp_oportunidades.md
```

**Formato do arquivo:**

```markdown
# PNCP — Oportunidades SST para Higilabor

---

## Scan de YYYY-MM-DD

**Palavras-chave varridas:** PCMSO · PGR · SST · saúde ocupacional · segurança do trabalho · LTCAT · medicina do trabalho
**Critério:** Dispensas (Lei 14.133/21 art. 75 II) · Teto ≤ R$ 59.906,02 · Recebendo proposta

### Resumo
- **MG dispensas ativas:** X
- **P2 dispensas:** X
- **P3 dispensas:** X
- **Total:** X

---

### P1 — Minas Gerais · Dispensas

| Prioridade | UF | Órgão | Município | Objeto | Valor | Encerra | Link |
|------------|----|----|----|----|----|----|-----|
| P1 | MG | ... | ... | ... | R$ ... | DD/MM/YYYY | https://pncp.gov.br/... |

### P2 — Estados vizinhos

| Prioridade | UF | Órgão | Município | Objeto | Valor | Encerra | Link |
|------------|----|----|----|----|----|----|-----|

### P3 — Outros estados (top 5)

| Prioridade | UF | Órgão | Município | Objeto | Valor | Encerra | Link |
|------------|----|----|----|----|----|----|-----|

### Descartados

| Órgão | UF | Razão |
|-------|----|-------|
```

**Regras especiais:**
- Se nenhuma oportunidade em MG: registrar explicitamente **"Sem oportunidades MG hoje"** e listar as 5 melhores de outros estados
- Destacar com ⚠️ itens que encerram em menos de 7 dias
- Incluir seção de oportunidades MG não-dispensa (pregão, credenciamento) se encontradas

### Passo 6 — Resumo na resposta

Mostrar resumo curto ao usuário:
- Quantas em MG
- Quantas total
- Top 3 oportunidades mais relevantes

## Fallback

Se a API PNCP não responder via WebFetch, rodar como alternativa:
```bash
python /home/user/Playground/monitor_pncp.py 7
```
E processar o JSON gerado em `/home/user/Playground/alerta-licitacao/data/resultados.json`.

## Referências no repositório

- `monitor_pncp.py` — script Python com keywords e lógica de relevância completa
- `alerta-licitacao/` — dashboard e dados históricos
- `historico_ids.json` — IDs já processados (evitar duplicatas)
