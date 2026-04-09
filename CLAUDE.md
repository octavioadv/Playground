# CLAUDE.md

## Pipelines de conteúdo (obrigatórios)

Toda produção de conteúdo segue um pipeline. Nenhuma etapa é pulada. A criação/redação só começa depois de validar todas as etapas anteriores.

---

### Pipeline LinkedIn

Antes de criar qualquer conteúdo para LinkedIn (carrossel, texto, imagem, enquete):

1. **Pesquisa SEO** — Verificar dados em `seo_higilabor/` ou rodar nova pesquisa se necessário
2. **Análise LinkedIn do dia** — Seguir `alavanca/linkedin-analise-diaria.md`: pesquisar feed, notícias, concorrentes, decidir formato + tom. Apresentar bloco resumo e aguardar validação antes de prosseguir
3. **UX Copy** — Escrever e validar o microcopy de cada elemento
4. **Criação** — Produzir o conteúdo no formato decidido na etapa 2

O formato (carrossel, texto, etc.) é decidido na etapa 2, nunca antes.

---

### Pipeline Blog SEO

Antes de escrever qualquer post para o blog da Higilabor:

1. **Pesquisa SEO** — Keyword principal, volume, intenção de busca, análise da SERP top 5, gap dos concorrentes. Output: bloco de pesquisa. Seguir `alavanca/blog-seo-pipeline.md`
2. **Brief de conteúdo** — Estrutura H2s, FAQs, internal links, schema markup, CTA, extensão alvo. Output: brief completo
3. **UX Copy** — Title tag (55-60 chars), meta description (150-160 chars), H1, slug, CTAs. Output: bloco de copy com alternativas
4. **Redação** — Texto otimizado, keyword nos primeiros 100 palavras, tom técnico+acessível
5. **Checklist** — Validação técnica SEO + conteúdo + UX antes de considerar pronto

A estrutura do post é decidida na etapa 2. O title tag e meta description são decididos na etapa 3. Nunca escrever primeiro e otimizar depois.

---

### Regras gerais

- Metodologias completas: `alavanca/linkedin-analise-diaria.md` e `alavanca/blog-seo-pipeline.md`
- Pesquisas SEO ficam em `seo_higilabor/pesquisas/`, posts em `seo_higilabor/blog_posts/`
- Posts com prazo legal (ex: NR-1 maio/2026) precisam ser revisados quando a data passar
- Temas e cidades rotacionam via `seo_higilabor/estado.json`
