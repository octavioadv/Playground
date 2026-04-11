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

## Ferramentas
- **Notion** — ERP Higilabor, KPIs, Kanban, check-ins, rotina semanal
- **5 blocos (xlsx)** — CR, CP, Fluxo de Caixa, Indicadores, DRE, Consolidado
- **Sistema ESO** — gestão operacional SST

## Tarefas diárias programáveis

### 1. PNCP SST Daily Scan
Skill: `pncp-sst-daily-scan` | Trigger: "roda PNCP"
Output: `pncp_oportunidades.md`
Busca dispensas SST abertas no PNCP, prioriza MG, filtra teto R$ 59.906.

### 2. SEO Daily Research + Blog Post
Skill: `seo-daily-research` | Trigger: "roda SEO"
State: `seo_higilabor/estado.json`
Output: `seo_higilabor/pesquisas/` + `seo_higilabor/blog_posts/`
Pesquisa SEO rotativa (3 temas x 16 cidades) + 1 blog post otimizado por rodada.

### 3. LinkedIn SST Daily
Skill: `linkedin-sst-daily` | Trigger: "roda LinkedIn"
Output: `linkedin-sst/YYYY-MM-DD_linkedin_digest.md`
Analisa tendências SST/EHS no LinkedIn + gera 2-3 rascunhos de posts.

> Todos os textos gerados (blog, LinkedIn) são RASCUNHO — devem passar por `/ux-copy` antes de publicar.

## Tarefa sob demanda

### City-Pack
Skill: `city-pack` | Trigger: "city-pack [cidade]", "gera pacote [cidade]"
Output: `seo_higilabor/cidades/[slug]/` com 4 arquivos (landing HTML, blog, LinkedIn, WhatsApp)
Execução semanal (não diária). 1 pacote completo focado em 1 cidade estratégica.

### Protocolo pós-tarefa diária
Após executar qualquer tarefa diária (PNCP, SEO, LinkedIn), SEMPRE:
1. Abrir `memoria_operacional.md`
2. Registrar na seção da skill: o que funcionou, o que falhou, ajustes feitos
3. Se o Octav deu feedback ou tomou decisão → registrar em "Decisões do Octav"
4. Se houve erro recorrente → registrar em "Erros recorrentes"
5. Atualizar tabela de métricas com data, skill, resultado
6. Commitar e push

## Situação financeira (março/26)
- Carteira CR: R$ 35.862 | Recebido: R$ 25.339 (70,7%) | Inadimplência: R$ 10.524 (29,3%)
- Despesas CP: R$ 38.150 | Resultado proxy: –R$ 2.287 (déficit)
- Empréstimos ativos: 2 parcelas recorrentes (~R$ 2.864/mês)

## Memória operacional
Arquivo: `memoria_operacional.md`
Contém aprendizados acumulados das tarefas diárias. Ler este arquivo no início de cada sessão.
Atualizar ao final de cada tarefa diária com: o que funcionou, o que falhou, decisões do Octav.

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
