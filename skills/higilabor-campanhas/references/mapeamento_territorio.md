# Mapeamento de Território — Higilabor

## Lógica de Classificação (CFM + DDD)

### Status possíveis por município
| Status | Significado | Ação |
|--------|-------------|------|
| SATURADO | 3+ médicos do trabalho residentes | Não prospectar PCMSO |
| COM CONCORRENTE | 1–2 MT residentes | Prospectar com diferencial telemedicina |
| ITINERANTE | MT visita periodicamente | Oferta de substituição |
| OPORTUNIDADE ALTA | Sem MT residente | Abordagem direta: "resolvemos seu problema" |
| VERIFICAR | Dados inconclusivos | Confirmar via CFM portal |

### Base legal para PCMSO telemedicina
- **NR-7** (Portaria MTE 1.562/2019): permite coordenação por MT de outra localidade
- **Resolução CFM 2.314/2022**: regulamenta telemedicina para fins trabalhistas
- **Argumento comercial**: "Total validade jurídica. Assinamos seu ASO sem você precisar sair da cidade."

## DDD 34 — 32 municípios OPORTUNIDADE ALTA (mapeados em 08/04/2026)

Arquivo completo: `mapa_oportunidades_pcmso.xlsx` (aba "OPORTUNIDADE ALTA")

Cidades-chave (maiores populações):
- Araguari, Ituiutaba, Monte Alegre de Minas, Tupaciguara, Centralina
- Campina Verde, Capinópolis, Cachoeira Dourada, Gurinhatã

## Expansão futura

| DDD | Cidades | Status |
|-----|---------|--------|
| **33** | 177 cidades (Juiz de Fora região) | Não mapeado |
| **35** | 159 cidades (Pouso Alegre/Sul MG) | Não mapeado |
| **34** | 70 cidades | ✅ Mapeado — 32 OPORTUNIDADE ALTA |

## Mineração Pará (base Beto)

Arquivo: `acao_imediata_higilabor.xlsx`

| Prioridade | Qtd | Critério |
|------------|-----|---------|
| **A** | 95 | Minerais críticos + e-mail disponível |
| **B** | 216 | Minerais comuns |
| **C** | 63 | Grandes empresas / sem e-mail |

Norma aplicável: **NR-22 — Segurança e Saúde Ocupacional na Mineração**
