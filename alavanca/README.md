# Alavanca

Projetos e prototipos de alavancas comerciais.

## Pipeline de conteúdo LinkedIn

Nenhum conteúdo LinkedIn é criado sem passar por todas as etapas, nesta ordem:

```
1. Pesquisa SEO        →  volume, keywords, gaps na SERP
2. Análise LinkedIn    →  pulso do dia, formato, tom, feed da audiência
3. UX Copy             →  microcopy validado para cada elemento
4. Criação do conteúdo →  carrossel, texto, imagem — conforme decisão da etapa 2
```

### Regras

- **Etapa 2 é diária.** Antes de qualquer conteúdo, rodar a análise descrita em `linkedin-analise-diaria.md`.
- **O formato é decidido na etapa 2**, não antes. Pode ser carrossel, texto puro, enquete, etc.
- **Carrossel nunca é criado direto.** Só se a análise LinkedIn indicar que é o formato certo para o dia.
- **UX Copy vem antes do HTML.** O documento de copy é gerado e validado antes de produzir o conteúdo final.

---

## Pipeline de Blog SEO

Cada post do blog é uma peça de aquisição orgânica. Pipeline obrigatório:

```
1. Pesquisa SEO       →  keyword, volume, SERP, gap, intenção
2. Brief de conteúdo  →  estrutura H2s, FAQs, schema, internal links
3. UX Copy            →  title tag, meta description, CTAs, headings
4. Redação            →  texto final otimizado
5. Checklist          →  validação técnica antes de publicar
```

### Regras

- **Etapa 1 alimenta tudo.** Sem pesquisa SEO, sem post.
- **O brief (etapa 2) define a estrutura** antes de escrever uma linha.
- **UX Copy valida os elementos de busca** (title tag, meta desc) antes da redação.
- **Checklist é obrigatório** — nenhum post sai sem passar.
- **Posts com prazo legal** (ex: NR-1 maio/2026) são revisados quando a data passa.

Metodologia completa: `blog-seo-pipeline.md`

---

## Arquivos

| Arquivo | Pipeline | Função |
|---------|----------|--------|
| `linkedin-analise-diaria.md` | LinkedIn | Metodologia da análise diária |
| `blog-seo-pipeline.md` | Blog | Pipeline completo de blog SEO |
| `carrossel-nr1-psicossocial-ux-copy.md` | LinkedIn | UX copy do carrossel NR-1 |
| `carrossel-nr1-psicossocial.html` | LinkedIn | Carrossel NR-1 final |
| `reprecificacao-higilabor/` | — | Calculadora de reprecificação |
| `alavanca1_reprecificacao_higilabor.html` | — | Redirect de compatibilidade |
