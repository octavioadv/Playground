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
- (ainda não rodado nesta sessão)

### LinkedIn
- (ainda não rodado nesta sessão)

## Erros recorrentes
- API PNCP retorna 403 via proxy — não insistir, ir direto pro WebSearch
- WebFetch falha para maioria dos sites .leg.br e .gov.br neste ambiente — usar WebSearch para extrair info dos snippets

## Decisões do Octav
- Não criar PR sem pedir explicitamente
- Direto ao ponto, sem enrolação
- Foco em execução, cobrado diariamente nos KPIs

## Métricas de execução
| Data | Skill | Resultado | Nota |
|------|-------|-----------|------|
| 2026-04-10 | PNCP | 2 dispensas MG ativas + 3 leads novas | API bloqueada, scan via WebSearch + histórico |
