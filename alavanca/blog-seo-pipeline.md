# Pipeline de Blog SEO — Higilabor

Objetivo: fazer o site da Higilabor dominar as buscas orgânicas em SST, medicina do trabalho e compliance trabalhista. Cada post é uma peça de aquisição, não um artigo genérico.

---

## Pipeline obrigatório

```
1. Pesquisa SEO          →  keyword, volume, dificuldade, intenção, SERP atual
2. Brief de conteúdo     →  estrutura, H2s, FAQs, internal links, schema
3. UX Copy               →  title tag, meta description, CTAs, headings
4. Redação               →  texto final otimizado
5. Checklist de entrega  →  validação técnica antes de publicar
```

Nenhuma etapa é pulada. A redação (etapa 4) só começa depois de validar as etapas 1-3.

---

## Etapa 1 — Pesquisa SEO

### O que levantar

| Item | Detalhe |
|------|---------|
| **Keyword principal** | A frase exata que o post vai rankear. Ex: "NR-1 psicossocial Uberlândia" |
| **Keywords secundárias** | 3-5 variações e termos relacionados. Ex: "riscos psicossociais no trabalho", "PGR 2026" |
| **Volume estimado** | Buscar via Google Trends, Keyword Planner ou estimativa por SERP |
| **Intenção de busca** | Informacional / Navegacional / Transacional / Investigação comercial |
| **SERP atual** | Quem está nos top 5? Que formato usam? (lista, guia, FAQ, ferramenta) |
| **Gap identificado** | O que os top 5 NÃO cobrem e a Higilabor pode cobrir |
| **Dificuldade** | Domínios fortes? Muitos anúncios? Snippet existente? |
| **Localização** | Se faz sentido localizar (ex: "Uberlândia", "Minas Gerais") |

### Fontes de pesquisa

- Google Trends (comparar termos, sazonalidade)
- Google SERP real (analisar resultados, "People Also Ask", sugestões)
- AnswerThePublic / AlsoAsked (perguntas do público)
- Sites concorrentes (que termos eles rankeiam)
- Dados internos: `seo_higilabor/pesquisas/` (pesquisas anteriores)

### Output da etapa 1

```markdown
## Pesquisa SEO — [KEYWORD PRINCIPAL]

**Keyword principal:** [termo]
**Volume estimado:** [X buscas/mês]
**Intenção:** [informacional/transacional/etc]
**Keywords secundárias:** [lista]
**SERP top 5:**
1. [título] — [domínio] — [formato] — [gap]
2. ...
**Gap da Higilabor:** [o que podemos cobrir melhor]
**Localização:** [cidade/estado ou nacional]
**Recomendação:** [vale escrever / não vale / já temos conteúdo similar]
```

---

## Etapa 2 — Brief de conteúdo

Com base na pesquisa, montar o esqueleto do post antes de escrever.

### Estrutura do brief

```markdown
## Brief — [TÍTULO PROVISÓRIO]

**Keyword principal:** [termo]
**Palavra na URL (slug):** [slug-sugerido]
**Extensão alvo:** [800-1200 / 1500-2500 / 3000+ palavras]
**Formato:** [guia prático / FAQ / lista / tutorial / comparativo / opinião]

### Estrutura de H2s
1. [H2] — o que cobre
2. [H2] — o que cobre
3. [H2] — o que cobre
...

### FAQs (mínimo 3, máximo 7)
- [Pergunta 1]?
- [Pergunta 2]?
- [Pergunta 3]?

### Internal links obrigatórios
- [página existente 1] — âncora sugerida
- [página existente 2] — âncora sugerida

### Schema markup
- FAQPage: sim/não
- HowTo: sim/não
- Article: tipo (BlogPosting / NewsArticle)

### CTA principal
- [O que oferecer: orçamento, pacote, diagnóstico, download]
- [Onde colocar: meio do texto, final, ambos]

### Concorrente de referência
- [URL do melhor resultado atual] — superar em: [profundidade / atualidade / localização / formato]
```

---

## Etapa 3 — UX Copy

Antes de escrever o texto completo, validar os elementos de interface/busca:

### Elementos obrigatórios

| Elemento | Regra | Limite |
|----------|-------|--------|
| **Title tag** | Keyword no início. Benefício ou urgência no final. | 55-60 caracteres |
| **Meta description** | Resumo + CTA implícito. Keyword natural. | 150-160 caracteres |
| **H1** | Variação do title tag, mais descritivo. | 70 caracteres max |
| **Slug** | Keyword hifenizada, sem stopwords. | curto |
| **CTA inline** | Verbo + benefício. Ex: "Peça um orçamento sem compromisso" | 8-12 palavras |
| **CTA final** | Mais completo, com proposta de valor da Higilabor | 2-3 linhas |

### Output da etapa 3

```markdown
## UX Copy — [TÍTULO]

**Title tag:** [copy] ([X chars])
**Meta description:** [copy] ([X chars])
**H1:** [copy]
**Slug:** /[slug]/
**CTA inline:** [copy]
**CTA final:** [copy]

### Alternativas
| Elemento | Opção A | Opção B |
|----------|---------|---------|
| Title tag | [copy] | [copy] |
| Meta desc | [copy] | [copy] |
```

---

## Etapa 4 — Redação

### Regras de escrita SEO

**Estrutura:**
- Abrir com a resposta (não com contexto). O leitor e o Google querem a resposta nos primeiros 100 palavras.
- H2s como perguntas ou frases que o usuário buscaria.
- Parágrafos curtos (3-4 linhas max).
- Listas e tabelas sempre que possível — Google ama featured snippets de listas.
- FAQs no final com schema `FAQPage`.

**Linguagem:**
- Escrever para quem está buscando no Google, não para quem já conhece o assunto.
- Tom: técnico mas acessível. Sem juridiquês, sem academicismo.
- Voz ativa. Frases diretas. Sem "é importante ressaltar que".
- Keyword principal: no H1, no primeiro parágrafo, em pelo menos 1 H2, e naturalmente ao longo do texto.
- Keywords secundárias: distribuídas nos H2s e corpo.

**Diferenciação:**
- Sempre incluir dados concretos (valores de multa, prazos, estatísticas).
- Sempre mencionar a realidade local quando o post for localizado.
- Sempre terminar com CTA claro para a Higilabor — não genérico.
- Incluir o que os concorrentes na SERP NÃO cobrem (gap identificado na etapa 1).

**Formatação do arquivo:**

```yaml
---
title_tag: "..."
meta_description: "..."
slug: ...
h1: "..."
data_publicacao: YYYY-MM-DD
cidade_foco: Cidade/UF  # ou "Nacional"
keywords_principais:
  - keyword 1
  - keyword 2
internal_links_sugeridos:
  - /pagina-1/
  - /pagina-2/
schema:
  - FAQPage
  - BlogPosting
---

# [H1]

[corpo do post]
```

---

## Etapa 5 — Checklist de entrega

Antes de considerar o post pronto, validar:

### SEO técnico
- [ ] Title tag com keyword, dentro do limite de caracteres
- [ ] Meta description com keyword, dentro do limite
- [ ] Slug limpo, com keyword, sem stopwords
- [ ] H1 único, com keyword
- [ ] Keyword principal nos primeiros 100 palavras
- [ ] Pelo menos 1 H2 contém keyword principal ou secundária
- [ ] Internal links para pelo menos 2 páginas de serviço da Higilabor
- [ ] FAQs marcadas para schema FAQPage
- [ ] Imagens com alt text descritivo (quando houver)

### Conteúdo
- [ ] Responde à intenção de busca identificada na etapa 1
- [ ] Cobre o gap que os concorrentes na SERP não cobrem
- [ ] Dados concretos: valores, prazos, nomes de normas
- [ ] Tom consistente: técnico + acessível
- [ ] Sem erros factuais sobre NRs, prazos legais, valores de multa
- [ ] CTA claro para serviço da Higilabor

### UX Copy
- [ ] Title tag validado (etapa 3)
- [ ] Meta description validada (etapa 3)
- [ ] CTAs revisados conforme princípios UX copy

---

## Cadência

- **Mínimo:** 2 posts/semana
- **Rotação de temas:** usar `seo_higilabor/estado.json` para não repetir tema/cidade
- **Atualização:** posts com prazos legais (ex: NR-1 maio/2026) precisam ser revisados quando a data passar
- **Monitoramento:** após 30 dias, verificar se o post rankeou; se não, revisar title tag e H1

---

## Banco de temas priorizados

Temas com maior potencial de tráfego e conversão para Higilabor:

### Tier 1 — Alto volume, alta intenção comercial
- NR-1 psicossocial / PGR 2026 (urgência temporal)
- PCMSO preço / orçamento
- PGR para pequena empresa
- Exame admissional [cidade]
- Medicina do trabalho [cidade]

### Tier 2 — Volume médio, conteúdo educativo com conversão
- LTCAT para aposentadoria especial
- Laudo de insalubridade — quando precisa
- eSocial SST — como enviar eventos
- Diferença entre PGR e PPRA
- NR-7 atualizada — o que mudou no PCMSO

### Tier 3 — Long tail, pouca concorrência
- SST para MEI — precisa ou não
- Como escolher clínica de medicina do trabalho
- Multa por falta de PGR — valores atualizados
- CID F afastamento — direitos do trabalhador
- ASO digital — como funciona
