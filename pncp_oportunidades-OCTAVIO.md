# PNCP -- Oportunidades SST para Higilabor

---

## Scan de 09/04/2026 — Valores Confirmados via API

### Resumo do dia
- **MG dispensas ativas:** 1 (Câmara Rodeiro — valor confirmado R$ 5.258,17, encerra 14/04)
- **Total dispensas ≤ R$ 59.906 ativas:** 5 (1 MG, 1 SP valor sigiloso, 2 PR, 1 SC)
- **⚠️ ALERTA:** Câmara Concórdia/SC — dispensa R$ 8.000, encerra **HOJE 10/04/2026**
- **MG pregões:** 4 ativos (SAAE Manhuaçu R$21k, ACISPES R$10k, Varjão R$99k, CIMOG R$513k)

### Dispensas confirmadas com valor — recebendo proposta

| Prioridade | UF | Órgão | Objeto | Valor | Encerra | Link |
|------------|----|---------|---------|----|-----|------|
| **P1 — MG** | MG | **Câmara Municipal de Rodeiro** | PGR, PCMSO, LTCAT, LIP, eSocial (12m), 2 Palestras NR-1 psicossocial | **R$ 5.258,17** | 14/04/2026 | https://pncp.gov.br/app/compras/26119990000175/2026/12 |
| P2 — SP | SP | Prefeitura de Carapicuíba | SST completo (valor sigiloso) | Sigiloso | 14/04/2026 | https://pncp.gov.br/app/compras/44892693000140/2026/42 |
| P3 — PR | PR | Prefeitura Vera Cruz do Oeste | PGR, PCMSO, LTCAT, LTIP, AET | R$ 38.768,18 | 15/04/2026 | https://pncp.gov.br/app/compras/78101821000101/2026/39 |
| P3 — PR | PR | Prefeitura de Antonina | PGR, PCMSO, LTCAT, LTIP + visitas técnicas | R$ 49.990,00 | 09/12/2026 | https://pncp.gov.br/app/compras/76022516000107/2026/41 |
| P3 — SC | SC | **Câmara Concórdia ⚠️ HOJE** | PGR + LTCAT | R$ 8.000,00 | **10/04/2026** | https://pncp.gov.br/app/compras/75321406000175/2026/18 |

#### Detalhamento — Câmara de Rodeiro (P1 MG, dispensa 8/2026)
| Item | Serviço | Valor |
|------|---------|-------|
| 1 | LIP (Laudo de Insalubridade/Periculosidade) | R$ 650,00 |
| 2 | LTCAT | R$ 800,00 |
| 3 | Exames médicos — 15 ASOs (R$ 50/un) | R$ 750,00 |
| 4 | eSocial (S-2210/2220/2240) — 12 meses (R$ 40/mês) | R$ 480,00 |
| 5 | Palestras NR-1 Psicossocial — 2 eventos (R$ 950/un) | R$ 1.900,00 |
| 6 | PCMSO | R$ 750,00 |
| 7 | PGR/GRO | R$ 878,17 |
| **TOTAL** | | **R$ 5.258,17** |
> Rodeiro já está no radar Higilabor (ver `editais_rodeiro_domsilverio.md`, `proposta_rodeiro.md`). Esta é a Dispensa 8/2026 — verificar se é nova ou ampliação.

### MG — Pregões ativos com valores confirmados (fora escopo dispensa)
| Órgão | Município | Objeto | Valor Total | Encerra | Link |
|--------|-----------|--------|-------------|---------|------|
| SAAE Manhuaçu | Manhuaçu | PCMSO + exames (periódicos, admissionais, audiometria, avaliação psicossocial) | R$ 21.090,45 | 27/06/2026 | https://pncp.gov.br/app/compras/22050561000138/2026/6 |
| ACISPES | Juiz de Fora | AET + LTCAT + LTIP em 4 unidades (incluindo 1 unidade RJ) | R$ 10.375,00 | 28/04/2026 | https://pncp.gov.br/app/compras/01203485000183/2026/45 |
| Prefeitura Varjão de Minas | Varjão de Minas | Eng. segurança + medicina do trabalho | R$ 99.137,92 | 23/04/2026 | https://pncp.gov.br/app/compras/01609780000134/2026/6 |
| CIMOG Baixa Mogiana | Guaxupé | Medicina e segurança (consórcio intermunicipal) | R$ 513.824,26 | 15/04/2026 | https://pncp.gov.br/app/compras/32308233000142/2026/12 |

---

## Scan de 09/04/2026 (anterior — mantido por referência)

**Palavras-chave varridas:** medicina trabalho | seguranca trabalho | PGR PCMSO | saude ocupacional | LTCAT laudo | esocial SST
**API usada:** `pncp.gov.br/api/search/?tipos_documento=edital`
**Filtro temporal:** publicacoes recentes (marco-abril/2026) + backlog geral
**Criterio principal:** Dispensas e contratacoes diretas SST com prazo aberto

### Resumo executivo

| Metrica | Qtd |
|---------|-----|
| Total de oportunidades SST ativas (prazo aberto ou recente) | ~18 |
| P1 -- Minas Gerais | 10 |
| P2 -- Estados vizinhos (SP/GO/ES/BA) | 3 |
| P3 -- Outros estados | 5 |
| Dispensas/contratacao direta | 14 |
| Pregoes eletronicos | 3 |
| Credenciamentos (abertos continuamente) | 1 |

**Observacao importante:** A API do PNCP nao retorna valores estimados na busca. Valores precisam ser verificados individualmente nos editais.

---

## P1 -- Minas Gerais (PRIORIDADE MAXIMA)

### Dispensas e Contratacoes Diretas -- MG

| # | Orgao | Municipio | Objeto | Modalidade | Publicado | Encerra | Status | ID PNCP |
|---|-------|-----------|--------|------------|-----------|---------|--------|---------|
| 1 | **Camara Municipal de Rodeiro** | Rodeiro | SST completo: laudos, saude ocupacional, envios mensais eSocial | Dispensa 8/2026 | 08/04/2026 | **14/04/2026** | Divulgada | `7b7bc0c230d404feed3f417efdf944bd` |
| 2 | **Camara Municipal de Dom Silverio** | Dom Silverio | Exames clinicos ocupacionais PCMSO/NR-07 (medico qualificado) | Dispensa 4/2026 | 08/04/2026 | **15/04/2026** | Divulgada | `6f8f411bebba0ada67b8b63acbbb267f` |
| 3 | **Camara Municipal de Liberdade** | Liberdade | Consultoria e assessoria em seguranca do trabalho e saude ocupacional | Dispensa 4/2025 | 08/04/2026 | A verificar | Divulgada | `a941931e933854d5d47bc7b6b893657b` |
| 4 | **Municipio de Sao Lourenco** | Sao Lourenco | Servicos especializados de seguranca e medicina do trabalho | Dispensa 0026/2026 | 31/03/2026 | A verificar | Divulgada | `687e5bf7a2f2aaf3873df611aebf21fc` |
| 5 | **Campo Belo Camara Municipal** | Campo Belo | Servicos SST especializados | Dispensa PDE 3/2026 | 31/03/2026 | 08/04/2026 | Divulgada | `c9668f31c0cf08a7dea8b250403b66d4` |
| 6 | **Campo Belo Camara Municipal** | Campo Belo | Servicos SST especializados | Dispensa 23/2026 | 31/03/2026 | 08/04/2026 | Suspensa | `a2aaa5050572d57b7e2b669f4f275129` |
| 7 | **Camara Municipal de Nazareno** | Nazareno | PGR/PCMSO -- servicos SST | Dispensa 526/2026 | 31/03/2026 | A verificar | Divulgada | `4403dabc61fa1f939b958708cde527f5` |
| 8 | **Camara Municipal de Cajuri** | Cajuri | PGR/PCMSO -- servicos SST | Dispensa 7/2026 | 30/03/2026 | A verificar | Divulgada | `d758a018cde2658dbcb7405c83976c43` |
| 9 | **Consorcio Pub. Gestao Integrada** | Andradas | Envio informacoes obrigatorias SST ao eSocial | Dispensa 325/2025 | 22/05/2025 | A verificar | Divulgada | `9435df35f282da46c110307ef30cec7b` |

### Pregoes e Credenciamentos -- MG

| # | Orgao | Municipio | Objeto | Modalidade | Publicado | Encerra | Status | ID PNCP |
|---|-------|-----------|--------|------------|-----------|---------|--------|---------|
| 10 | **CIMOG - Baixa Mogiana** | Guaxupe | Registro de precos medicina e seguranca do trabalho | Pregao Eletronico 03/2026 | 01/04/2026 | **15/04/2026** | Divulgada | `c7313fdeb6c765d1a54cd5bfba98fccb` |
| 11 | **Municipio de Varginha** | Varginha | Registro de precos pericias medicas e saude ocupacional | Pregao Eletronico 20/2026 | 08/04/2026 | **27/04/2026** | Divulgada | `338560f3ce9d7c3a19e79593e2f98a09` |
| 12 | **CIMINAS - Consorcio Interfederativo MG** | Araxa | Credenciamento em Medicina do Trabalho e Seguranca | Credenciamento 2/2025 | 15/10/2025 | **Aberto continu.** | Divulgada | `04686d7f17dfdbf0f26ae07b95dfea88` |

### MG -- Publicados recentemente mas possivelmente encerrados

| # | Orgao | Municipio | Objeto | Modalidade | Status | Nota |
|---|-------|-----------|--------|------------|--------|------|
| - | Municipio de Varjao de Minas | Varjao de Minas | Engenharia e seguranca do trabalho | Pregao 2/2026 | **Revogada** | Republicacao possivel |
| - | Municipio de Materlandia | Materlandia | PGR/PCMSO | Pregao 8/2026 | **Suspensa** | Reabertura possivel |
| - | Ministerio da Saude (BH) | Belo Horizonte | Engenharia seguranca do trabalho - laudo | Dispensa 23/2026 | Encerrada 31/03 | Referencia de mercado |

---

## P2 -- Estados Vizinhos (SP, GO, ES, BA, RJ, MS)

### Dispensas e Contratacoes Diretas -- P2

| # | UF | Orgao | Municipio | Objeto | Modalidade | Publicado | Encerra | Status | ID PNCP |
|---|-----|-------|-----------|--------|------------|-----------|---------|--------|---------|
| 1 | GO | Municipio de Jaupaci | Jaupaci | Servicos SST especializados | Dispensa 39-A/2026 | 01/04/2026 | Encerrada | Divulgada | `b61415c7ecf532a6df26d82ccbcf203a` |
| 2 | GO | Municipio de Anapolis | Anapolis | Exames medicos e pericias do trabalho | Inexigibilidade 22/2026 | 08/04/2026 | A verificar | Divulgada | `d09fbb3b81a139445e5512108802460e` |
| 3 | ES | Municipio de Pedro Canario | Pedro Canario | SST -- contratacao empresa | Concorrencia 3/2026 | 24/03/2026 | **09/04/2026** | Suspensa | `d5d5135086b4565a5726f51b5a25de86` |
| 4 | SP | Camara Mun. Varzea Paulista | Varzea Paulista | Exames clinicos ocupacionais PCMSO | Dispensa DL07/2026 | 06/04/2026 | **10/04/2026** | Divulgada | `4b0f97cfc35f8aac97511e6f2246862f` |
| 5 | BA | Municipio de Nordestina | Nordestina | PGR + programas SST | Dispensa 008/2026 | 19/03/2026 | 23/03/2026 | Divulgada | `69b50123f86a2c0751cec7e16024a1c4` |

---

## P3 -- Outros Estados

### Dispensas e Contratacoes Diretas -- P3

| # | UF | Orgao | Municipio | Objeto | Modalidade | Publicado | Encerra | Status | ID PNCP |
|---|-----|-------|-----------|--------|------------|-----------|---------|--------|---------|
| 1 | PR | Municipio de Vera Cruz do Oeste | Vera Cruz do Oeste | PGR, PCMSO, LTCAT, LTIP, AET | Dispensa 3/2026 | 07/04/2026 | **15/04/2026** | Divulgada | `9f12e5a6faa9e3bf04de2e303ee78d04` |
| 2 | PR | Municipio de Paulo Frontin | Paulo Frontin | Seguranca do trabalho | Dispensa DL14/2026 | 08/04/2026 | A verificar | Divulgada | `c22d97d2160e6bb070c8e7d8dfac2597` |
| 3 | PR | Santa Terezinha de Itaipu CM | Sta Terezinha de Itaipu | SST especializado | Dispensa 5/2026 | 01/04/2026 | A verificar | Divulgada | `c3325abd9c84b0d9002e7ae57924495c` |
| 4 | PR | Municipio de Sao Joao do Ivai | Sao Joao do Ivai | Registro precos SST | Pregao 22/2026 | 25/03/2026 | **28/04/2026** | Divulgada | `5876fce5201c198629cd087499227e13` |
| 5 | PR | Municipio de Ouro Verde do Oeste | Ouro Verde do Oeste | PGR/PCMSO/LTCAT implementacao | Pregao PCE 19/2026 | 06/04/2026 | **23/04/2026** | Divulgada | `51fcb60ea587bdad95f6964effb063fb` |
| 6 | PR | Municipio de Mariopolis | Mariopolis | Medicina e seguranca do trabalho | Pregao 90019/2026 | 27/03/2026 | **15/04/2026** | Divulgada | `02ecc85921c8b6bb785befe44da0a7af` |
| 7 | TO | Municipio de Lagoa da Confusao | Lagoa da Confusao | Medicina e seguranca do trabalho | Dispensa 22/2026 | 07/04/2026 | A verificar | Divulgada | `0656b824d3028b1d90ef0df9f064c714` |
| 8 | RS | Municipio de Cerro Branco | Cerro Branco | Saude e medicina do trabalho | Pregao 6/2026 | 20/03/2026 | **09/04/2026** | Divulgada | `fb6e0355abb221cff82face1703428d4` |
| 9 | RS | Municipio de Arroio Grande | Arroio Grande | Registro precos SST | Pregao 15/2026 | 06/04/2026 | **23/04/2026** | Divulgada | `de456e97ecbb64bbb7914a0b3ce32dcd` |
| 10 | AM | Camara Municipal de Parintins | Parintins | Registro precos SST empresas | Pregao 003/2026 | 08/04/2026 | **24/04/2026** | Divulgada | `80d9fa34f9b43befd4eaeaeee263efef` |
| 11 | RO | Mun. Nova Brasilandia D'Oeste | Nova Brasilandia | PGR/PCMSO/LTCAT | Pregao 06/2026 | 05/02/2026 | **10/04/2026** | Divulgada | `bdffd794d54dbefc24abcd6a2064facf` |

---

## Acoes Urgentes -- 09/04/2026

### ACAO IMEDIATA (encerra esta semana)

1. **Camara de Rodeiro/MG -- ENCERRA 14/04 (5 dias)**
   - Link: `https://pncp.gov.br/app/editais/26119990000175/2026/12`
   - Escopo: SST completo + eSocial
   - Acao: verificar edital, preparar proposta ate 13/04

2. **Camara de Dom Silverio/MG -- ENCERRA 15/04 (6 dias)**
   - Link: `https://pncp.gov.br/app/editais/01759101000103/2026/6`
   - Escopo: PCMSO/NR-07, exames clinicos
   - Valor estimado: R$ 2.006,67

3. **CIMOG Baixa Mogiana/Guaxupe/MG -- ENCERRA 15/04 (6 dias)**
   - Pregao Eletronico de registro de precos
   - Escopo: medicina e seguranca do trabalho (consorcio intermunicipal)
   - Maior volume, requer cadastro em sistema de pregao

### ACAO PROXIMA SEMANA

4. **Municipio de Varginha/MG -- ENCERRA 27/04 (18 dias)**
   - Pregao Eletronico 20/2026 -- pericias medicas e saude ocupacional
   - Varginha = 90 km de Uberlandia -- operacionalmente viavel

5. **Camara de Liberdade/MG -- Prazo a verificar**
   - Dispensa para consultoria SST

6. **Municipio de Sao Lourenco/MG -- Prazo a verificar**
   - Dispensa para seguranca e medicina do trabalho

7. **Camara de Nazareno/MG -- Prazo a verificar**
   - Dispensa PGR/PCMSO

8. **Camara de Cajuri/MG -- Prazo a verificar**
   - Dispensa PGR/PCMSO

### CREDENCIAMENTO PERMANENTE

9. **CIMINAS (Araxa/MG) -- Credenciamento continuo**
   - Chamamento publico para credenciamento em medicina do trabalho
   - Sem prazo fixo de encerramento -- pode aderir a qualquer momento
   - Araxa = ~160 km de Uberlandia

---

## Volume total encontrado nas buscas

| Busca | Total no PNCP |
|-------|---------------|
| medicina trabalho | 5.059 editais |
| seguranca trabalho | 28.867 editais |
| PGR PCMSO | 1.789 editais |
| saude ocupacional | ~3.000 editais |
| LTCAT laudo | 1.972 editais |
| esocial SST | 418 editais |

**Nota:** Estes totais incluem todo o historico do PNCP (desde 2023). A grande maioria ja esta encerrada. Os itens acima foram filtrados para publicacoes recentes (mar-abr/2026) com prazo potencialmente aberto.

---

## Limitacoes da API PNCP

- A API de busca **nao retorna valores estimados** -- precisam ser verificados no edital individual
- As paginas de edital sao renderizadas por JavaScript (SPA) -- WebFetch nao consegue extrair dados das paginas individuais
- O campo `situacao_nome` mostra "Divulgada no PNCP" mesmo para editais ja encerrados -- nao ha filtro confiavel por "recebendo proposta"
- Datas de vigencia (`data_fim_vigencia`) frequentemente se referem ao prazo do pregao/sessao, nao ao recebimento de propostas de dispensa
- Para dispensas sem `data_fim_vigencia`, o prazo tipico e 3-5 dias uteis apos publicacao

---

## Historico -- Scan de 08/04/2026

| # | Orgao | Municipio | Objeto | Modalidade | Encerra |
|---|-------|-----------|--------|------------|---------|
| 1 | Camara Municipal de Rodeiro | Rodeiro/MG | SST + medicina + laudos + eSocial | Dispensa 8/2026 | 14/04/2026 |
| 2 | Camara Municipal de Dom Silverio | Dom Silverio/MG | PCMSO/NR-07 | Dispensa 4/2026 | 15/04/2026 |
| 3 | CIMOG Baixa Mogiana | Guaxupe/MG | Medicina e seguranca (reg. precos) | Pregao 03/2026 | 15/04/2026 |
| 4 | Prefeitura de Carapicuiba | Carapicuiba/SP | SST | Dispensa 12/2026 | 14/04/2026 |
| 5 | Prefeitura de Parintins | Parintins/AM | SST | Pregao 03/2026 | 24/04/2026 |

*Scan 08/04: ~15 SST no Brasil . 2 dispensas MG . Rodeiro e Dom Silverio como alvos prioritarios*

---

*Scan automatico -- Claude Code . 09/04/2026*
