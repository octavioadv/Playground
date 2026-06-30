# Memory

## Eu
Octav — gestor/dono da **Higilabor**, consultoria de SST (Saúde e Segurança do Trabalho) em Uberlândia/MG.
Operação enxuta; acumula comercial, financeiro e decisão final.

## Empresa
**Higilabor** — consultoria SST. Emite laudos, treinamentos, PGR, PCMSO, LTCAT, perícias trabalhistas.
Clientes: empresas de pequeno e médio porte (até ~100 funcionários), agro, indústria, comércio.
Capacidade mensal: 650 UEP. Estrutura fixa: ~R$ 38.150/mês (março/26).

## Plano atual
**Plano de 60 dias** — 3 sprints de 20 dias. Objetivo: parar de operar no escuro e construir tração comercial.
- Sprint 1 (Dias 1–20): financeiro confiável + CRM mínimo + base classificada + abertura NR-1
- Sprint 2 (Dias 21–40): propostas rápidas + follow-up disciplinado + primeiros contratos mensais
- Sprint 3 (Dias 41–60): margem, cobrança, poda de carteira, consolidação

## Serviços / Pacotes Comerciais
| Pacote | O que é |
|--------|---------|
| **Essencial** | PGR + PCMSO base para pequenas empresas |
| **Financeiro/FAP** | Foco em redução do FAP e economia previdenciária |
| **Premium Patrimonial** | Gestão de risco patrimonial e responsabilidade civil |
| **Psicossocial** | NR-1 psicossocial — urgência regulatória a partir de maio/26 |

## Termos
| Termo | Significado |
|-------|-------------|
| **NR** | Norma Regulamentadora (ex: NR-1, NR-12) |
| **NR-1 psicossocial** | Exigência nova: PGR deve contemplar riscos psicossociais a partir de maio/26 |
| **PGR** | Programa de Gerenciamento de Riscos |
| **PCMSO** | Programa de Controle Médico de Saúde Ocupacional |
| **LTCAT** | Laudo Técnico das Condições Ambientais do Trabalho |
| **FAP** | Fator Acidentário de Prevenção (multiplica alíquota de RAT/INSS) |
| **eSocial** | Sistema digital de obrigações trabalhistas/tributárias |
| **SST** | Saúde e Segurança do Trabalho |
| **UEP** | Unidade de Esforço de Produção (capacidade operacional) |
| **CR** | Contas a Receber |
| **CP** | Contas a Pagar |
| **DRE** | Demonstrativo de Resultado do Exercício |
| **MRR** | Monthly Recurring Revenue (receita mensal recorrente) |
| **Retainer** | Contrato mensal recorrente |
| **Piso** | Preço mínimo por serviço (custo real + overhead + tributo + margem 20%) |
| **Pipeline** | Funil comercial ativo |
| **ERP** | Planilha de gestão financeira multi-mês (5 blocos) |

## KPIs diários que acompanho
saldo de caixa · recebimentos do dia · vencidos em aberto · contas abordadas · reuniões agendadas/realizadas · propostas enviadas · propostas em follow-up · contratos fechados · MRR novo · 1 decisão de margem/preço

## KPIs semanais
CR/CP atualizado · fluxo projetado · taxa de fechamento · ticket médio · inadimplência · margem bruta novos contratos · % follow-up no prazo · % CRM atualizado

## Funil CRM
lead → contato → reunião → proposta → follow-up 1 → follow-up 2 → negociação → fechado/perdido

## HubSpot (CRM) — conta nova desde 30/06/26
- **Account ID / Portal**: 51679192 · Owner (Octav): 94747440
- **Modelo de dados**: Company (empresa cliente) → Contact (pessoa) → Deal (oportunidade). Task = follow-up. Product = pacote.
- **Desenho de funil escolhido (versão enxuta)** — `lead`/`contato` viram *lifecycle stage* do contato (NÃO viram coluna); follow-up vira TAREFA, não etapa. Funil de Deals = 7 etapas:
  1. Reunião agendada — 10%
  2. Reunião realizada / Diagnóstico — 25%
  3. Proposta enviada — 50%
  4. Em follow-up — 60%
  5. Negociação — 75%
  6. Fechado – Ganho — 100% (won)
  7. Fechado – Perdido — 0% (lost)
- **Regra**: só cria Deal quando vira oportunidade real (reunião marcada). Lead frio fica como Contact lifecycle="Lead", sem Deal.
- **Limite da conexão de IA**: dá pra criar/editar registros (empresas, contatos, deals, tasks), mas NÃO editar estrutura do funil (etapas/probabilidades) — isso é só no painel Settings → Objects → Deals → Pipelines.
- **KPIs saem das etapas**: propostas enviadas = nº em "Proposta enviada"; fechados/MRR = "Fechado – Ganho" no mês; taxa fechamento = won ÷ total; ticket médio = média do amount dos won.
- **Pendente (Octav fazer no painel, 3 min)**: renomear as 7 etapas em inglês conforme acima.
- **Base importada (30/06/26)**: 153 empresas ativas (func>0) do export ESO "Empresas por Setor", todas como Company lifecycle=`lead`. Segmentação SEM Lista (write de Lista é bloqueado p/ IA): setor gravado no campo `description` como tag `[CODIGO]` filtrável via CONTAINS_TOKEN. Porte tb no description; `numberofemployees`, `phone`, `city`, `state` em campos próprios.
  - Códigos de setor: AGRO, INDUSTRIA, CONSTRUCAO, POSTOS, TRANSPORTE, COMERCIO, SAUDE, SERVICOS, EDUCACAO, SEGURANCA, ENERGIA, GOVERNO, RESTAURANTE, BELEZA, EVENTOS, NAOCLASSIF.
  - Pull de segmento = search_crm_objects COMPANY com filtro description CONTAINS_TOKEN '<CODIGO>' (+ numberofemployees p/ porte, + city p/ cidade). Ex: POSTOS=20, AGRO 10+ func=7.
  - Critério "ativa" na planilha = Funcionários Ativos > 0.
  - **Setor também no campo NATIVO `industry`** (135 empresas; "Não classificado" fica em branco). Industry só aceita os ~150 valores padrão do HubSpot (não aceita valor custom em PT via IA — isso é Settings). Mapa usado: AGRO→FARMING · INDUSTRIA→MACHINERY · CONSTRUCAO→CONSTRUCTION · POSTOS→AUTOMOTIVE · TRANSPORTE→TRANSPORTATION_TRUCKING_RAILROAD · COMERCIO→RETAIL · SAUDE→HOSPITAL_HEALTH_CARE · SERVICOS→ACCOUNTING · EDUCACAO→EDUCATION_MANAGEMENT · SEGURANCA→SECURITY_AND_INVESTIGATIONS · ENERGIA→RENEWABLES_ENVIRONMENT · GOVERNO→GOVERNMENT_ADMINISTRATION · RESTAURANTE→RESTAURANTS · BELEZA→COSMETICS · EVENTOS→EVENTS_SERVICES. Pull de segmento pode usar filtro nativo `industry` EQ '<VALOR>' (mais limpo) ou a tag `[CODIGO]` na description.

## Ferramentas
- **HubSpot** — CRM (funil comercial, contatos, empresas, deals, follow-ups)
- **Notion** — ERP Higilabor, KPIs, Kanban, check-ins, rotina semanal
- **5 blocos (xlsx)** — CR, CP, Fluxo de Caixa, Indicadores, DRE, Consolidado
- **Sistema ESO** — gestão operacional SST

## Situação financeira (março/26)
- Carteira CR: R$ 35.862 | Recebido: R$ 25.339 (70,7%) | Inadimplência: R$ 10.524 (29,3%)
- Despesas CP: R$ 38.150 | Resultado proxy: –R$ 2.287 (déficit)
- Empréstimos ativos: 2 parcelas recorrentes (~R$ 2.864/mês)

## Preferências de trabalho
- Direto ao ponto, sem enrolação
- Cobrado diariamente nos KPIs
- Foco em execução, não em planejamento adicional

## Auto Memory (aprendizados persistentes entre sessões)
Claude Code salva aprendizados automaticamente em `~/.claude/projects/<project>/memory/MEMORY.md` e carrega no início de cada sessão. Ativo por padrão a partir da v2.1.59.

**Comando:** `/memory` — abre/edita/audita o que foi aprendido e persistido.

**Instruções para Claude nesta sessão e nas próximas:**
- Capture e persista aprendizados reais do Octav: correções, preferências de formato, números-chave de KPIs, regras de negócio da Higilabor, atalhos de fluxo que ele pedir.
- Não registre conversa trivial nem repetir o que já está neste CLAUDE.md.
- Ao final de cada sessão relevante, consolide 1–3 learnings objetivos na auto memory.
- Se `autoMemoryEnabled` estiver desligado, reativar com `/memory` ou setar `"autoMemoryEnabled": true` em `~/.claude/settings.json`.
