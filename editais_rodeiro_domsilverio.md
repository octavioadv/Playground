# Dossiê — Dispensas Eletrônicas SST (Câmaras Municipais MG)
**Data da análise:** 08/04/2026
**Analista:** assistente Higilabor

---

## RESUMO EXECUTIVO

| | Rodeiro 8/2026 | Dom Silvério 4/2026 |
|---|---|---|
| Valor estimado | **R$ 6.208,17** | **R$ 2.006,67** |
| Encerra propostas | 14/04/2026 | 15/04/2026 08:30 |
| Fundamento | Lei 14.133/21, Art. 75, II | Lei 14.133/21, Art. 75, II |
| Plataforma | não identificada (provável portal próprio / AMM Licita) | **AMM Licita** (app2.ammlicita.org.br/pesquisa/96747) |
| Objeto | PGR + PCMSO + Laudos + eSocial mensal | Apenas exames clínicos PCMSO (NR-07) |
| **Disputar?** | **SIM, com ressalvas** | **NÃO recomendado** |

### Por quê em uma frase
- **Rodeiro:** valor pequeno mas escopo amplo (recorrente mensal eSocial) — tem cara de retainer disfarçado de dispensa pontual; vale entrar pra ancorar relacionamento e capturar próximos anos.
- **Dom Silvério:** R$ 2.006,67 não cobre nem o deslocamento Uberlândia→Dom Silvério (≈480 km ida) + a hora da médica do trabalho; só faz sentido se conseguir terceirizar a coleta local com clínica parceira.

### 3 ações urgentes (até 10/04)
1. **Baixar manualmente os dois PDFs do PNCP** (links abaixo) e ler o Termo de Referência completo — APIs do PNCP entregaram só os metadados; o detalhe técnico (nº de servidores, exigências de habilitação, exames específicos, prazo de execução) está dentro do PDF do Aviso de Contratação Direta e não foi possível extrair via tooling automático nesta sessão.
2. **Confirmar plataforma de disputa** de Rodeiro — se for AMM Licita ou BLL Compras, conferir se Higilabor tem cadastro ativo e credenciamento. Se não tiver, abre cadastro hoje (leva 24-48h).
3. **Decidir Dom Silvério em 30 minutos** — só vale se: (a) ticket pode ser renegociado pra cima por aditivo, OU (b) Higilabor tem clínica parceira em Ponte Nova/Manhuaçu/Mariana que possa fazer os exames presenciais.

---

## 1. RODEIRO/MG — Dispensa Eletrônica nº 8/2026

### IDENTIFICAÇÃO
- **Órgão:** Câmara Municipal de Rodeiro
- **CNPJ:** 26.119.990/0001-75
- **Município/UF:** Rodeiro / MG (Zona da Mata, ~370 km de Uberlândia)
- **Processo:** 8/2026
- **Nº da Dispensa:** 8/2026
- **Nº Controle PNCP:** 26119990000175-1-000012/2026
- **Modalidade:** Dispensa (com disputa)
- **Instrumento:** Aviso de Contratação Direta
- **Fundamento legal:** Lei 14.133/2021, Art. 75, inciso II (contratações até R$ 50.000,00)
- **Data publicação PNCP:** 08/04/2026
- **Abertura propostas:** 09/04/2026
- **Encerramento propostas:** 14/04/2026
- **Sessão de disputa:** não informada nos metadados — verificar PDF
- **Plataforma de disputa:** **não identificada nos metadados PNCP** — provavelmente AMM Licita ou portal próprio. **Crítico verificar antes de 09/04.**
- **Situação:** Divulgada no PNCP
- **Link PNCP (consulta humana):** https://pncp.gov.br/app/editais/26119990000175/2026/12
- **Link API metadados:** https://pncp.gov.br/api/consulta/v1/orgaos/26119990000175/compras/2026/12
- **Link download PDF (Aviso de Contratação Direta):** https://pncp.gov.br/pncp-api/v1/orgaos/26119990000175/compras/2026/12/arquivos/1

### CONTATO
- **Agente de contratação / pregoeiro:** não localizado nos metadados (buscar dentro do PDF)
- **Email / telefone:** não localizado
- **Presidente da câmara:** não localizado
- **Site da câmara (verificar):** https://www.rodeiro.mg.leg.br

### VALOR
- **Valor total estimado:** **R$ 6.208,17**
- **Orçamento sigiloso:** Não (compra sem sigilo)
- **Forma de julgamento:** não localizada nos metadados — provavelmente menor preço global (padrão Art. 75, II)
- **Planilha de composição de custos:** não localizada — verificar PDF/TR

### ESCOPO TÉCNICO
- **Objeto declarado no PNCP:** "Serviços especializados de Segurança e Medicina do Trabalho, Saúde Ocupacional, Laudos, Relatórios e envios mensais de eventos obrigatórios do eSocial"
- **Decomposição provável** (a confirmar com PDF):
  - **PGR** (Programa de Gerenciamento de Riscos) — exigido por NR-1
  - **PCMSO** (Programa de Controle Médico) — NR-7
  - **LTCAT** ou laudo ambiental (depende dos cargos)
  - **ASOs** (admissionais, periódicos, demissionais, mudança de função)
  - **Envio mensal eSocial** (eventos S-2210, S-2220, S-2240) — isso é o sinal de retainer mensal
- **Nº de servidores da câmara:** não informado (Câmara Municipal de Rodeiro tipicamente ~8-15 servidores)
- **Prazo de execução:** não localizado (verificar PDF)
- **Vigência do contrato:** não localizada — se há envio mensal eSocial, é razoável supor 12 meses
- **Visita presencial:** não confirmada — verificar PDF
- **SLA:** não localizado

### HABILITAÇÃO (não extraído — verificar no PDF)
Itens típicos esperados para SST:
- Habilitação jurídica (contrato social, CNPJ)
- Habilitação fiscal (CNDs federal, estadual, municipal, FGTS, trabalhista)
- Habilitação técnica:
  - Atestado de capacidade técnica para serviços similares
  - Registro do médico do trabalho responsável (CRM-MG ou CRM com inscrição secundária)
  - Eventualmente registro de engenheiro de segurança (CREA)
  - Eventualmente alvará sanitário se houver exames clínicos
- Habilitação econômico-financeira (certidão negativa de falência)
- Declarações: ME/EPP, menor, idoneidade, parentesco

### CRITÉRIOS DE ELIMINAÇÃO POTENCIAIS
- **Empresa local:** não confirmado — em dispensas pequenas é comum NÃO exigir, mas câmara de cidade pequena às vezes filtra
- **Visita técnica obrigatória:** não confirmado — se exigir, prazo é apertado (sobram ~3 dias úteis)
- **Atestado prévio:** Higilabor cumpre tranquilamente

### ANÁLISE HIGILABOR
- **Pode disputar?** **SIM**, condicionado a: (1) plataforma ser uma que Higilabor já está cadastrada ou consegue se credenciar até 13/04; (2) não exigir empresa local ou visita técnica obrigatória.
- **Riscos:**
  - Distância (Rodeiro fica na Zona da Mata, ~370 km de Uberlândia) encarece visita presencial
  - Valor R$ 6.208,17 é piso muito baixo. Se vigência for 12 meses → R$ 517/mês, abaixo do piso Higilabor para PGR+PCMSO+eSocial mensal
  - Se vigência for serviço pontual (PGR+PCMSO entregue uma vez), R$ 6.208 é razoável mas envio mensal eSocial sem custo extra mata margem
- **Probabilidade de ganhar:** **MÉDIA** — dispensas pequenas têm baixa concorrência (3-5 propostas típico); Higilabor tem estrutura para entregar tudo
- **Preço-alvo sugerido:** lance mínimo **R$ 5.300–5.600** (corte de 10–15% do valor estimado). Lance abaixo de R$ 5.000 transforma em prejuízo dado o deslocamento.
- **Decisão estratégica:** disputar com lance conservador. Se ganhar, ancora cliente novo na Zona da Mata e abre porta pra prefeitura (>50 servidores) no ano seguinte.

---

## 2. DOM SILVÉRIO/MG — Dispensa Eletrônica nº 4/2026

### IDENTIFICAÇÃO
- **Órgão:** Câmara Municipal de Dom Silvério
- **CNPJ:** 01.759.101/0001-03
- **Município/UF:** Dom Silvério / MG (Zona da Mata, ~480 km de Uberlândia)
- **Processo:** 4/2026
- **Nº da Dispensa:** 4/2026
- **Nº Controle PNCP:** 01759101000103-1-000006/2026
- **Modalidade:** Dispensa (com disputa)
- **Instrumento:** Aviso de Contratação Direta
- **Fundamento legal:** Lei 14.133/2021, Art. 75, inciso II (contratações até R$ 50.000,00)
- **Data publicação PNCP:** 08/04/2026 14:39
- **Abertura propostas:** 08/04/2026 15:00
- **Encerramento propostas:** **15/04/2026 08:30**
- **Plataforma de disputa:** **AMM Licita** — confirmado pelo `linkSistemaOrigem`
- **Link sistema origem (lances):** https://app2.ammlicita.org.br/pesquisa/96747
- **Situação:** Divulgada no PNCP
- **Link PNCP:** https://pncp.gov.br/app/editais/01759101000103/2026/6
- **Link API:** https://pncp.gov.br/api/consulta/v1/orgaos/01759101000103/compras/2026/6
- **Link download PDF (AVISO_CONTRATACAO.pdf):** https://pncp.gov.br/pncp-api/v1/orgaos/01759101000103/compras/2026/6/arquivos/1
- **Site da câmara (editais):** https://www.camaradomsilverio.mg.gov.br/categoria-de-arquivo/editais/

### CONTATO
- **Agente de contratação:** não localizado nos metadados — verificar PDF
- **Unidade:** Unidade Única (cód. 635)
- **Município IBGE:** 3122702

### VALOR
- **Valor total estimado:** **R$ 2.006,67**
- **Orçamento sigiloso:** Não
- **Forma de julgamento:** não localizada nos metadados (provável menor preço global)
- **Planilha:** não extraída — verificar PDF

### ESCOPO TÉCNICO
- **Objeto declarado no PNCP:** Contratação de serviços médicos ocupacionais conforme NR-07 (PCMSO)
- **Escopo provável:**
  - Elaboração/atualização do PCMSO
  - Exames clínicos ocupacionais (admissional, periódico, demissional, mudança de função, retorno ao trabalho)
  - Possivelmente exames complementares (audiometria, oftalmológico, espirometria — depende dos riscos)
- **Servidores:** câmara pequena, tipicamente 5-12 servidores. R$ 2.006,67 dá ~R$ 200/servidor para 10 servidores → compatível com 1 ASO + PCMSO básico, **sem exames complementares pesados**
- **Visita presencial:** exames clínicos exigem presença física do trabalhador → ou Higilabor desloca médica, ou trabalhadores vão até clínica parceira
- **Prazo / vigência:** não localizado — verificar PDF

### HABILITAÇÃO (não extraído — verificar PDF)
Itens críticos esperados:
- **Médico do trabalho responsável** com registro CRM-MG (ou inscrição secundária)
- Atestado de capacidade técnica em PCMSO
- Possível exigência de **alvará sanitário** do estabelecimento (problema se Higilabor for prestar como consultório virtual)
- Documentos fiscais e jurídicos padrão

### CRITÉRIOS DE ELIMINAÇÃO POTENCIAIS
- **Distância 480 km** torna deslocamento inviável economicamente
- **Possível exigência de alvará sanitário** ou inscrição da médica no CRM-MG (verificar)
- **Possível exigência de empresa local** (comum em câmaras pequenas)

### ANÁLISE HIGILABOR
- **Pode disputar?** **NÃO RECOMENDADO** — economics não fecham
- **Conta rápida:**
  - R$ 2.006,67 receita bruta
  - Tributos (~16% Simples) ≈ R$ 320
  - Líquido R$ 1.686
  - Deslocamento Uberlândia→Dom Silvério ida/volta ≈ 960 km × R$ 1,20/km ≈ R$ 1.150
  - Diária médica ≈ R$ 400
  - **Restam R$ 136 para honorários, exames complementares, PCMSO, ASOs e margem.** Prejuízo estruturado.
- **Únicos cenários onde faz sentido:**
  1. Higilabor tem clínica parceira em Ponte Nova/Mariana/Manhuaçu que execute os exames por subcontratação (~R$ 80/ASO) — checar rede
  2. Médica do trabalho de Higilabor mora ou tem rota frequente na região (não é o caso conforme memória)
  3. Câmara pode aditivar contrato para incluir PGR/eSocial (verificar TR — se houver brecha)
- **Probabilidade de ganhar:** ALTA (lance baixo facilmente vence) — mas vencer = prejuízo
- **Preço-alvo:** **não disputar.** Se decidir disputar mesmo assim, lance teto **R$ 1.900**, e SOMENTE com clínica parceira local ativa.
- **Decisão estratégica:** **PASSAR.** Usar o tempo pra atacar Rodeiro e prospectar 2-3 outras dispensas no triângulo mineiro.

---

## ANEXO — Limitações desta análise

Os PDFs do "Aviso de Contratação Direta" foram baixados pelo PNCP mas **não puderam ser extraídos automaticamente** nesta sessão (ferramenta de leitura local bloqueada). Os campos marcados como "não localizado" precisam ser confirmados pelo Octavio abrindo manualmente:
- Rodeiro: https://pncp.gov.br/pncp-api/v1/orgaos/26119990000175/compras/2026/12/arquivos/1
- Dom Silvério: https://pncp.gov.br/pncp-api/v1/orgaos/01759101000103/compras/2026/6/arquivos/1

**Itens críticos a confirmar nos PDFs (15 minutos de leitura cada):**
1. Nº exato de servidores da câmara
2. Lista completa de exames exigidos (Dom Silvério) e produtos exigidos (Rodeiro)
3. Vigência do contrato (pontual vs. 12 meses)
4. Plataforma de disputa de Rodeiro (qual portal eletrônico)
5. Exigência ou não de visita técnica prévia
6. Exigência ou não de empresa local
7. Documentos de habilitação técnica específicos (atestado, registros)
8. Nome/email do agente de contratação para esclarecimentos
