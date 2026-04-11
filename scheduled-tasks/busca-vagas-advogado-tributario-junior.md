---
name: busca-vagas-advogado-tributario-junior
description: Busca diária no Indeed por vagas de Advogado Tributário Júnior + adaptação do CV Octavio
---

Tarefa diária — busca de vagas para Octavio (Advogado Tributário Júnior).

CONTEXTO FIXO:
- Candidato: Octávio Queiroz de Alvarenga, OAB/MG 245.226, mora em Belo Horizonte/MG
- CV base: C:\Users\octav\OneDrive\downloads\CV__Octavio.pdf
- Pasta de saída: C:\Users\octav\OneDrive\Apps\Claude\cv-vagas\
- Histórico anterior em cv-vagas/SUMMARY.md (consulte para evitar reprocessar vagas já vistas)

REGRAS IMPORTANTES:
1. NÃO falsificar endereço — para vagas fora de BH, usar "Disponibilidade imediata para mudança a [cidade]" no topo
2. Manter todos os fatos do CV verídicos — só reordenar/reescrever bullets para ressoar com cada JD
3. Pular vagas já adaptadas em sessões anteriores (checar SUMMARY.md histórico)

PASSOS:
1. Ler CV base (Read em CV__Octavio.pdf) para confirmar dados atualizados
2. Ler cv-vagas/SUMMARY.md para ver histórico de vagas já processadas
3. Buscar no Indeed via mcp__960ca249...__search_jobs:
   - search: "advogado tributário júnior"
   - location: "Brasil"
   - country_code: "BR"
4. Filtrar: pular vagas já processadas (mesmo job_id ou empresa+cidade já vistos)
5. Para cada vaga NOVA boa (júnior, tributário, salário OK ou não informado), puxar get_job_details em paralelo
6. Para cada vaga nova, criar arquivo cv-vagas/AAAA-MM-DD_NN_empresa_cidade.md adaptado ao JD (formato dos arquivos 01-05 existentes como referência)
7. APPEND no SUMMARY.md uma nova seção "## Rodada AAAA-MM-DD" com tabela das vagas novas (mantém histórico)
8. Se NÃO houver vagas novas, registrar isso no SUMMARY mesmo assim ("nenhuma vaga nova hoje")

FOCO: vagas com salário ≥ R$ 4k OU empresas de prestígio OU áreas alinhadas (Wealth, Internacional, Tributação Direta, Contencioso Tributário).