---
name: ux-copy
description: |
  Revisão e criação de UX copy para a Higilabor. Use SEMPRE que o usuário mencionar:
  - "ux-copy", "review copy", "revisar texto", "revisar post", "revisar blog"
  - "antes de publicar", "melhorar CTA", "ajustar tom", "microcopy"
  - Qualquer texto gerado por outra skill (SEO, LinkedIn, campanhas) que precise revisão final
  Contexto: Higilabor consultoria SST Uberlândia/MG. Tom direto, profissional, acessível.
  Base de voz: /home/user/Playground/ux-copy-base/voz_higilabor.md
argument-hint: "<caminho do arquivo ou texto para revisar>"
---

# /ux-copy — Revisão de Copy para Higilabor

## Objetivo

Revisar e refinar qualquer texto antes de publicação. Garante que o copy segue a voz da marca, está claro, conciso e otimizado para conversão.

## Antes de começar

1. Ler a base de voz: `/home/user/Playground/ux-copy-base/voz_higilabor.md`
2. Identificar o contexto: blog, LinkedIn, WhatsApp, proposta, landing page, e-mail
3. Identificar o público: decisor PME, profissional SST, comprador público

## Princípios

1. **Claro**: Dizer exatamente o que quer dizer. Sem jargão desnecessário.
2. **Conciso**: Usar o mínimo de palavras que transmita o significado completo.
3. **Consistente**: Mesmos termos para as mesmas coisas (ver glossário na base de voz).
4. **Útil**: Cada palavra ajuda o leitor a tomar uma decisão.
5. **Humano**: Tom de consultor confiável, não de robô nem de vendedor agressivo.

## Checklist de revisão

### Tom e voz
- [ ] Tom direto e profissional (não acadêmico, não informal demais)
- [ ] Sem superlativos vazios ("o melhor", "líder", "excelência")
- [ ] Sem jargão SST desnecessário (explicar quando usar termos técnicos)
- [ ] Posiciona Higilabor como acessível e competente (preço justo + seriedade)

### Regras de conteúdo (NUNCA violar)
- [ ] NÃO menciona CNES, vácuo de profissionais, dados internos de prospecção
- [ ] NÃO usa tom de medo excessivo (informar risco ≠ terrorismo)
- [ ] NÃO promete resultados que não pode garantir
- [ ] Ganchos usados são válidos: obrigação legal, multa, eSocial, FAP, preço justo, custo-benefício

### Estrutura
- [ ] Título/gancho captura atenção nos primeiros 5 segundos
- [ ] Parágrafos curtos (máx 3-4 linhas)
- [ ] Subtítulos claros e escaneáveis
- [ ] CTA específico e acionável (verbo + resultado)
- [ ] Dados concretos (valores, prazos, percentuais) quando possível

### SEO (se aplicável)
- [ ] Title tag 50-60 chars com keyword no início
- [ ] Meta description 150-160 chars com CTA
- [ ] H1 único, H2/H3 semânticos
- [ ] Keyword principal aparece no 1º parágrafo
- [ ] FAQ com schema JSON-LD correto

### LinkedIn (se aplicável)
- [ ] Gancho forte na 1ª linha (aparece no feed antes do "ver mais")
- [ ] 150-300 palavras (sweet spot de engajamento)
- [ ] CTA que gera comentário ou salvamento
- [ ] 3-5 hashtags relevantes (não genéricas)
- [ ] Sem links no corpo (LinkedIn penaliza — colocar link no 1º comentário)

### WhatsApp/E-mail (se aplicável)
- [ ] Primeira frase é o valor (não "Bom dia, tudo bem?")
- [ ] Máximo 3 parágrafos curtos
- [ ] CTA claro: o que fazer agora
- [ ] Personalização: nome do contato, empresa, contexto

## Padrões de copy

### CTAs da Higilabor
| Contexto | CTA recomendado |
|----------|----------------|
| Blog post | "Solicite um orçamento sem compromisso — WhatsApp (34) 99971-5684" |
| LinkedIn | "Comente se sua empresa já se adequou" / "Salve para consultar depois" |
| WhatsApp prospecção | "Posso enviar uma proposta personalizada para a [empresa]?" |
| Proposta comercial | "Aceitar proposta" / "Agendar reunião para tirar dúvidas" |
| Landing page | "Receber orçamento em 24h" |

### Termos preferenciais
| Evitar | Usar |
|--------|------|
| "Nossos serviços" | Nome do serviço (PGR, PCMSO, LTCAT) |
| "Entre em contato" | "Solicite um orçamento" / "Fale pelo WhatsApp" |
| "Solução completa" | "PGR + PCMSO + LTCAT — tudo o que a NR exige" |
| "Expertise" | "experiência" ou "especialidade" |
| "Excelência" | (deletar — não agrega) |
| "Atendemos todo o Brasil" | "Atendemos o Triângulo Mineiro a partir de Uberlândia" |
| "Preço acessível" | "Preço justo — sem surpresas na fatura" |

## Output da revisão

Para cada texto revisado, entregar:

```markdown
## Revisão UX Copy — [Contexto]

### Status: APROVADO / AJUSTES NECESSÁRIOS / REESCREVER

### Alterações feitas
| # | Trecho original | Trecho revisado | Motivo |
|---|----------------|-----------------|--------|

### Copy final (pronto para publicar)
[Texto completo revisado]

### Notas
- [Observações para o Octav]
```

## Fluxo de trabalho

1. Receber arquivo ou texto para revisão
2. Ler base de voz (`ux-copy-base/voz_higilabor.md`)
3. Aplicar checklist completo
4. Gerar output com alterações + copy final
5. Se o texto original tiver mais de 5 problemas → marcar como REESCREVER e propor versão nova
