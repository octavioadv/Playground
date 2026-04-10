const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, ExternalHyperlink, TabStopType, TabStopPosition
} = require("docx");

const OUTPUT_DIR = __dirname;

// Color palette
const DARK = "1A1A1A";
const ACCENT = "2B579A";
const GRAY = "555555";
const LIGHT_GRAY = "888888";
const LINE_COLOR = "2B579A";

// Reusable helpers
function heading1(text) {
  return new Paragraph({
    spacing: { before: 320, after: 100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE_COLOR, space: 4 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 22, font: "Arial", color: ACCENT })]
  });
}

function heading2(company, location) {
  return new Paragraph({
    spacing: { before: 240, after: 40 },
    children: [
      new TextRun({ text: company, bold: true, size: 21, font: "Arial", color: DARK }),
      new TextRun({ text: ` \u2014 ${location}`, size: 21, font: "Arial", color: GRAY }),
    ]
  });
}

function roleDate(role, date) {
  return new Paragraph({
    spacing: { after: 60 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: role, italics: true, size: 20, font: "Arial", color: DARK }),
      new TextRun({ text: `\t${date}`, italics: true, size: 20, font: "Arial", color: LIGHT_GRAY }),
    ]
  });
}

function bulletItem(boldPart, normalPart, numbering) {
  const children = [];
  if (boldPart) {
    children.push(new TextRun({ text: boldPart, bold: true, size: 20, font: "Arial", color: DARK }));
  }
  if (normalPart) {
    children.push(new TextRun({ text: normalPart, size: 20, font: "Arial", color: DARK }));
  }
  return new Paragraph({
    numbering: { reference: numbering, level: 0 },
    spacing: { after: 40 },
    children,
  });
}

function parseBullet(line) {
  // "- **Bold part:** normal part" or "- **Bold part** normal part" or "- normal"
  const m = line.replace(/^-\s*/, "");
  const match = m.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
  if (match) return { bold: match[1] + (m.includes(":**") || m.includes(":*") ? ": " : " "), normal: match[2] };
  return { bold: null, normal: m.replace(/\*\*/g, "") };
}

function emptyLine() {
  return new Paragraph({ spacing: { before: 0, after: 0 }, children: [] });
}

function buildCV(data) {
  const bulletRef = "cv-bullets-" + Math.random().toString(36).slice(2, 8);

  const children = [];

  // Name
  children.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 40 },
    children: [new TextRun({ text: data.name, bold: true, size: 32, font: "Arial", color: DARK })]
  }));

  // Subtitle
  children.push(new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({ text: data.subtitle, size: 22, font: "Arial", color: ACCENT })]
  }));

  // Location line
  children.push(new Paragraph({
    spacing: { after: 20 },
    children: [new TextRun({ text: data.location, size: 19, font: "Arial", color: GRAY })]
  }));

  // Contact line
  children.push(new Paragraph({
    spacing: { after: 20 },
    children: [new TextRun({ text: data.contact, size: 19, font: "Arial", color: GRAY })]
  }));

  // LinkedIn / OAB
  children.push(new Paragraph({
    spacing: { after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: LINE_COLOR, space: 6 } },
    children: [new TextRun({ text: data.links, size: 19, font: "Arial", color: GRAY })]
  }));

  // RESUMO
  children.push(heading1("Resumo Profissional"));
  children.push(new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text: data.resumo, size: 20, font: "Arial", color: DARK })]
  }));

  // EXPERIENCIA
  children.push(heading1("Experiencia Profissional"));
  for (const exp of data.experiencia) {
    children.push(heading2(exp.company, exp.location));
    children.push(roleDate(exp.role, exp.date));
    for (const b of exp.bullets) {
      const p = parseBullet(b);
      children.push(bulletItem(p.bold, p.normal, bulletRef));
    }
  }

  // FORMACAO ACADEMICA
  children.push(heading1("Formacao Academica"));
  for (const f of data.formacao) {
    const p = parseBullet(f);
    children.push(bulletItem(p.bold, p.normal, bulletRef));
  }

  // FORMACAO COMPLEMENTAR
  children.push(heading1("Formacao Complementar"));
  for (const f of data.complementar) {
    const p = parseBullet(f);
    children.push(bulletItem(p.bold, p.normal, bulletRef));
  }

  // COMPETENCIAS
  children.push(heading1("Competencias"));
  for (const c of data.competencias) {
    const p = parseBullet(c);
    children.push(bulletItem(p.bold, p.normal, bulletRef));
  }

  return new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 20 } } },
    },
    numbering: {
      config: [{
        reference: bulletRef,
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 420, hanging: 260 } } }
        }]
      }]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1080, right: 1200, bottom: 1080, left: 1200 }
        }
      },
      children,
    }]
  });
}

// ===================== CV DATA =====================

const cv06 = {
  name: "Octavio Queiroz de Alvarenga",
  subtitle: "Advogado Junior | Contencioso Tributario com Vivencia Internacional",
  location: "Belo Horizonte, MG \u2014 Disponibilidade imediata para mudanca a Sao Paulo/SP",
  contact: "octavio@alvarengaempresarial.com | +55 34 99689-3368",
  links: "LinkedIn: Octavio Alvarenga | OAB/MG 245.226 (ativa)",
  resumo: "Advogado junior com OAB ativa, formado pela UFU, com perfil organizado, assertivo e comunicativo. Experiencia em contencioso estrategico desde a graduacao (LBCA/GF&B), somada a vivencia consultiva em tributacao internacional, estruturas societarias e atendimento a clientes nao residentes. Ingles avancado para analise documental, contratos e atendimento a clientes internacionais \u2014 perfil naturalmente alinhado a um escritorio full service com cooperacao global (CMS).",
  experiencia: [
    {
      company: "AKTIVAR PARTICIPACOES", location: "Belo Horizonte/MG",
      role: "Diretor Juridico", date: "Dezembro 2025 \u2013 Presente",
      bullets: [
        "- **Estrategia tributaria** consultiva, mitigacao de riscos e viabilizacao de operacoes societarias.",
        "- **Gestao de carteira** de processos e contratos da holding, atendimento direto a stakeholders.",
        "- Elaboracao e revisao de relatorios e pareceres tributarios."
      ]
    },
    {
      company: "REIMER ADVOGADOS", location: "Home Office",
      role: "Advogado", date: "Julho 2023 \u2013 Setembro 2025",
      bullets: [
        "- **Atendimento a clientes internacionais** em estruturas BVI, Delaware, Dubai, Europa.",
        "- **Tributacao Internacional:** analise de regimes de PF/PJ nao residentes.",
        "- **Banking & Compliance:** KYC/AML, onboarding internacional.",
        "- **Contratos bicolunados PT/EN** com matriz de riscos e clausulas LGPD.",
        "- Pareceres e opinioes legais em ingles para clientes nao residentes."
      ]
    },
    {
      company: "LBCA / GF&B ADVOGADOS", location: "Sao Paulo/SP (Remoto)",
      role: "Estagiario de Contencioso Estrategico", date: "Janeiro 2023 \u2013 Junho 2023",
      bullets: [
        "- **Elaboracao de pecas** de diferentes complexidades sob supervisao.",
        "- **Teses de defesa patrimonial** (Desconsideracao da Personalidade Juridica).",
        "- **Pesquisa juridica avancada** para fundamentacao de estrategias em tribunais superiores.",
        "- Vivencia direta com a rotina contenciosa de escritorio paulista de grande porte."
      ]
    }
  ],
  formacao: [
    "- **Graduacao em Direito** \u2014 Universidade Federal de Uberlandia (UFU) | Concluido em 12/2024",
    "- **Pos-graduacao em Direito Empresarial** \u2014 Prof. Andre Santa Cruz | Em andamento"
  ],
  complementar: [
    "- **Direito Internacional Privado (Adler Martins):** Tributacao Internacional, Offshores.",
    "- **EFAE:** Mercado de Capitais, LGPD, Societario Avancado.",
    "- **CNE:** Contratos da Nova Economia, M&A."
  ],
  competencias: [
    "- **Contencioso Tributario:** elaboracao de pecas, gestao de carteira de processos, atendimento ao cliente.",
    "- **Tributacao Internacional:** analise de regimes, estruturas em multiplas jurisdicoes.",
    "- **Idiomas \u2014 Ingles avancado:** verbal e escrito (contratos, pareceres, atendimento a clientes nao residentes).",
    "- **Softwares juridicos:** PJe, e-SAJ, Projudi.",
    "- **Tecnologia:** IA aplicada a pesquisa juridica e automacao contratual.",
    "- **Soft skills:** organizacao, assertividade, comunicacao interpessoal, foco em prazos."
  ]
};

const cv07 = {
  name: "Octavio Queiroz de Alvarenga",
  subtitle: "Advogado Junior | Contencioso Tributario Judicial e Administrativo",
  location: "Belo Horizonte, MG \u2014 Disponibilidade imediata para mudanca a Sao Paulo/SP (regime hibrido)",
  contact: "octavio@alvarengaempresarial.com | +55 34 99689-3368",
  links: "LinkedIn: Octavio Alvarenga | OAB/MG 245.226 (ativa)",
  resumo: "Advogado formado em 12/2024 (aprox. 1,5 ano de formacao), com estagio previo na area contenciosa (LBCA/GF&B Sao Paulo) e atuacao consultiva em tributario pos-OAB. Perfil organizado, proativo e pontual, com bom conhecimento tecnico em contencioso tributario judicial e administrativo. Dominio dos principais sistemas de processos eletronicos (PJe, e-SAJ, Projudi) e conhecimento basico em contabilidade aplicado a rotina de holding (Aktivar).",
  experiencia: [
    {
      company: "AKTIVAR PARTICIPACOES", location: "Belo Horizonte/MG",
      role: "Diretor Juridico", date: "Dezembro 2025 \u2013 Presente",
      bullets: [
        "- **Tributario consultivo:** analise de riscos e otimizacao tributaria da holding.",
        "- **Contato com rotina contabil-tributaria:** acompanhamento de obrigacoes acessorias e operacoes societarias.",
        "- Coordenacao do ciclo de vida de contratos complexos e compliance estrategico."
      ]
    },
    {
      company: "REIMER ADVOGADOS", location: "Home Office",
      role: "Advogado", date: "Julho 2023 \u2013 Setembro 2025",
      bullets: [
        "- **Pareceres e consultas tributarias** para PF, PJ e estruturas internacionais.",
        "- Estruturacao de holdings, Trusts, LLCs e PICs.",
        "- Banking & Compliance: KYC/AML, onboarding internacional.",
        "- Contratos bicolunados (PT/EN) com clausulas LGPD."
      ]
    },
    {
      company: "LBCA / GF&B ADVOGADOS", location: "Sao Paulo/SP (Remoto)",
      role: "Estagiario de Contencioso Estrategico", date: "Janeiro 2023 \u2013 Junho 2023",
      bullets: [
        "- **Estagio na area contenciosa** de escritorio paulista de grande porte.",
        "- **Elaboracao de pecas complexas** e teses de defesa patrimonial (Desconsideracao da Personalidade Juridica).",
        "- **Pesquisa juridica avancada** para fundamentacao de estrategias em tribunais superiores.",
        "- **Peticionamento eletronico** em sistemas processuais brasileiros."
      ]
    }
  ],
  formacao: [
    "- **Graduacao em Direito** \u2014 Universidade Federal de Uberlandia (UFU) | Concluido em 12/2024",
    "- **Pos-graduacao em Direito Empresarial** \u2014 Prof. Andre Santa Cruz | Em andamento"
  ],
  complementar: [
    "- **Direito Internacional Privado (Adler Martins):** Tributacao Internacional.",
    "- **EFAE:** Mercado de Capitais, LGPD, Societario Avancado.",
    "- **CNE:** Contratos da Nova Economia, M&A."
  ],
  competencias: [
    "- **Contencioso Tributario:** judicial e administrativo, elaboracao de pecas, peticionamento eletronico.",
    "- **Sistemas processuais:** PJe, e-SAJ, Projudi, EPROC.",
    "- **Office:** Word, Excel, PowerPoint (uso avancado).",
    "- **Conhecimento contabil basico** aplicado a tributario (diferencial conforme JD).",
    "- **Tecnologia:** IA aplicada a pesquisa juridica e automacao contratual.",
    "- **Idiomas:** Ingles avancado.",
    "- **Soft skills:** organizacao, qualidade, pontualidade, proatividade."
  ]
};

const cv08 = {
  name: "Octavio Queiroz de Alvarenga",
  subtitle: "Advogado Junior | Tributario Consultivo e Contencioso",
  location: "Belo Horizonte, MG (residente \u2014 disponibilidade imediata para rotina presencial)",
  contact: "octavio@alvarengaempresarial.com | +55 34 99689-3368",
  links: "LinkedIn: Octavio Alvarenga | OAB/MG 245.226 (ativa)",
  resumo: "Advogado mineiro com OAB/MG ativa, formado pela UFU, com pos-graduacao em Direito Empresarial em andamento. Atuacao que mescla consultivo e contencioso tributario, com vivencia em pareceres, defesas administrativas, acompanhamento de processos e suporte a operacoes societarias e M&A. Perfil proativo, com boa escrita tecnica e capacidade de exposicao de ideias. Disponibilidade para inicio imediato em rotina presencial em Belo Horizonte.",
  experiencia: [
    {
      company: "AKTIVAR PARTICIPACOES", location: "Belo Horizonte/MG",
      role: "Diretor Juridico", date: "Dezembro 2025 \u2013 Presente",
      bullets: [
        "- **Tributario consultivo:** analise de riscos e otimizacao tributaria; suporte a operacoes societarias e reestruturacoes.",
        "- **Pareceres juridicos** sobre questoes tributarias e societarias da rotina da holding.",
        "- **Acompanhamento de fiscalizacoes** e gestao de passivos tributarios.",
        "- Coordenacao do ciclo de vida de contratos complexos."
      ]
    },
    {
      company: "REIMER ADVOGADOS", location: "Home Office",
      role: "Advogado", date: "Julho 2023 \u2013 Setembro 2025",
      bullets: [
        "- **Pareceres, notas tecnicas e legal opinions** em direito tributario (PF, PJ e estruturas internacionais).",
        "- Estruturacao de holdings, LLCs (Delaware), Trusts e PICs em multiplas jurisdicoes.",
        "- Analise tributaria aplicada a reorganizacoes societarias.",
        "- Compliance documental, KYC/AML e onboarding internacional."
      ]
    },
    {
      company: "LBCA / GF&B ADVOGADOS", location: "Sao Paulo/SP (Remoto)",
      role: "Estagiario de Contencioso Estrategico", date: "Janeiro 2023 \u2013 Junho 2023",
      bullets: [
        "- **Elaboracao de pecas processuais** e recursos.",
        "- **Teses de defesa patrimonial** (Desconsideracao da Personalidade Juridica).",
        "- **Pesquisa juridica avancada** para fundamentacao em tribunais superiores."
      ]
    }
  ],
  formacao: [
    "- **Graduacao em Direito** \u2014 Universidade Federal de Uberlandia (UFU) | Concluido em 12/2024",
    "- **Pos-graduacao em Direito Empresarial** \u2014 Prof. Andre Santa Cruz | Em andamento (diferencial conforme JD)"
  ],
  complementar: [
    "- **Direito Internacional Privado (Adler Martins):** Tributacao Internacional.",
    "- **EFAE:** Mercado de Capitais, LGPD, Societario Avancado.",
    "- **CNE:** Contratos da Nova Economia, M&A."
  ],
  competencias: [
    "- **Tributario Consultivo:** pareceres, notas tecnicas, legal opinions, analise de obrigacoes acessorias.",
    "- **Contencioso Tributario:** defesas administrativas, pecas e recursos; suporte a acoes judiciais (mandados de seguranca, acoes anulatorias, embargos a execucao fiscal).",
    "- **Operacoes Societarias:** suporte tributario a M&A e reestruturacoes.",
    "- **Softwares juridicos:** PJe, e-SAJ, Projudi.",
    "- **Tecnologia:** IA aplicada a pesquisa juridica e automacao.",
    "- **Idiomas:** Ingles avancado.",
    "- **Soft skills:** organizacao, boa comunicacao, proatividade, raciocinio juridico, escrita tecnica."
  ]
};

async function main() {
  const cvs = [
    { data: cv06, file: "2026-04-08_06_fas-advogados_sao-paulo_sp.docx" },
    { data: cv07, file: "2026-04-08_07_empregga_sao-paulo_sp.docx" },
    { data: cv08, file: "2026-04-08_08_andrade-rodrigues_belo-horizonte_mg.docx" },
  ];

  for (const cv of cvs) {
    const doc = buildCV(cv.data);
    const buffer = await Packer.toBuffer(doc);
    const outPath = path.join(OUTPUT_DIR, cv.file);
    fs.writeFileSync(outPath, buffer);
    console.log("Created: " + outPath);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
