---
name: higilabor-campanhas
description: |
  Skill completa da Higilabor para inteligência comercial e SST. Use SEMPRE que o usuário mencionar:
  - Campanhas, prospecção, scripts de WhatsApp ou e-mail para clientes SST
  - Mapeamento de cidades sem médico do trabalho (CFM, DDD 34/33/35)
  - Análise de empresas (mineração Pará, base de clientes, UEP, FAP)
  - NR-1 psicossocial, PGR, PCMSO, LTCAT, laudos, perícias
  - Propostas comerciais (F1 Revisão, F2 NR-1, F3 PCMSO Telemedicina, F4 Mineração, F5 FAP)
  - Kit vendedor: cronograma diário, roteiro de diagnóstico, metas
  - SEO, JSON-LD, meta tags para higilabor.com.br
  - Dashboard ou landing page NR-1
  - Qualquer geração de Excel (.xlsx) para a Higilabor
  Contexto: Higilabor é consultoria SST em Uberlândia/MG, dono Octav, capacidade 650 UEP/mês,
  médica própria (tia) assina ASOs via telemedicina. Deadline NR-1 psicossocial: 26/05/2026.
---

# Higilabor — Skill de Campanhas e Inteligência Comercial

## Contexto da empresa

- **Higilabor**: consultoria SST, Uberlândia/MG
- **Dono**: Octav — acumula comercial, financeiro, decisão final
- **Médica própria**: tia de Octav, assina ASOs via telemedicina (diferencial competitivo)
- **Capacidade**: 650 UEP/mês | Estrutura fixa: R$ 38.150/mês
- **Deadline crítico**: NR-1 psicossocial obrigatória a partir de **26/05/2026** (urgência comercial)
- **Situação financeira**: déficit ~R$ 2.287/mês (março/26), inadimplência 29,3%

## Os 5 Fronts Comerciais (F1–F5)

| Front | Nicho | Gatilho principal |
|-------|-------|-------------------|
| **F1** | Clientes ativos — revisão completa | Reativação + upsell |
| **F2** | NR-1 Psicossocial | Deadline 26/05/26 — multa + autuação |
| **F3** | PCMSO Telemedicina | Cidades DDD 34 sem médico do trabalho |
| **F4** | Mineração Pará | NR-22 + base Beto (95 prioridade A) |
| **F5** | Redução FAP | Economia previdenciária (0,5× a 2,0×) |

## Arquivos gerados na sessão de 08/04/2026

Todos em `C:/Users/octav/OneDrive/Apps/Claude/`:

| Arquivo | Conteúdo |
|---------|----------|
| `mapa_oportunidades_pcmso.xlsx` | 32 cidades DDD 34 OPORTUNIDADE ALTA + telefones prefeitos |
| `acao_imediata_higilabor.xlsx` | 95 empresas Prioridade A (Pará) + 31 municípios + scripts |
| `propostas_higilabor.xlsx` | 5 templates de proposta (F1–F5) com tabelas de preço por porte |
| `kit_vendedor_higilabor.xlsx` | Cronograma 28 dias + Roteiro 18 etapas + KPIs |
| `SESSAO_2026-04-08.md` | Resumo completo da sessão |

Scripts Python (regeneram os xlsx):
- `gerar_mapa_oportunidades.py`
- `gerar_acao_imediata.py`
- `gerar_propostas.py`
- `gerar_cronograma_roteiro.py`

## O que fazer conforme o pedido

### Se pedir campanha / scripts de abordagem
→ Leia `references/scripts_campanha.md` para os textos prontos de WhatsApp e e-mail por front.

### Se pedir proposta comercial
→ Leia `references/propostas.md` para estrutura, preços e argumentos por porte.
→ Execute `scripts/gerar_propostas.py` se precisar regenerar o Excel.

### Se pedir mapeamento de território / CFM
→ Leia `references/mapeamento_territorio.md` para a lógica de classificação e os 32 municípios mapeados.
→ Execute `gerar_mapa_oportunidades.py` para regenerar.

### Se pedir SEO / JSON-LD / meta tags
→ Leia `references/seo_higilabor.md` para o audit completo e os snippets prontos para colar.

### Se pedir dashboard / landing page NR-1
→ O arquivo `landing_nr1_higilabor.html` já existe em `C:/Users/octav/OneDrive/Apps/Claude/`.
→ Para regenerar, use o padrão Chart.js + HTML autossuficiente com countdown até 26/05/2026.

### Se pedir kit vendedor / cronograma
→ Execute `gerar_cronograma_roteiro.py` ou abra `kit_vendedor_higilabor.xlsx`.

### Se pedir análise financeira / DRE
→ Use a skill `anthropic-skills:erp-higilabor` ou `anthropic-skills:dre-higilabor`.

## Regras de negócio críticas

1. **Piso de preço**: custo real + overhead + tributo + margem 20% mínima. Nunca ceder abaixo.
2. **Telemedicina legal**: NR-7 + Res. CFM 2.314/2022 permitem médica de outra especialidade
   coordenar PCMSO via telemedicina quando não há MT na localidade.
3. **Urgência NR-1**: A multa por não adequação pode chegar a R$ 6.674 por infração.
   Prazo: **48 dias a partir de 08/04/2026** = **26/05/2026**.
4. **FAP**: empresas com FAP > 1,0 pagam acréscimo no RAT/INSS. A Higilabor pode reduzir.
5. **2 vendedores**: Vendedor 1 (F1 + F2, clientes ativos + NR-1), Vendedor 2 (F3 + F4 + F5, novos).

## Formato padrão de saída

- Scripts de WhatsApp: linguagem direta, máx. 5 linhas, sem formalidades excessivas
- E-mails: assunto + corpo de 3 parágrafos + CTA claro
- Propostas: Excel estilizado com cores Higilabor (azul escuro #0D2B5A, azul médio #1565C0)
- Cronogramas: Excel com código de cores por front
- SEO: snippets prontos para copiar e colar no CMS
