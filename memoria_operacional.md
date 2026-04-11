# Memória Operacional — Higilabor

> Atualizado automaticamente ao final de cada tarefa diária.
> Lido pelo Claude no início de cada sessão via CLAUDE.md.

## Aprendizados por skill

### PNCP
- 2026-04-10: API PNCP (pncp.gov.br) bloqueada por proxy neste ambiente (403 em todas as rotas: API REST, frontend, PDFs). Usar WebSearch como fonte primária + resultados.json do script Python como fallback.
- 2026-04-10: WebSearch retorna URLs de editais mas não conteúdo detalhado. Combinar múltiplas buscas com keywords diferentes para cobrir mais oportunidades.
- 2026-04-10: Câmaras municipais MG são o alvo principal. Padrão de URL dos sites: `www.[cidade].mg.leg.br/transparencia/licitacoes-e-contratos/`
- 2026-04-10: Dispensas SST de câmaras MG costumam ter valor entre R$ 2k–6k (escopo pequeno: PGR+PCMSO+LTCAT para 10-30 servidores).

### SEO
- 2026-04-10: Rodada 2 — Tema 1 (concorrentes) Ibiá/MG. Vácuo digital absoluto: nenhum concorrente com SEO otimizado para SST em Ibiá. Apenas 2 players locais (Vitacenter generalista + Solução Treinamentos só Facebook).
- 2026-04-10: Araxá (80km) é a referência regional atual — empresas de Ibiá provavelmente se deslocam até lá. Interceptar esse fluxo com conteúdo geo-específico.
- 2026-04-10: Nenhum concorrente menciona NR-1 psicossocial nem publica preços. Dois diferenciais imediatos para Higilabor.
- 2026-04-10: Rodar agentes em paralelo funciona bem — SEO e LinkedIn podem executar simultaneamente sem conflito de arquivos.

### city-pack
- 2026-04-10: Primeira execução — Viçosa/MG gerado via 4 agents paralelos (landing, blog, LinkedIn, WhatsApp). Funcionou bem, cada agent em ~45-250s. Tempo total < 5min.
- 2026-04-10: Cidades fora do Triângulo (Viçosa = Zona da Mata, 440km) exigem transparência radical sobre distância — agents adotaram posicionamento "fornecedor regional planejado" em vez de fingir presença local. Melhor qualificação de leads.
- 2026-04-10: Perfil econômico específico importa — Viçosa (cidade universitária UFV) tem público-alvo diferente de Ibiá (comércio/agro). Agents ajustaram exemplos, tabelas de preço e FAQ automaticamente.
- 2026-04-11: Brand identity atualizada em todos os HTMLs. Logo real: wp-content/uploads/2023/10/LOGO-HIGILABORtransparente... Verde real: #61a229 (hover #4e8221). Font: Montserrat. Credenciais bar (33 anos, 200+ cidades, 1.500+ clientes) adicionada nas landings. pncp.gov.br continua bloqueado — usar WebSearch.

### LinkedIn
- 2026-04-10: Canpat 2026 lançada pelo MTE (7/abril) com foco em riscos psicossociais — timing perfeito para pacote Psicossocial da Higilabor.
- 2026-04-10: 46 dias para fiscalização NR-1 psicossocial (26/maio). Melhor argumento de venda urgente.
- 2026-04-10: FAP 2026: 92% das empresas em redução — bom gancho para post de engajamento.
- 2026-04-10: MTE lançou Manual GRO na mesma semana da Canpat — sinal de que fiscalização será levada a sério.
- 2026-04-10: Formatos que funcionam no LinkedIn SST: countdown (dias pra deadline), dados impactantes (% de empresas), carrossel com checklist prático.

## Erros recorrentes
- API PNCP retorna 403 via proxy — não insistir, ir direto pro WebSearch
- WebFetch falha para maioria dos sites .leg.br e .gov.br neste ambiente — usar WebSearch para extrair info dos snippets

## Decisões do Octav
- Não criar PR sem pedir explicitamente
- Direto ao ponto, sem enrolação
- Foco em execução, cobrado diariamente nos KPIs
- Commitar diariamente sem precisar pedir — manter o branch sempre atualizado
- **Higilabor já atendeu 200+ cidades em 13 estados brasileiros** (2026-04-10). Isso é um fato factual que valida o modelo regional/nacional. Deve ser usado como argumento de credibilidade em landings, blogs e pitches — não é bravata, é prova de execução. Cidades fora do Triângulo Mineiro (como Viçosa/Zona da Mata) são totalmente estratégicas.

## Métricas de execução
| Data | Skill | Resultado | Nota |
|------|-------|-----------|------|
| 2026-04-10 | PNCP | 2 dispensas MG ativas + 3 leads novas | API bloqueada, scan via WebSearch + histórico |
| 2026-04-10 | SEO | Pesquisa + blog post Ibiá/MG (tema 1) | Vácuo digital total, 0 concorrência SEO |
| 2026-04-10 | LinkedIn | 3 tendências hot + 3 posts rascunho | NR-1 psicossocial 46 dias, Canpat 2026, FAP |
| 2026-04-10 | city-pack | Viçosa/MG — 4 arquivos gerados | Via 4 agents paralelos, cidade fora do Triângulo |
| 2026-04-11 | brand-update | Brand identity real aplicada em todos os HTMLs | Verde #61a229, Montserrat, logo real, credenciais bar |
