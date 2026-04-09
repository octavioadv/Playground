---
name: higilabor-precificacao
description: |
  Analisa preço de orçamento/proposta da Higilabor contra a base de custos do ERP.
  Use SEMPRE que o usuário pedir para:
  - Avaliar se um orçamento está dentro do piso (ex: "esse preço bate com o ERP?", "está dentro do orçamento?")
  - Precificar um serviço novo (laudo, vistoria, PGR, PCMSO, LTCAT, perícia, consultoria NR)
  - Verificar se R$ X por Y horas de Kleber/equipe técnica fecha conta
  - Comparar proposta recebida (PDF/imagem) contra catálogo Higilabor
  - Decidir aceitar/recusar/renegociar uma proposta enviada
  Contexto: Higilabor consultoria SST Uberlândia/MG, capacidade 650 UEP/mês,
  estrutura R$ 38.150/mês, custo/UEP R$ 58,69. Catálogo precifica em R$/hora ~R$ 400/h piso.
---

# Higilabor — Análise de Preço de Serviço

## Quando usar
Sempre que aparecer um orçamento (PDF, imagem, texto) ou pedido de precificação para algum serviço SST da Higilabor. O objetivo é dar veredito **rápido e honesto**: dentro do piso? acima? subprecificado?

## Fontes de verdade (ler ANTES de calcular)

1. **ERP Higilabor (autoritativo)** — `C:\Users\octav\OneDrive\Documentos\Claude\Projects\Finanças Higilabor\5_blocos_higilabor_multi_mes_consolidada.xlsx`
   - Aba `6. Base de Custos`: estrutura mensal (R$ 38.149,72), capacidade UEP (650), custo/UEP, custos fixos detalhados
   - Aba `Catálogo de Serviços`: piso por serviço, horas estimadas, fator de risco ART
2. **Memória** — `C:\Users\octav\.claude\projects\C--Users-octav-OneDrive-Apps-Claude\memory\` — checar memórias `project_pab_*` ou `project_*precif*` para ajustes específicos por tipo de serviço
3. **CLAUDE.md** — capacidade, estrutura, situação financeira, regras de piso

> O ERP pode estar aberto no Excel (lock). Se der `PermissionError`, copiar para `%TEMP%` antes de ler com openpyxl.

## Catálogo de referência (snapshot — confirmar lendo o ERP)

| Serviço | Horas | Piso | Piso c/ margem 20% | R$/h piso |
|---|---|---|---|---|
| PCMSO até 10 func. | 12 | 4.558 | 5.890 | 380 |
| PCMSO 11–30 func. | 16 | 6.381 | 8.246 | 399 |
| PCMSO 31–100 func. | 22 | 8.660 | 11.191 | 394 |
| PGR Grau I (até 10) | 14 | 5.557 | 7.280 | 397 |
| PGR Grau II (até 10) | 16 | 6.668 | 8.736 | 417 |
| PGR Grau III (até 10) | 20 | 8.057 | 10.556 | 403 |
| LTCAT físicos simples | 18 | 7.465 | 9.870 | 415 |
| LTCAT físicos+químicos | 24 | 9.332 | 13.318 | 389 |
| Laudo insalub. 1 agente | 12 | 5.104 | 6.620 | 425 |
| Laudo insalub. 2–3 agentes | 16 | 6.380 | 8.276 | 399 |
| Treinamento NR até 20 pessoas | 8 | 2.915 | 3.680 | 364 |
| Treinamento NR12/NR10 | 12 | 4.372 | 5.520 | 364 |
| Consultoria NR12 até 5 maq | 22 | 9.374 | 12.540 | 426 |
| Consultoria NR12 6–15 maq | 32 | 13.124 | 17.556 | 410 |
| Perícia trabalhista simples | 16 | 6.545 | 8.760 | 409 |
| Perícia c/ laudos compl. | 24 | 9.817 | 11.688 | 409 |

**Média ponderada: ~R$ 400/h de piso** (já inclui custo + overhead + tributo + margem 20%).

## Regras de aplicação rápida

- **Preço piso** = chão absoluto. Nenhuma proposta sai abaixo. = custo real + overhead + tributo + margem 20%.
- **Preço alvo** = 120%–150% do piso. Saudável para EBITDA + folga de negociação.
- **Renovação PGR** = desconto máximo 20% sobre piso (base já levantada).
- **Deslocamento**: até 30 km Uberlândia incluso. 31–100 km: +R$ 1,20/km. >100 km: diária técnica R$ 1.400.
- **Fator risco ART**: +15% a +30% para serviços com responsabilidade técnica via ART. Atmosfera explosiva (NR-10/NR-20), trabalho em altura, espaço confinado → topo da faixa (+30%).
- **ART CREA**: somar ~R$ 250–350 por emissão (custo direto não embutido no piso).
- **Comissão Fernanda** (se aplicável): incluir no cálculo.

## Workflow obrigatório

### 1. Coletar informação
- Ler o orçamento/PDF/imagem completo
- Identificar: escopo, valor cobrado, local, horas/esforço estimado da equipe técnica (perguntar ao Octav se não estiver claro — ele sabe quantas horas Kleber/equipe vai gastar)
- Identificar fator de risco (ART? ambiente classificado? altura? confinado?)

### 2. Calcular piso real
```
piso = (horas_técnicas × R$ 400/h)
     + (horas_técnicas × R$ 400/h × fator_risco_art)   # 0,15 a 0,30
     + ART_CREA                                         # ~R$ 300 se aplicável
     + deslocamento                                     # km > 30
     + comissão_comercial                               # se houver
```

### 3. Calcular faixas
- **Preço alvo mínimo** = piso × 1,20
- **Preço alvo máximo** = piso × 1,50
- **Margem efetiva** = (preço cobrado − piso) / preço cobrado

### 4. Veredito (formato fixo)
Apresentar tabela com:
- Item de custo | valor
- **Piso real**
- **Preço alvo (120–150%)**
- **Preço cobrado** vs piso (em % e múltiplo)
- **Margem efetiva**
- **Veredito**: ✅ saudável / ⚠️ no limite / ❌ subprecificado / 💰 margem alta
- **Riscos não-financeiros** (ART, responsabilidade civil, retrabalho)
- **Recomendação**: aceitar / renegociar (com novo valor sugerido) / recusar / reduzir escopo

## Exemplos de chamada

**Exemplo 1** — usuário envia PDF de orçamento:
> "@orcamento.pdf esse preço bate com o ERP?"

→ Ler PDF, perguntar horas de Kleber se não claro, calcular piso, dar veredito.

**Exemplo 2** — pedido direto:
> "Quanto cobrar por LTCAT físico+químico para 50 funcionários em Patos de Minas?"

→ Catálogo: 24h, piso R$ 13.318. Patos de Minas ≈ 110 km de Uberlândia → diária R$ 1.400 OU +R$ 96/km de deslocamento extra. Piso final ≈ R$ 14.700. Preço alvo R$ 17.640–22.050.

**Exemplo 3** — serviço pontual fora do catálogo:
> "Vistoria PAB Biometano, 3h de Kleber, ART de engenheiro, R$ 5.000"

→ 3h × R$ 400 = R$ 1.200. Risco ART explosivo +30% = +R$ 360. ART CREA R$ 300. Piso = R$ 1.860. Alvo R$ 2.230–2.790. Cobrado R$ 5.000 = 269% do piso, margem ~63%. **Veredito: 💰 margem alta, aceitar.**

## Erros a evitar

- ❌ Não usar piso de Consultoria NR12 cheia (22h) como benchmark para serviço pontual de 3h — superestima muito.
- ❌ Não esquecer ART CREA quando o serviço exige assinatura de engenheiro.
- ❌ Não esquecer deslocamento fora de Uberlândia (>30 km).
- ❌ Não recomendar abaixo do piso, NUNCA. Mesmo "para fechar o cliente". Regra fixa do ERP.
- ❌ Não dar resposta sem ter lido o ERP atual — premissas (estrutura mensal, capacidade) podem ter mudado.
- ❌ Não confundir "horas de Kleber" com "UEP do catálogo". UEP do catálogo já embute horas de equipe + estrutura. Se o input for horas reais técnicas do engenheiro, calcular pelo R$/h piso direto.

## Saída esperada

Resposta concisa, em tabelas, com veredito explícito e número recomendado se a proposta precisa ser refeita. Não enrolar — Octav decide rápido.
