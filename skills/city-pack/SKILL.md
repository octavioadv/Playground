---
name: city-pack
description: |
  Gera pacote comercial completo de conteúdo para uma cidade do Triângulo Mineiro.
  Use SEMPRE que o usuário mencionar:
  - "city-pack [cidade]", "gera pacote [cidade]", "foca em [cidade]"
  - "material comercial [cidade]", "vou trabalhar [cidade]"
  - Qualquer pedido de conteúdo multicanal focado em uma cidade específica
  Execução: SOB DEMANDA (não é diária). Você escolhe a cidade estratégica da semana.
  Output: 4 arquivos em seo_higilabor/cidades/[slug]/
  Contexto: Higilabor consultoria SST Uberlândia/MG. Foco em PME local e câmaras municipais.
argument-hint: "<nome da cidade> [--force]"
---

# /city-pack — Pacote Comercial por Cidade

## Objetivo

Gerar um pacote comercial completo (4 peças) para uma cidade específica do Triângulo Mineiro ou Alto Paranaíba. O objetivo é ter um material pronto e coeso para focar naquela cidade durante uma semana: landing page, blog, LinkedIn local e scripts de prospecção WhatsApp.

**Não é uma skill diária.** É sob demanda. Volume realista: 1 pacote por semana = 4 cidades/mês = 48 cidades/ano (cobre o Triângulo inteiro em 1 ano com qualidade).

## O que gera (4 arquivos)

| # | Arquivo | Canal | Objetivo |
|---|---------|-------|----------|
| 1 | `landing-page.html` | Site | Conversão direta (WhatsApp + formulário) |
| 2 | `blog-post.md` | Site | SEO orgânico + autoridade técnica |
| 3 | `linkedin-post.md` | LinkedIn | Post local único (não substitui linkedin-sst-daily) |
| 4 | `whatsapp-cold.md` | Prospecção | 3 mensagens: fria, follow-up, última tentativa |

**Não gera:** Instagram/TikTok (exigem design/edição), email sequence (exige CRM).

## Procedimento

### Passo 1 — Validar cidade e coletar contexto

1. Receber nome da cidade do usuário (ex: "Ibiá", "Três Marias", "Patos de Minas")
2. Normalizar slug: minúsculas, sem acentos, hífen como separador, formato `cidade-uf` (ex: `ibia-mg`)
3. Verificar se já existe `seo_higilabor/cidades/[slug]/`:
   - Se existe e tem os 4 arquivos → pular geração, apenas relatar
   - Se existe mas tem arquivos faltando → gerar só os ausentes
   - Se `--force` foi passado → regenerar tudo
4. Buscar pesquisa anterior em `seo_higilabor/pesquisas/` para a cidade (se existir, usar como base)
5. Se não houver pesquisa, fazer WebSearch mínimo (5 buscas) para coletar contexto:
   - Perfil econômico da cidade (agro, indústria, comércio)
   - População e número aproximado de empresas
   - Concorrência local em SST
   - Câmara municipal e principais empregadores públicos
   - Distância de Uberlândia em km

### Passo 2 — Gerar os 4 arquivos

**Salvar em:** `/home/user/Playground/seo_higilabor/cidades/[slug]/`

---

#### Arquivo 1: `landing-page.html`

Landing page HTML estilizada pronta para publicar. Seguir o padrão de `seo_higilabor/blog_posts/2026-04-10_ibia_blog.html` (hero verde, alertas, tabela de preços, grid de serviços, FAQ cards, CTA).

**Estrutura obrigatória:**
- `<head>` com meta title, meta description, viewport
- Hero com H1 forte focado na cidade
- Bloco "Por que sua empresa em [cidade] precisa de SST?"
- Bloco NR-1 psicossocial (prioridade até maio/26)
- Tabela de preços de referência
- Grid de serviços Higilabor (PGR, PCMSO, LTCAT, NR-1, FAP, treinamentos, eSocial, cobertura regional)
- FAQ com 5 perguntas + Schema JSON-LD
- CTA final com botão WhatsApp (link `wa.me` com mensagem pré-preenchida) + link `/contato/`
- CSS inline (sem dependências externas)
- Schema.org: `LocalBusiness` no header + `FAQPage` no FAQ

**Regras:**
- Linguagem profissional mas acessível (tom Higilabor)
- Incluir nome da cidade no H1, meta tags, título do hero e pelo menos 3x no corpo
- Citar cidades vizinhas no rodapé (cobertura regional)
- Sem inventar dados de clientes ou cases fictícios

---

#### Arquivo 2: `blog-post.md`

Artigo SEO 800-1200 palavras em markdown com frontmatter YAML.

**Frontmatter obrigatório:**
```yaml
---
title_tag: "..." # 50-60 chars com keyword + cidade
meta_description: "..." # 150-160 chars com CTA
slug: "..." # slug SEO-friendly
h1: "..."
keyword_principal: "..." # medicina do trabalho [cidade]
keywords_secundarias: [...] # 5+ variações
cidade: "..."
uf: "MG"
data: "YYYY-MM-DD"
status: "RASCUNHO"
---
```

**Estrutura:**
1. Introdução forte com problema + prazo (NR-1 psicossocial)
2. H2 "Por que sua empresa em [cidade] precisa de SST?"
3. H2 sobre PGR
4. H2 sobre PCMSO
5. H2 sobre NR-1 psicossocial
6. H2 "Quanto custa SST em [cidade]?" com tabela de preços
7. H2 "Higilabor atende empresas em [cidade]"
8. FAQ com 5 perguntas + Schema JSON-LD
9. CTA final

**Regras:**
- Parágrafos curtos (máx 4 linhas)
- Sem repetição literal entre seções
- Cidades vizinhas mencionadas no final (interlinking futuro)

---

#### Arquivo 3: `linkedin-post.md`

Post LinkedIn de 200-300 palavras focado na cidade. **Tom local, não genérico.**

**Estrutura:**
```markdown
# Post LinkedIn — [Cidade]

**Tema:** [angulo escolhido - NR-1, FAP, dispensa câmara, etc]
**Gancho:** [primeira linha que aparece no feed]

[Texto do post completo, 200-300 palavras]

**Hashtags:** #SST #[Cidade] #MedicinaDoTrabalho #NR1 #PME
**Melhor horário:** [terça a quinta 8h-10h ou 17h-19h]
**Status:** RASCUNHO — passar por /ux-copy antes de publicar
```

**Regras:**
- 1ª linha captura atenção (dado concreto ou pergunta provocativa)
- Citar a cidade explicitamente
- CTA que gera engajamento (comentar, salvar)
- 3-5 hashtags incluindo nome da cidade
- Sem link no corpo (LinkedIn penaliza — link vai no 1º comentário)

---

#### Arquivo 4: `whatsapp-cold.md`

3 mensagens de prospecção para empresas da cidade.

**Estrutura:**
```markdown
# WhatsApp Prospecção — [Cidade]

## Mensagem 1 — Fria (primeira abordagem)

Olá, [nome]. Aqui é [Octav/vendedor] da Higilabor, consultoria de SST sediada em Uberlândia.

[1-2 frases: contexto + valor direto, sem "tudo bem?"]

[Pergunta: gancho para resposta]

---

## Mensagem 2 — Follow-up (3 dias depois, sem resposta)

[Abordagem nova, não "só passando pra lembrar". Trazer novidade, prazo ou dado]

---

## Mensagem 3 — Última tentativa (7 dias depois)

[Mensagem breve. "Se não for o momento, sem problema. Deixo aqui se precisar mais à frente."]
```

**Regras:**
- Máximo 3 parágrafos por mensagem
- 1ª frase é o valor (nunca "Bom dia, tudo bem?")
- Cada mensagem tem ângulo diferente (não insistir no mesmo gancho)
- Tom profissional mas humano
- CTA claro em cada uma
- Personalização com `{nome}` e `{empresa}` como placeholders

### Passo 3 — Atualizar estado

Criar/atualizar `seo_higilabor/cidades/[slug]/_estado.json`:

```json
{
  "cidade": "Ibiá",
  "slug": "ibia-mg",
  "uf": "MG",
  "populacao": 22229,
  "distancia_uberlandia_km": 180,
  "gerado_em": "2026-04-10T14:30:00",
  "gerado_por": "city-pack",
  "arquivos": {
    "landing-page.html": "gerado",
    "blog-post.md": "gerado",
    "linkedin-post.md": "gerado",
    "whatsapp-cold.md": "gerado"
  },
  "status_publicacao": {
    "landing-page": "pendente",
    "blog-post": "pendente",
    "linkedin-post": "pendente",
    "whatsapp-cold": "pendente"
  },
  "cidades_vizinhas": ["Araxá", "Campos Altos", "Pratinha"],
  "revisado_ux_copy": false
}
```

### Passo 4 — Validação pré-save

Antes de salvar, validar cada arquivo:
- [ ] Nome da cidade aparece corretamente (com acento se houver)
- [ ] Nenhum placeholder `{{...}}` ou `TODO` deixado no texto
- [ ] CTA presente em todos os arquivos
- [ ] Arquivo não vazio (mínimo 500 caracteres)
- [ ] Nenhuma palavra proibida do glossário (ver `ux-copy-base/voz_higilabor.md`): CNES, vácuo de profissionais, "solução integrada", "excelência", "atendemos todo o Brasil"
- [ ] Triângulo Mineiro, Uberlândia, eSocial escritos corretamente
- [ ] Higilabor sem artigo "A" antes

Se falhar qualquer validação → corrigir antes de salvar.

### Passo 5 — Interlinking

Se houver outras cidades já geradas em `seo_higilabor/cidades/`, atualizar o rodapé do blog-post e landing-page da cidade nova com links para as vizinhas geográficas (quando aplicável).

Exemplo: ao gerar Ibiá, se já existir Araxá, incluir link "Atendemos também [Araxá](/cidades/araxa-mg/)".

### Passo 6 — Relatório final

Retornar ao usuário:

```markdown
## City-Pack — [Cidade] concluído

**Slug:** [slug]
**População:** [número]
**Distância de Uberlândia:** [km]
**Diretório:** seo_higilabor/cidades/[slug]/

### Arquivos gerados
- [x] landing-page.html
- [x] blog-post.md
- [x] linkedin-post.md
- [x] whatsapp-cold.md

### Próximas ações recomendadas
1. Revisar com /ux-copy antes de publicar
2. [ação específica baseada na cidade — ex: "priorizar blog, domina SERP local" ou "enviar whatsapp-cold para lista de câmaras da região"]
3. Interlinking: [cidades vizinhas já disponíveis para linkar]

### Insights
- [1-2 insights específicos da cidade descobertos na pesquisa]
```

## Idempotência

**Regras de reexecução:**

| Situação | Ação |
|----------|------|
| Cidade nova, sem pasta | Gerar tudo |
| Pasta existe, 4 arquivos completos | Não regenerar. Relatar "já concluído" e sugerir ação |
| Pasta existe, arquivos faltando | Gerar apenas os ausentes |
| Flag `--force` passada | Regenerar tudo, sobrescrever |

## Regras de conteúdo (herdadas da base de voz)

Ler `/home/user/Playground/ux-copy-base/voz_higilabor.md` antes de gerar.

**Nunca:**
- Mencionar CNES, vácuo de profissionais, dados internos
- Usar "A Higilabor" (sem artigo)
- Usar palavras proibidas do glossário
- Inventar cases, números ou clientes
- Fazer promessas jurídicas absolutas

**Sempre:**
- Foco em obrigação legal + custo-benefício + preço justo
- Triângulo Mineiro, Uberlândia, eSocial com grafia correta
- CTA específico em cada canal
- Cidade mencionada explicitamente

## Referências no repositório

- `seo_higilabor/blog_posts/2026-04-10_ibia_blog.html` — exemplo de landing HTML estilizada
- `seo_higilabor/blog_posts/2026-04-10_ibia_concorrentes-sst.md` — exemplo de blog post
- `linkedin-sst/2026-04-10_linkedin_digest.md` — exemplo de posts LinkedIn
- `ux-copy-base/voz_higilabor.md` — base de voz da marca
- `skills/seo-daily-research/SKILL.md` — rotação de temas (alimenta pesquisas)
- `skills/ux-copy/SKILL.md` — revisão obrigatória antes de publicar
