# SEO Higilabor — Snippets Prontos para Colar

## Meta Tags — Todas as páginas (corrigidas)

### Homepage (/)
```html
<title>Higilabor | Segurança do Trabalho em Uberlândia e Região</title>
<meta name="description" content="Consultoria SST em Uberlândia: PGR, PCMSO, LTCAT, NR-1 psicossocial e redução de FAP. Médica do trabalho própria com atendimento por telemedicina. Solicite diagnóstico gratuito.">
```

### /pcmso/ ou /pcmso-uberlandia/
```html
<title>PCMSO em Uberlândia | Higilabor — Médica do Trabalho Própria</title>
<meta name="description" content="PCMSO completo em Uberlândia com médica do trabalho credenciada. Atendemos presencialmente e por telemedicina toda a região do Triângulo Mineiro. Orçamento em 24h.">
```

### /pgr/ ou /pgr-uberlandia/
```html
<title>PGR em Uberlândia | Programa de Gerenciamento de Riscos — Higilabor</title>
<meta name="description" content="Elaboração e atualização de PGR conforme eSocial e NR-1. Atendemos empresas de 1 a 100 funcionários em Uberlândia e Triângulo Mineiro. Diagnóstico gratuito.">
```

### /nr-1-psicossocial/ (CRIAR — urgente)
```html
<title>NR-1 Psicossocial 2026 | Adequação Obrigatória até 26/05 — Higilabor</title>
<meta name="description" content="A NR-1 psicossocial é obrigatória a partir de 26/05/2026. Sua empresa precisa incluir riscos psicossociais no PGR ou estará sujeita a multas. A Higilabor faz a adequação completa.">
```

### /pcmso-telemedicina/ (CRIAR)
```html
<title>PCMSO por Telemedicina | Válido em Todo o Brasil — Higilabor</title>
<meta name="description" content="Sem médico do trabalho na sua cidade? A Higilabor oferece PCMSO coordenado por telemedicina com total validade legal (NR-7 + Res. CFM 2.314/2022). Atendemos todo o Triângulo Mineiro.">
```

### /fap-reducao/ (CRIAR)
```html
<title>Redução de FAP | Economize no INSS com SST Eficiente — Higilabor</title>
<meta name="description" content="FAP alto significa pagar até 2× mais de RAT/INSS. A Higilabor implementa programas SST que reduzem seu FAP e geram economia real. Análise gratuita do seu FAP atual.">
```

### /ltcat/
```html
<title>LTCAT em Uberlândia | Laudo Técnico das Condições Ambientais — Higilabor</title>
<meta name="description" content="Elaboração de LTCAT por engenheiro de segurança do trabalho em Uberlândia. Documentação completa para eSocial, aposentadoria especial e perícias trabalhistas.">
```

---

## JSON-LD — Colar no <head> de TODAS as páginas

### Schema LocalBusiness (homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://higilabor.com.br/#business",
  "name": "Higilabor Consultoria SST",
  "description": "Consultoria em Saúde e Segurança do Trabalho em Uberlândia/MG. PGR, PCMSO, LTCAT, NR-1 psicossocial, redução de FAP.",
  "url": "https://higilabor.com.br",
  "telephone": "+55-34-XXXX-XXXX",
  "email": "contato@higilabor.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Endereço completo]",
    "addressLocality": "Uberlândia",
    "addressRegion": "MG",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -18.9186,
    "longitude": -48.2772
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "areaServed": [
    {"@type": "City", "name": "Uberlândia"},
    {"@type": "State", "name": "Minas Gerais"},
    {"@type": "AdministrativeArea", "name": "Triângulo Mineiro"}
  ],
  "serviceType": [
    "PGR - Programa de Gerenciamento de Riscos",
    "PCMSO - Programa de Controle Médico de Saúde Ocupacional",
    "LTCAT - Laudo Técnico das Condições Ambientais do Trabalho",
    "NR-1 Psicossocial",
    "Redução de FAP",
    "Treinamentos NR",
    "Perícias Trabalhistas"
  ],
  "sameAs": [
    "https://www.instagram.com/higilabor",
    "https://www.linkedin.com/company/higilabor"
  ]
}
```

### Schema FAQ — Página NR-1 Psicossocial
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que muda na NR-1 em 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A partir de 26/05/2026, o PGR de todas as empresas deve incluir a avaliação e gerenciamento de riscos psicossociais, como estresse ocupacional, assédio moral, sobrecarga de trabalho e clima organizacional. Empresas não adequadas ficam sujeitas a multas a partir de R$ 6.674."
      }
    },
    {
      "@type": "Question",
      "name": "Quais empresas precisam se adequar à NR-1 psicossocial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Todas as empresas que possuem empregados com carteira assinada são obrigadas a ter PGR e, portanto, a incluir os riscos psicossociais. Não há isenção por porte — MEI com funcionários e grandes empresas estão igualmente sujeitos."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custa a adequação à NR-1 psicossocial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O custo varia conforme o número de funcionários e a complexidade da operação. Para empresas de até 30 funcionários, a Higilabor oferece pacotes a partir de R$ 890. Solicite um diagnóstico gratuito."
      }
    },
    {
      "@type": "Question",
      "name": "A Higilabor atende minha cidade fora de Uberlândia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Atendemos presencialmente toda a região do Triângulo Mineiro e por telemedicina qualquer cidade do Brasil. Nossa médica do trabalho coordena PCMSO remotamente com validade legal conforme NR-7 e Resolução CFM 2.314/2022."
      }
    }
  ]
}
```

### Schema Service — Página PCMSO
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "PCMSO — Programa de Controle Médico de Saúde Ocupacional",
  "description": "Elaboração e gestão do PCMSO conforme NR-7 e eSocial. Inclui exames admissionais, periódicos, demissionais, retorno ao trabalho e mudança de função. Médica do trabalho própria.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Higilabor Consultoria SST",
    "url": "https://higilabor.com.br"
  },
  "areaServed": {
    "@type": "State",
    "name": "Minas Gerais"
  },
  "serviceType": "Saúde Ocupacional",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Presencial e Telemedicina"
  }
}
```

---

## Páginas prioritárias a criar (ordem de urgência)

1. `/nr-1-psicossocial-2026/` — H1 "NR-1 Psicossocial: sua empresa tem X dias para se adequar"
   - Countdown até 26/05/2026
   - Bloco "O que sua empresa precisa fazer"
   - CTA: "Quero diagnóstico gratuito"

2. `/pcmso-telemedicina/` — H1 "PCMSO por telemedicina com validade legal"
   - Seção legal (NR-7 + Res. CFM 2.314/2022)
   - Mapa das cidades atendidas no Triângulo
   - FAQ com schema

3. `/fap/` — H1 "Reduza seu FAP e economize no INSS"
   - Calculadora simples (número funcionários × alíquota RAT)
   - CTA

## Redirect a implementar
```
301: /home/ → /
```

## Google Business Profile
- Adicionar categoria: "Saúde e Segurança do Trabalho"
- Publicar posts semanais sobre NR-1, FAP, PCMSO
- Responder todas as avaliações
- Adicionar fotos do escritório e equipe
