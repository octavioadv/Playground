# Playbook — Dispensa de Licitação SST em Câmaras Municipais de MG

**Versão:** 1.1 — 09/04/2026
**Alvo:** câmaras municipais de MG com 20–80 servidores que ainda não contrataram PGR/PCMSO/LTCAT em 2026
**Oportunidade:** contratação direta via Lei 14.133/21 art. 75 II (teto R$ 59.906,02/ano em 2026)

**Arquivos-irmãos (ecossistema do playbook):**
- `pncp_oportunidades.md` — scan diário automático (task `pncp-sst-daily-scan`, 08:18 seg-sex)
- `editais_rodeiro_domsilverio.md` — dossiês ativos (Rodeiro GO / Dom Silvério NO-GO)
- `lista_camaras_mg_alvo.md` — 80 câmaras MG ranqueadas (22 P1 · 38 P2 · 20 P3)

---

## 1. Por que esse alvo

- **853 municípios em MG** — maior estoque do Brasil
- Câmaras pequenas têm **9 a 13 vereadores + apoio (5 a 20 servidores CLT/comissionados)** → dentro do range 20–80 servidores totais (somando vereadores)
- Ticket médio observado: **R$ 1,9k a R$ 25k/ano** por pacote SST completo
- **Quase ninguém disputa** — a maioria das empresas SST nem tem SICAF
- Ciclo de compra rápido: dispensa eletrônica fecha em 3–8 dias úteis

## 2. Segmentação do universo (filtro de ICP)

**Critério de seleção** (aplicar em ordem):

| # | Filtro | Fonte | Corte |
|---|--------|-------|-------|
| 1 | População | IBGE Censo 2022 | 5.000 a 30.000 habitantes |
| 2 | Região | — | Triângulo Mineiro, Alto Paranaíba, Noroeste MG (logística Uberlândia) |
| 3 | Nº de vereadores | Lei Orgânica Municipal / site da câmara | 9–13 vereadores |
| 4 | Contrato SST ativo? | PNCP + site transparência | **SEM contrato em 2026** ou vencendo |
| 5 | Ciclo orçamentário | site da câmara | LOA 2026 publicada, com dotação |

**Meta inicial:** lista de 80 câmaras MG elegíveis. Trabalhar em ondas de 20 por semana.

### Regiões prioritárias (logística + relacionamento)

| Prioridade | Região | Justificativa |
|------------|--------|---------------|
| P1 | Triângulo Mineiro | Base Uberlândia, deslocamento ≤ 2h, rede de relacionamento |
| P2 | Alto Paranaíba (Patos de Minas, Araxá, Patrocínio) | 1–3h de Uberlândia |
| P3 | Noroeste de MG (Paracatu, Unaí, João Pinheiro) | 2–4h, baixa concorrência |
| P4 | Sul de MG / Zona da Mata | só se remoto/viável sem visita |

## 3. Como identificar "sem contrato ainda"

**3 caminhos paralelos:**

### A) PNCP — histórico de contratos
- Acesse `https://pncp.gov.br/app/editais`
- Filtro: UF=MG, modalidade=Dispensa, palavra-chave=PCMSO/PGR/LTCAT
- Baixe os últimos 12 meses
- **Regra:** câmara que apareceu nos últimos 12 meses → JÁ TEM contrato, descartar (ou colocar alerta para renovação em 10 meses)
- **Regra:** câmara que NÃO apareceu → alvo quente

### B) Site de transparência da câmara
- Padrão URL: `https://www.<cidade>.mg.leg.br/transparencia/licitacoes-e-contratos/`
- Procurar "PCMSO", "PGR", "saúde ocupacional", "segurança do trabalho"
- Se nada em 2025/2026 → alvo

### C) Pedido LAI (Lei de Acesso à Informação)
- Se o site é fraco ou sem busca, envie pedido LAI via email do ouvidor/controlador
- Modelo pronto no anexo A
- Resposta em até 20 dias úteis, obriga a câmara a confirmar se tem ou não contrato SST

## 4. Preparação prévia (Higilabor precisa ter antes de disparar)

| Item | Status | Responsável |
|------|--------|-------------|
| Certificado digital PJ (e-CNPJ A1 ou A3) | ⚠️ Verificar | Higilabor |
| SICAF ativo (nível credenciamento + habilitação) | ⚠️ Verificar | Higilabor |
| CNDs (Federal, Estadual, Municipal, FGTS, Trabalhista) válidas | ⚠️ 30 dias | Financeiro |
| Atestados de capacidade técnica (3+ clientes com PGR/PCMSO) | ✅ Tem | Comercial |
| CREA do engenheiro responsável (Kleber?) | ✅ Tem | RH |
| CRM da médica do trabalho | ✅ Tem | RH |
| Registro no eSocial como prestador | ✅ Tem | — |
| Modelo de proposta técnica + planilha de preço padrão | ⚠️ Criar | Octav |

**Prazo:** tudo pronto em 10 dias úteis (até 22/04/2026).

## 5. Playbook de prospecção — 3 canais

### Canal 1: Monitoramento PNCP (passivo, mas reativo)
- **Rotina diária automática** (já agendada — task `pncp-sst-daily-scan`): scan 08:18 dias úteis
- Output diário em `pncp_oportunidades.md` (MG + P2 vizinhos + P3 top 5)
- Quando aparecer dispensa SST em MG → resposta em < 4h com proposta pelo PNCP
- Exemplos reais analisados: **Rodeiro/MG (R$ 6.208 — GO)** e **Dom Silvério/MG (R$ 2.006 — NO-GO por distância/margem)** — ver `editais_rodeiro_domsilverio.md`

### Canal 2: Prospecção fria direta (ativo)
Para cada câmara da lista-alvo:

**Passo 1 — Mapeamento (5 min/câmara)**
- Presidente da câmara (nome + partido)
- Diretor administrativo / contador (quem assina dispensa)
- Email institucional + telefone
- LOA 2026: tem rubrica de "medicina do trabalho"? Quanto?

**Passo 2 — Abordagem (cold email + ligação no dia seguinte)**
- Email: assunto "PGR/PCMSO da Câmara de <cidade> — NR-1 psicossocial vence em maio"
- Gancho duplo: **(a) urgência NR-1 psicossocial** + **(b) preço abaixo do teto de dispensa**
- CTA: "posso enviar minuta de termo de referência pronta para dispensa eletrônica?"

**Passo 3 — Engenharia reversa do termo de referência**
- Enviar minuta pronta para o órgão usar → aumenta massivamente a chance de virar dispensa com Higilabor como referência de preço
- Minuta já cita "NR-1 psicossocial vigente desde mai/2026" — gera urgência jurídica

### Canal 3: Rede de contatos (alavancagem)
- Contadores/escritórios que atendem câmaras → comissão de indicação?
- Associação Mineira de Câmaras Municipais (AMCM) — patrocínio de evento ou webinar sobre NR-1
- Tribunal de Contas MG — publicações de irregularidade por falta de PGR/PCMSO em câmaras → lista de "culpados" que precisam resolver

## 6. Proposta tipo — pacote câmara pequena

**Pacote "Câmara Legal NR-1" — R$ 3.900 a R$ 8.400/ano** (cabe folgado em dispensa)

Escopo:
- PGR (com capítulo psicossocial NR-1)
- PCMSO
- LTCAT
- ASOs (admissional, periódico, demissional) — até 30 servidores
- Gestão eventos SST eSocial (S-2220, S-2240)
- 1 visita técnica/ano + suporte remoto

Faixas sugeridas (**calibradas com Rodeiro/MG R$ 6.208 estimado para câmara ~2,5k hab em 09/04/26**):
| Servidores | Preço anual | Lance agressivo (dispensa) |
|------------|-------------|----------------------------|
| até 15 | R$ 4.800 | R$ 4.200 |
| 16–30 | R$ 6.500 | R$ 5.600 |
| 31–50 | R$ 8.400 | R$ 7.200 |
| 51–80 | R$ 10.500 | R$ 9.000 |

**Todos abaixo de R$ 59.906 → cabem em dispensa art. 75 II.**

> ⚠️ Faixa "até 15" foi revisada para cima após dossiê Rodeiro: R$ 3.900 estava abaixo do estimado municipal, ou seja, entregando margem grátis para o órgão.
> ⚠️ Somar R$ 800–1.200 ao piso quando distância > 200 km (visita técnica).
> ⚠️ Conferir com o skill `higilabor-precificacao` antes de rodar em escala — garantir que o piso de custo real (horas Kleber + médica + admin) está coberto nessas faixas.

## 7. Cronograma de execução (Sprint 2, 20 dias úteis)

| Dia | Ação |
|-----|------|
| D1–D2 | Montar lista-alvo (80 câmaras MG priorizadas — fonte: IBGE + PNCP) |
| D3 | SICAF + certificado digital + CNDs (se faltar) |
| D4 | Modelo de termo de referência + minuta de proposta |
| D5 | Piloto: disparar 10 câmaras do Triângulo |
| D6–D10 | Ligações de follow-up + ajustes |
| D11 | Análise de conversão, ajuste de gancho |
| D12–D18 | Escalar para mais 30 câmaras (Alto Paranaíba + Noroeste) |
| D19–D20 | Consolidar resultados, pipeline, próximos 30 dias |

**Meta realista do sprint:** 3–5 dispensas fechadas (R$ 15k–R$ 35k MRR anualizado).

## 8. KPIs do playbook

| KPI | Meta |
|-----|------|
| Câmaras abordadas/semana | 20 |
| Taxa de resposta | ≥ 15% |
| Termos de referência enviados | ≥ 8/semana |
| Dispensas disputadas | ≥ 3/semana |
| Dispensas fechadas | ≥ 1/semana |
| Ticket médio | R$ 5.500 |
| CAC (só custo de horas) | ≤ R$ 400 por câmara fechada |

## 9. Riscos e mitigação

| Risco | Mitigação |
|-------|-----------|
| Câmara já tem contratado informal (sem PNCP) | Pedido LAI confirma antes de investir tempo |
| Concorrente local com "padrinho" político | Focar cidades sem empresa SST local cadastrada |
| Valor da dispensa fracionado (inelegível) | Checar se a câmara já contratou SST no ano — se sim, estourou o teto |
| Exigência de visita presencial | Já incluso no pacote, 1 visita/ano |
| Capacidade Higilabor estourar | Limite de 3 novos clientes câmara/semana enquanto não contrata médica #2 |

---

## Anexo A — Modelo pedido LAI

> **Assunto:** Solicitação LAI — contratos de SST (PGR/PCMSO/LTCAT) da Câmara
>
> Prezados, solicito com base na Lei 12.527/2011 (LAI) as seguintes informações referentes ao exercício 2025–2026:
>
> 1. A Câmara Municipal possui contrato vigente para elaboração de PGR, PCMSO e LTCAT?
> 2. Em caso afirmativo, qual o nome do contratado, nº do contrato, valor anual e data de vencimento?
> 3. Em caso negativo, há previsão orçamentária (LOA 2026) para contratação desses serviços?
>
> Atenciosamente,
> Octavio — Higilabor Consultoria SST — contato@higilabor.com.br

## Anexo B — Cold email modelo

> **Assunto:** PGR/PCMSO da Câmara de <cidade> — NR-1 psicossocial vigente desde maio
>
> Prezado(a) <nome do presidente ou diretor>,
>
> Desde maio/2026 a NR-1 passou a exigir que todo PGR contemple riscos psicossociais — inclusive em câmaras municipais. Quem não tem documento atualizado fica exposto a apontamento do TCE-MG e a multa trabalhista em auditoria.
>
> A Higilabor atende câmaras da região do Triângulo e Alto Paranaíba com pacote completo (PGR + PCMSO + LTCAT + ASOs + eventos eSocial SST) sob **dispensa eletrônica Lei 14.133/21 art. 75 II** — valor cabe no teto de R$ 59.906,02 e pode ser formalizado em 5 dias úteis.
>
> Posso enviar minuta de termo de referência pronta para Vossa Sra. usar como base no processo administrativo? Anexo também a proposta comercial estimada para o porte da câmara.
>
> Atenciosamente,
> Octavio — Higilabor Consultoria SST
> Uberlândia/MG — CREA, CRM ativos
> (34) xxxx-xxxx

## Anexo C — Como montar a lista-alvo de 80 câmaras

✅ **Lista pronta em `lista_camaras_mg_alvo.md`** (entregue 09/04/2026)

**Composição final:**
- **80 câmaras** elegíveis · 22 P1 · 38 P2 · 20 P3
- Triângulo 32 · Alto Paranaíba 22 · Noroeste 15 · Centro-Oeste 11
- Por porte: 5–10k = 34 · 10–20k = 30 · 20–30k = 16
- Excluídas: Prata, Ituiutaba, Dom Bosco (já contratadas) + todas > 30k hab

**Top 5 alvos quentes:**
1. Carmo do Paranaíba (30k, AP) — ticket R$ 8,4k/ano
2. Monte Carmelo (28,5k, AP) — 110 km UDI, polo café/cerâmica
3. Coromandel (28,5k, AP) — mineração + agro
4. Santo Antônio do Monte (28k, CO) — polo nacional de fogos
5. Conceição das Alagoas (26,5k, T) — cana/etanol, gancho NR-1

**Pendências de enriquecimento da lista (antes de disparar campanha):**
- Status PNCP individual (77 de 80 com "?") → rodar query agregada em vez de 80 individuais
- URLs das câmaras → ping automático nos padrões `.mg.leg.br`
- Nome de presidente + email + telefone → enriquecimento manual em top 22 P1
- Rubrica "medicina do trabalho" na LOA 2026 → diário oficial do município

**Meta funil (estimativa):** 80 abordagens → 25 reuniões → 12 propostas → **6 contratos fechados** = R$ 30–48k ARR novo.

---

## Próximas ações imediatas

1. ✅ **Busca diária PNCP agendada** — task `pncp-sst-daily-scan` (08:18 seg-sex) · scan 09/04 já rodou
2. ✅ **Lista 80 câmaras MG alvo gerada** — `lista_camaras_mg_alvo.md`
3. ✅ **Dossiê editais ativos** — `editais_rodeiro_domsilverio.md` (Rodeiro GO / Dom Silvério NO-GO)
4. ⬜ **Verificar status SICAF da Higilabor** (Octav — BLOQUEADOR para Rodeiro 14/04)
5. ⬜ **Confirmar certificado digital PJ ativo** (Octav — BLOQUEADOR)
6. ⬜ **CNDs vigentes** (Fed/Est MG/Mun UDI/FGTS/CNDT) — pasta única renovação mensal
7. ⬜ **Rodar pacote pelo skill `higilabor-precificacao`** para validar piso das 4 faixas (já calibradas com Rodeiro)
8. ⬜ **Decisão Rodeiro**: disputar ou passar? Encerra 14/04 às [hora a confirmar no edital]
9. ⬜ **Enriquecer top 22 P1** da lista 80 câmaras (URLs, presidente, email) antes da primeira onda de prospecção
10. ⬜ **Ler edital Rodeiro em PDF** e fechar as 5 pendências (nº servidores, atestado mínimo, visita, vigência, plataforma)

### Scan 09/04 — principais achados
- **Rodeiro** (encerra 14/04) e **Dom Silvério** (encerra 15/04) ainda abertos em MG
- **SAAE Manhuaçu/MG** — Pregão PCMSO R$ 45.444 até 27/06 (fora de dispensa, mas encaixa no teto — avaliar se vale montar proposta pregão)
- **IPSETUR Turmalina/MG** — Credenciamento contínuo até 31/12/2027, R$ 16.463 (entrar por credenciamento é ganho recorrente)
- **Vera Cruz do Oeste/PR** — Dispensa PGR+PCMSO+LTCAT+LTIP+AET R$ 38.767, encerra 15/04 (fora do raio MG mas valor bom — avaliar se RT remoto faz sentido)
