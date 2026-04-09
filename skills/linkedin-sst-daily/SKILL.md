---
name: linkedin-sst-daily
description: |
  Análise diária de publicações LinkedIn sobre SST/EHS + geração de conteúdo para postar.
  Use SEMPRE que o usuário mencionar:
  - "roda LinkedIn", "análise LinkedIn", "conteúdo LinkedIn", "post LinkedIn"
  - "o que tá rolando no LinkedIn SST", "tendências SST", "EHS trends"
  - Qualquer menção a LinkedIn + SST/EHS/medicina do trabalho/segurança do trabalho
  Contexto: Higilabor consultoria SST Uberlândia/MG. Perfil LinkedIn voltado para
  decisores de PME (RH, financeiro, donos) e profissionais SST.
---

# LinkedIn SST — Análise Diária + Conteúdo

## Objetivo

Analisar diariamente as publicações relevantes no LinkedIn sobre SST, EHS, medicina e engenharia do trabalho. Filtrar o que é relevante e gerar rascunhos de conteúdo para o perfil da Higilabor postar.

## Público-alvo do LinkedIn da Higilabor

- **Decisores de PME**: donos, gerentes de RH, financeiro — compram SST por obrigação/medo de multa
- **Profissionais SST**: engenheiros e técnicos de segurança, médicos do trabalho — networking/autoridade
- **Compradores públicos**: prefeituras, câmaras, autarquias — dispensas e licitações

## Passo 1 — Pesquisar tendências do dia

Usar WebSearch para encontrar publicações e tendências recentes sobre:

**Termos de busca (rodar 8-12 buscas):**
1. `site:linkedin.com "segurança do trabalho" últimas 24h`
2. `site:linkedin.com "medicina do trabalho" hoje`
3. `site:linkedin.com "NR-1 psicossocial" 2026`
4. `site:linkedin.com "saúde ocupacional" tendência`
5. `site:linkedin.com "EHS" Brasil`
6. `site:linkedin.com "PGR" "PCMSO" empresa`
7. `linkedin SST tendências ${MÊS} 2026`
8. `linkedin "engenharia de segurança" novidades`
9. `"medicina do trabalho" novidade regulatória 2026`
10. `NR-1 psicossocial LinkedIn post viral`
11. `SST pequena empresa LinkedIn dicas`
12. `FAP redução LinkedIn case`

**Fontes complementares (WebSearch):**
- Portais: Migalhas Trabalhistas, SST Online, Revista Proteção, ANAMT
- Governo: MTE, eSocial, INSS (novidades regulatórias)
- Eventos: PREVENÇÃO, FENATEST, congressos SST

## Passo 2 — Filtrar e classificar

Para cada publicação/tendência encontrada, classificar:

| Tipo | Critério | Ação |
|------|----------|------|
| **A — Quente** | Novidade regulatória, deadline, multa, caso viral | Gerar post URGENTE |
| **B — Relevante** | Dica prática, case, estatística útil | Gerar post padrão |
| **C — Inspiração** | Formato interessante, gancho criativo | Anotar para adaptar |
| **D — Descartável** | Spam, autopromoção genérica, irrelevante | Ignorar |

Filtrar apenas tipos A, B e C.

## Passo 3 — Gerar rascunhos de posts

Gerar **2-3 rascunhos de posts** para LinkedIn, prontos para revisão.

**Formato de cada post:**

### Post tipo "Autoridade / Educativo"
- **Gancho** (1ª linha): pergunta provocativa ou dado impactante — é o que aparece no feed
- **Corpo** (150-300 palavras): explicação direta, sem enrolação, com dados/prazos concretos
- **CTA**: "Comente se sua empresa já...", "Salve este post", "Quer saber o custo? Link na bio"
- **Hashtags**: 3-5 relevantes (#SST #NR1 #MedicinaDoTrabalho #SegurançaDoTrabalho #PME)
- **Formato**: texto puro (LinkedIn favorece texto > link externo)

### Post tipo "Engajamento / Opinião"
- **Gancho**: opinião forte sobre tendência do dia
- **Corpo**: argumento em 3-5 pontos, tom conversacional
- **CTA**: pergunta aberta para gerar comentários

### Post tipo "Carrossel / Infográfico" (descrição)
- **Slides sugeridos**: 5-8 slides com título + bullet points
- **Tema**: passo-a-passo, checklist, comparativo
- **Nota**: descrever o conteúdo de cada slide (design será feito separadamente)

**Regras de conteúdo (MESMAS do SEO — nunca violar):**
- NUNCA mencionar CNES, vácuo de profissionais, dados internos
- Sempre focar em: obrigação legal, multa, preço justo, economia FAP, custo-benefício
- Tom: direto, profissional mas acessível, sem jargão excessivo
- Posicionar Higilabor como referência acessível no Triângulo Mineiro

## Passo 4 — Salvar output

Salvar em:
```
/home/user/Playground/linkedin-sst/YYYY-MM-DD_linkedin_digest.md
```

Criar o diretório `linkedin-sst/` se não existir.

**Formato do arquivo:**

```markdown
# LinkedIn SST — Digest YYYY-MM-DD

## Tendências do dia

### [Tendência 1 — título curto]
- **Fonte**: [link ou referência]
- **Tipo**: A/B/C
- **Resumo**: [2-3 linhas]
- **Relevância para Higilabor**: [por que importa]

### [Tendência 2]
...

---

## Rascunhos de posts

### Post 1 — [tipo: Autoridade/Engajamento/Carrossel]
**Tema**: [...]
**Gancho**: [primeira linha]

[Texto completo do post]

**Hashtags**: #... #... #...
**Melhor horário**: [sugestão: terça-quinta 8h-10h ou 17h-19h]
**Status**: RASCUNHO — passar por /ux-copy antes de publicar

---

### Post 2 — [tipo]
...

---

## Insights para próximos dias
- [O que monitorar amanhã]
- [Tendência emergente]
```

## Passo 5 — Resumo na resposta

Resumo curto ao usuário:
- Quantas tendências tipo A/B encontradas
- Títulos dos 2-3 posts gerados
- 1 insight principal do dia
- Lembrete: posts são rascunho, passar por `/ux-copy` antes de publicar

## Notas importantes

- **Posts são RASCUNHO**: antes de publicar no LinkedIn, o texto DEVE passar pela skill `/ux-copy` para revisão de microcopy, tom, CTA e clareza
- **Frequência ideal de postagem**: 3-4x por semana no LinkedIn (não precisa postar todo dia)
- **Priorizar**: NR-1 psicossocial (até maio/26 é o tema mais quente), FAP, eSocial SST
- **Evitar**: posts genéricos de "feliz dia do trabalho", conteúdo sem valor prático

## Referências no repositório

- `seo_higilabor/blog_posts/` — posts do blog (podem virar versão LinkedIn resumida)
- `context/servicos.md` — catálogo de serviços para referência
- `kb-sst/` — knowledge base SST
- `skills/higilabor-campanhas/SKILL.md` — scripts e messaging aprovados
