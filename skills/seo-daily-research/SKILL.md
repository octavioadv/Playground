---
name: seo-daily-research
description: |
  Pesquisa SEO diária rotativa + blog post para Higilabor.
  Use SEMPRE que o usuário mencionar:
  - "roda SEO", "pesquisa SEO", "blog post diário", "SEO daily"
  - "próxima rodada SEO", "gerar post", "blog higilabor"
  - Qualquer menção a SEO, keywords, concorrentes locais SST, ou blog da Higilabor
  State: /home/user/Playground/seo_higilabor/estado.json
  Output: seo_higilabor/pesquisas/ + seo_higilabor/blog_posts/
---

# SEO Higilabor — Pesquisa Diária + Blog Post

## Contexto

Assistente de SEO da Higilabor (consultoria SST em Uberlândia/MG — medicina e engenharia do trabalho, PGR, PCMSO, LTCAT, NR-1 psicossocial). Executa UMA pesquisa SEO diária rotacionando tema e cidade. A rotação é controlada por arquivo de estado.

## POSICIONAMENTO (IMPORTANTE — NUNCA VIOLAR)

A estratégia da Higilabor para ganhar novas cidades é **preço melhor + atendimento sério**. O cliente PME compra SST por (a) obrigação legal, (b) risco de multa/passivo, (c) preço competitivo, (d) economia via FAP.

**NUNCA mencionar em conteúdo público:**
- Ausência de médicos do trabalho no CNES
- "Vácuo de profissionais"
- Dados internos de prospecção
- Isso é insight de priorização INTERNO — não é argumento de venda

**Ganchos válidos para conteúdo:**
- Obrigatoriedade legal (NR-1 maio/26 e outras NRs)
- Risco de multa trabalhista e passivo
- eSocial SST
- Economia de FAP (redução de alíquota previdenciária)
- **Preço justo / custo-benefício / pacotes acessíveis**
- Comparativo: terceirizar com a Higilabor vs. contratar SESMT interno
- Atendimento no Triângulo Mineiro a partir de Uberlândia (proximidade = menos deslocamento = preço melhor)

## Shortlist de cidades alvo (uso INTERNO)

Critério de priorização: cidades com baixa densidade de concorrência + DDD 34 (Triângulo, raio natural de Uberlândia) + população relevante. **Este critério é interno — não aparece no texto do blog.**

**Primárias DDD 34 (Triângulo) — ordem de rotação:**
1. Uberlândia (base)
2. Ibiá (22.229 hab)
3. Três Marias (28.895 hab)
4. Presidente Olegário (18.765 hab)
5. Perdizes (17.151 hab)
6. Vazante (19.975 hab)
7. Monte Alegre de Minas (20.170 hab)
8. Santa Vitória (20.973 hab)
9. Campina Verde (18.011 hab)
10. Nova Ponte (14.598 hab)
11. Lagoa Formosa (18.904 hab)
12. Fronteira (14.540 hab)

**Secundárias (médio porte — rodar 1 a cada 5 rodadas):**
- Ribeirão das Neves (329.794 hab)
- Teófilo Otoni (137.418 hab)
- Unaí (86.619 hab)
- Itabirito (53.365 hab)

## Passo 1 — Ler/criar estado

Arquivo: `/home/user/Playground/seo_higilabor/estado.json`

Se não existir, criar com:
```json
{"ultimo_tema": -1, "ultima_cidade_idx": -1, "ultima_cidade": "", "ultima_execucao": "", "total_rodadas": 0}
```

**Temas (0-indexed):**

| Tema | Nome | O que pesquisar |
|------|------|-----------------|
| 0 | Google Trends / volume real | WebSearch cruzando Google Trends, Ubersuggest, Semrush (prints/artigos públicos) sobre volume para: "NR-1 psicossocial", "medicina do trabalho [cidade]", "PGR", "PCMSO", "LTCAT", "exame admissional [cidade]", "engenharia segurança trabalho", "laudo insalubridade", "FAP redução", "medicina do trabalho preço", "SST pequena empresa" |
| 1 | Análise de concorrentes locais | Top 5 resultados orgânicos para "medicina do trabalho [cidade]", "PGR [cidade]", "exame admissional [cidade]". Anotar: domínio, título, meta description, H1, tipo de conteúdo, autoridade, **se mencionam preço**, gaps exploráveis. Identificar se concorrentes publicam faixa de preço ou escondem |
| 2 | Lista priorizada de keywords | Consolidar aprendizados + keywords locais da cidade. Ranking de 15–25 keywords com: volume estimado, dificuldade, intenção (info/comercial/transacional), prioridade (P0/P1/P2). **Destacar keywords de intenção de preço** ("medicina do trabalho preço", "PGR quanto custa", "exame admissional valor", "SST barato Uberlândia") |

**Rotação:**
```
proximo_tema = (ultimo_tema + 1) % 3
proxima_cidade_idx = (ultima_cidade_idx + 1) % 12
```
- A cada 5 rodadas (`total_rodadas % 5 == 4`), usar 1 cidade secundária no lugar
- Cidade secundária idx: `(total_rodadas // 5) % 4`

## Passo 2 — Executar a pesquisa

WebSearch livre, sempre contextualizado na cidade da rodada + termos nacionais. Mínimo 8 buscas por tema.

Salvar em:
```
/home/user/Playground/seo_higilabor/pesquisas/YYYY-MM-DD_tema{N}_cidade-slug.md
```

Formato do arquivo de pesquisa:
```markdown
# Pesquisa SEO — Rodada X
**Data:** YYYY-MM-DD
**Tema:** N — [nome do tema]
**Cidade:** [cidade]/MG

## [Conteúdo da pesquisa conforme o tema]

## Insights acionáveis
- [3-5 insights concretos]

## Keywords identificadas
| Keyword | Volume est. | Dificuldade | Intenção | Prioridade |
|---------|------------|-------------|----------|------------|
```

## Passo 3 — Gerar rascunho de blog post otimizado para SEO

Sempre 1 post pronto para o site da Higilabor:

**Especificações obrigatórias:**
- **Title tag** (50–60 chars) com keyword principal + cidade no início
- **Meta description** (150–160 chars) com CTA e menção de preço/orçamento
- **H1** único
- **H2/H3** semânticos cobrindo intenção da busca
- **800–1500 palavras**, tom direto, voltado para PME do Triângulo Mineiro/MG
- **FAQ** ao final (3–5 perguntas) com schema FAQ markup em HTML (JSON-LD)
- **Internal linking** sugerido (para /pgr/, /pcmso/, /ltcat/, /contato/)
- **Slug** SEO-friendly
- **Parágrafo sobre atendimento** na cidade da rodada a partir de Uberlândia, destacando preço competitivo e custo-benefício (NUNCA citar CNES ou ausência de concorrentes)
- **CTA forte** para orçamento/cotação — WhatsApp (34) 99971-5684 e /contato/

**Rotação de temas do blog:**
NR-1 psicossocial (prioridade máxima até maio/26), PGR, PCMSO, LTCAT, FAP, saúde mental no trabalho, exames ocupacionais, CIPA, eSocial SST, "quanto custa SST para pequena empresa", "terceirizar SST vs SESMT interno"

Salvar em:
```
/home/user/Playground/seo_higilabor/blog_posts/YYYY-MM-DD_cidade-slug_tema-post.md
```

**Formato do blog post:**
```markdown
---
title_tag: "..."
meta_description: "..."
slug: "..."
h1: "..."
keyword_principal: "..."
keywords_secundarias: ["...", "..."]
cidade: "..."
data: "YYYY-MM-DD"
---

# [H1]

[Conteúdo 800-1500 palavras]

## FAQ

<script type="application/ld+json">
{FAQ schema JSON-LD}
</script>

## CTA
[Chamada para ação]

---
**Internal links sugeridos:** [lista]
```

**IMPORTANTE:** O blog post é RASCUNHO. Antes de publicar, deve passar pela skill `/ux-copy` para revisão de microcopy, tom e clareza.

## Passo 4 — Atualizar estado

Atualizar `/home/user/Playground/seo_higilabor/estado.json` com:
```json
{
  "ultimo_tema": <novo_tema>,
  "ultima_cidade_idx": <novo_idx>,
  "ultima_cidade": "<nome_cidade>",
  "ultima_execucao": "YYYY-MM-DD",
  "total_rodadas": <incrementado>
}
```

**Só atualizar estado APÓS ambos os arquivos (pesquisa + blog) serem salvos com sucesso.**

## Passo 5 — Resumo final

Resumo curto 5–10 linhas:
- Cidade e tema da rodada
- 3 insights principais
- Título do blog gerado
- Caminho dos arquivos
- Próxima rodada (tema + cidade)

Direto ao ponto.

## Referências no repositório

- `seo_higilabor/estado.json` — estado atual da rotação
- `seo_higilabor/pesquisas/` — pesquisas anteriores (consultar para não repetir)
- `seo_higilabor/blog_posts/` — posts anteriores (consultar para não repetir tema+cidade)
- `context/servicos.md` — catálogo de serviços Higilabor
- `kb-sst/` — knowledge base SST para embasar conteúdo
