const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();

// LinkedIn carousel dimensions: 1080x1350 = 4:5 ratio
// PPTX uses inches. 10 x 12.5 inches at 4:5
pptx.defineLayout({ name: 'CAROUSEL', width: 10, height: 12.5 });
pptx.layout = 'CAROUSEL';

// Colors
const C = {
  dark: '1D2B36',
  darkMid: '2C3E50',
  accent: 'E24B4A',
  accentDark: 'A32D2D',
  bg: 'FFFDF8',
  bgWarm: 'F7F2EA',
  text: '1D2B36',
  textSec: '5B6874',
  green: '3B6D11',
  greenBg: 'EAF3DE',
  amber: '854F0B',
  amberBg: 'FBF0DA',
  redBg: 'FCEBEB',
  border: 'E4DBCF',
  white: 'FFFFFF',
};

function addFooter(slide, num, total, customText) {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.67, y: 11.6, w: 8.66, h: 0.02, fill: { color: C.border }
  });
  slide.addText('HIGILABOR', {
    x: 0.67, y: 11.7, w: 3, h: 0.5,
    fontSize: 14, fontFace: 'Arial', color: C.border, bold: true,
    charSpacing: 3
  });
  slide.addText(customText || `${String(num).padStart(2,'0')} de ${String(total).padStart(2,'0')}`, {
    x: 6.33, y: 11.7, w: 3, h: 0.5,
    fontSize: 13, fontFace: 'Arial',
    color: customText ? C.accent : C.border,
    bold: !!customText,
    align: 'right'
  });
}

function addSlideNumber(slide, num, total) {
  slide.addText(`${String(num).padStart(2,'0')}/${String(total).padStart(2,'0')}`, {
    x: 7.8, y: 0.3, w: 1.5, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: C.border, bold: true, align: 'right'
  });
}

function addTag(slide, text, y) {
  slide.addText(text, {
    x: 0.67, y: y || 0.55, w: 4, h: 0.35,
    fontSize: 13, fontFace: 'Arial', color: C.accent, bold: true,
    charSpacing: 4
  });
}

function addStepBadge(slide, num, x, y) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 0.82, h: 0.82, rectRadius: 0.2,
    fill: { color: C.accent }
  });
  slide.addText(String(num), {
    x: x, y: y, w: 0.82, h: 0.82,
    fontSize: 30, fontFace: 'Arial', color: C.white, bold: true, align: 'center', valign: 'middle'
  });
}

function addTipBox(slide, text, y, bgColor, borderColor, textColor) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.67, y: y, w: 8.66, h: 0.9, rectRadius: 0.15,
    fill: { color: bgColor || C.greenBg },
    line: { color: borderColor || C.green, width: 0, dashType: 'solid' }
  });
  // Left border accent
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.67, y: y, w: 0.06, h: 0.9,
    fill: { color: borderColor || C.green }
  });
  slide.addText(text, {
    x: 0.95, y: y, w: 8.1, h: 0.9,
    fontSize: 16, fontFace: 'Arial', color: textColor || '2B5409',
    bold: true, valign: 'middle'
  });
}

// ═══════════════════════════════════════
// SLIDE 1 — CAPA
// ═══════════════════════════════════════
const s1 = pptx.addSlide();
s1.background = { fill: C.dark };

// Tag
s1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.67, y: 0.7, w: 2.5, h: 0.5, rectRadius: 0.08,
  fill: { color: C.accent }
});
s1.addText('CHECKLIST NR-1', {
  x: 0.67, y: 0.7, w: 2.5, h: 0.5,
  fontSize: 15, fontFace: 'Arial', color: C.white, bold: true, align: 'center',
  charSpacing: 2
});

// Big number
s1.addText([
  { text: '47', options: { fontSize: 120, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: ' dias', options: { fontSize: 44, fontFace: 'Arial', color: '99AABB', bold: true } }
], { x: 0.67, y: 1.6, w: 8.66, h: 2 });

// Title
s1.addText([
  { text: 'Sua empresa está pronta\npara a ', options: { fontSize: 44, fontFace: 'Arial', color: C.white, bold: true } },
  { text: 'nova NR-1', options: { fontSize: 44, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: '?', options: { fontSize: 44, fontFace: 'Arial', color: C.white, bold: true } }
], { x: 0.67, y: 3.8, w: 8.66, h: 2.5, lineSpacingMultiple: 1.1 });

// Subtitle
s1.addText('5 passos para incluir riscos psicossociais\nno PGR antes de 26 de maio.', {
  x: 0.67, y: 6.2, w: 8.66, h: 1.2,
  fontSize: 20, fontFace: 'Arial', color: '99AABB', lineSpacingMultiple: 1.4
});

// Bottom
s1.addText('HIGILABOR', {
  x: 0.67, y: 11.3, w: 3, h: 0.5,
  fontSize: 20, fontFace: 'Arial', color: '667788', bold: true, charSpacing: 3
});
s1.addText('Deslize para ver o checklist  →', {
  x: 5, y: 11.3, w: 4.33, h: 0.5,
  fontSize: 14, fontFace: 'Arial', color: '667788', align: 'right'
});

// ═══════════════════════════════════════
// SLIDE 2 — CONTEXTO
// ═══════════════════════════════════════
const s2 = pptx.addSlide();
s2.background = { fill: C.bg };
addSlideNumber(s2, 2, 8);
addTag(s2, 'O QUE MUDOU');

s2.addText([
  { text: 'O MTE confirmou:\n', options: { fontSize: 38, fontFace: 'Arial', color: C.text, bold: true } },
  { text: 'sem adiamento.', options: { fontSize: 38, fontFace: 'Arial', color: C.accent, bold: true } }
], { x: 0.67, y: 1.1, w: 8.66, h: 1.8, lineSpacingMultiple: 1.1 });

s2.addText('A partir de 26/mai/2026, o PGR precisa incluir riscos psicossociais. O Manual Oficial saiu em 07/04. Quem não se adequar, leva multa.', {
  x: 0.67, y: 3.0, w: 8.66, h: 1.0,
  fontSize: 19, fontFace: 'Arial', color: C.textSec, lineSpacingMultiple: 1.5
});

// Stat cards
const stats = [
  { val: '546 mil', label: 'afastamentos por saúde\nmental em 2025 (recorde)' },
  { val: 'R$ 44 mil', label: 'multa por infração\n(teto NR-28)' },
  { val: '83 mil', label: 'afastamentos em\nMinas Gerais (2º estado)' }
];
stats.forEach((s, i) => {
  const x = 0.67 + i * 3.05;
  const y = 4.5;
  s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.8, h: 1.8, rectRadius: 0.15, fill: { color: C.bgWarm }
  });
  s2.addText(s.val, {
    x: x, y: y + 0.2, w: 2.8, h: 0.6,
    fontSize: 30, fontFace: 'Arial', color: C.accentDark, bold: true, align: 'center'
  });
  s2.addText(s.label, {
    x: x, y: y + 0.85, w: 2.8, h: 0.8,
    fontSize: 13, fontFace: 'Arial', color: C.textSec, align: 'center', lineSpacingMultiple: 1.3
  });
});

// Alert
addTipBox(s2, 'O Ministro Marinho confirmou: a NR-1 entra em vigor em maio, sem novo adiamento.', 7.0, C.redBg, C.accent, C.accentDark);

addFooter(s2, 2, 8);

// ═══════════════════════════════════════
// SLIDE 3 — PASSO 1
// ═══════════════════════════════════════
const s3 = pptx.addSlide();
s3.background = { fill: C.bg };
addSlideNumber(s3, 3, 8);
addTag(s3, 'PASSO 1 DE 5');
addStepBadge(s3, 1, 0.67, 1.2);

s3.addText([
  { text: 'Levante os dados que você ', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } },
  { text: 'já tem', options: { fontSize: 34, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: '.', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } }
], { x: 1.7, y: 1.2, w: 7.63, h: 0.82, valign: 'middle' });

s3.addText('Antes de qualquer questionário, olhe o que sua empresa já registra:', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.6,
  fontSize: 20, fontFace: 'Arial', color: C.text, lineSpacingMultiple: 1.5
});

const items3 = [
  'Afastamentos por CID F (transtornos mentais)',
  'Absenteísmo e rotatividade',
  'Atas de CIPA e reclamações internas',
  'Reclamações trabalhistas (histórico)'
];
items3.forEach((item, i) => {
  const y = 3.5 + i * 0.55;
  s3.addShape(pptx.shapes.OVAL, {
    x: 0.95, y: y + 0.14, w: 0.12, h: 0.12, fill: { color: C.accent }
  });
  s3.addText(item, {
    x: 1.3, y: y, w: 8, h: 0.45,
    fontSize: 18, fontFace: 'Arial', color: C.text, valign: 'middle'
  });
});

addTipBox(s3, 'Não precisa começar do zero. O diagnóstico começa no que já existe.', 6.0);
addFooter(s3, 3, 8);

// ═══════════════════════════════════════
// SLIDE 4 — PASSO 2 (amber background)
// ═══════════════════════════════════════
const s4 = pptx.addSlide();
s4.background = { fill: C.amberBg };
addSlideNumber(s4, 4, 8);
addTag(s4, 'PASSO 2 DE 5');
addStepBadge(s4, 2, 0.67, 1.2);

s4.addText([
  { text: 'Aplique um questionário ', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } },
  { text: 'validado', options: { fontSize: 34, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: '.', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } }
], { x: 1.7, y: 1.2, w: 7.63, h: 0.82, valign: 'middle' });

s4.addText('Instrumentos que o fiscal aceita:', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.5,
  fontSize: 20, fontFace: 'Arial', color: C.text
});

const items4 = [
  { text: [{ text: 'COPSOQ III', options: { bold: true } }, { text: ' — versão reduzida já atende PMEs' }] },
  { text: [{ text: 'JCQ', options: { bold: true } }, { text: ' (Job Content Questionnaire)' }] }
];
items4.forEach((item, i) => {
  const y = 3.3 + i * 0.55;
  s4.addShape(pptx.shapes.OVAL, {
    x: 0.95, y: y + 0.14, w: 0.12, h: 0.12, fill: { color: C.accent }
  });
  s4.addText(item.text, {
    x: 1.3, y: y, w: 8, h: 0.45,
    fontSize: 18, fontFace: 'Arial', color: C.text, valign: 'middle'
  });
});

addTipBox(s4, 'Sem anonimato, ninguém reporta assédio. Use ferramenta online ou urna física.', 5.0, 'FFFFFF', 'EF9F27', C.amber);
addFooter(s4, 4, 8);

// ═══════════════════════════════════════
// SLIDE 5 — PASSO 3
// ═══════════════════════════════════════
const s5 = pptx.addSlide();
s5.background = { fill: C.bg };
addSlideNumber(s5, 5, 8);
addTag(s5, 'PASSO 3 DE 5');
addStepBadge(s5, 3, 0.67, 1.2);

s5.addText([
  { text: 'Monte inventário + plano de ação ', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } },
  { text: 'no PGR', options: { fontSize: 34, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: '.', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } }
], { x: 1.7, y: 1.2, w: 7.63, h: 0.82, valign: 'middle' });

s5.addText('Para cada risco, documentar:', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.5,
  fontSize: 20, fontFace: 'Arial', color: C.text
});

['Gravidade', 'Ação prevista', 'Responsável', 'Prazo'].forEach((item, i) => {
  const y = 3.3 + i * 0.55;
  s5.addShape(pptx.shapes.OVAL, {
    x: 0.95, y: y + 0.14, w: 0.12, h: 0.12, fill: { color: C.accent }
  });
  s5.addText(item, {
    x: 1.3, y: y, w: 8, h: 0.45,
    fontSize: 18, fontFace: 'Arial', color: C.text, bold: true, valign: 'middle'
  });
});

addTipBox(s5, 'Entra no PGR que já existe — não é documento separado.', 6.0);
addFooter(s5, 5, 8);

// ═══════════════════════════════════════
// SLIDE 6 — PASSO 4
// ═══════════════════════════════════════
const s6 = pptx.addSlide();
s6.background = { fill: C.bg };
addSlideNumber(s6, 6, 8);
addTag(s6, 'PASSO 4 DE 5');
addStepBadge(s6, 4, 0.67, 1.2);

s6.addText([
  { text: 'Integre com o ', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } },
  { text: 'PCMSO', options: { fontSize: 34, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: '.', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } }
], { x: 1.7, y: 1.2, w: 7.63, h: 0.82, valign: 'middle' });

s6.addText('O médico do trabalho precisa conhecer os riscos psicossociais identificados para ajustar exames e condutas.', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.8,
  fontSize: 20, fontFace: 'Arial', color: C.text, lineSpacingMultiple: 1.5
});

addTipBox(s6, 'PGR e PCMSO conversam — não podem ser gavetas separadas.', 4.0);
addFooter(s6, 6, 8);

// ═══════════════════════════════════════
// SLIDE 7 — PASSO 5 (red background)
// ═══════════════════════════════════════
const s7 = pptx.addSlide();
s7.background = { fill: C.redBg };
addSlideNumber(s7, 7, 8);
addTag(s7, 'PASSO 5 DE 5');
addStepBadge(s7, 5, 0.67, 1.2);

s7.addText([
  { text: 'Treine a ', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } },
  { text: 'liderança', options: { fontSize: 34, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: '.', options: { fontSize: 34, fontFace: 'Arial', color: C.text, bold: true } }
], { x: 1.7, y: 1.2, w: 7.63, h: 0.82, valign: 'middle' });

s7.addText('Risco psicossocial sem mudança de comportamento dos gestores não se resolve no papel. Líderes precisam identificar sinais e agir antes do afastamento.', {
  x: 0.67, y: 2.5, w: 8.66, h: 1.0,
  fontSize: 20, fontFace: 'Arial', color: C.text, lineSpacingMultiple: 1.5
});

// FAQ callout
addTipBox(s7, 'Empresa pequena precisa cumprir? Sim. A NR-1 vale para qualquer empresa com CLT.', 4.5, 'FFFFFF', 'EF9F27', C.amber);

// Save nudge footer
addFooter(s7, 7, 8, 'Salve este checklist');

// ═══════════════════════════════════════
// SLIDE 8 — CTA
// ═══════════════════════════════════════
const s8 = pptx.addSlide();
s8.background = { fill: C.dark };

s8.addText([
  { text: '47', options: { fontSize: 90, fontFace: 'Arial', color: C.accent, bold: true } },
  { text: ' dias', options: { fontSize: 34, fontFace: 'Arial', color: '99AABB', bold: true } }
], { x: 0, y: 3.0, w: 10, h: 1.8, align: 'center' });

s8.addText([
  { text: 'passam rápido.\n', options: { fontSize: 38, fontFace: 'Arial', color: C.white, bold: true } },
  { text: 'Comece agora.', options: { fontSize: 38, fontFace: 'Arial', color: C.accent, bold: true } }
], { x: 0, y: 4.8, w: 10, h: 1.6, align: 'center', lineSpacingMultiple: 1.15 });

s8.addText([
  { text: 'O ', options: { color: '99AABB' } },
  { text: 'Pacote NR-1 Psicossocial', options: { color: C.white, bold: true } },
  { text: ' da Higilabor entrega: levantamento com instrumento validado, inventário integrado ao PGR e plano de ação completo.', options: { color: '99AABB' } }
], { x: 1, y: 6.5, w: 8, h: 1.2, fontSize: 18, fontFace: 'Arial', align: 'center', lineSpacingMultiple: 1.5 });

// Button
s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 2.8, y: 8.0, w: 4.4, h: 0.85, rectRadius: 0.15,
  fill: { color: C.accent }
});
s8.addText('Falar com a Higilabor', {
  x: 2.8, y: 8.0, w: 4.4, h: 0.85,
  fontSize: 20, fontFace: 'Arial', color: C.white, bold: true, align: 'center', valign: 'middle'
});

s8.addText('higilabor.com.br — 15 minutos resolvem a dúvida.', {
  x: 0, y: 9.2, w: 10, h: 0.4,
  fontSize: 15, fontFace: 'Arial', color: '556677', align: 'center'
});

s8.addText('Ou salve este post e compartilhe com seu RH.', {
  x: 0, y: 9.8, w: 10, h: 0.4,
  fontSize: 14, fontFace: 'Arial', color: '778899', align: 'center'
});

s8.addText('HIGILABOR', {
  x: 0, y: 11.3, w: 10, h: 0.5,
  fontSize: 22, fontFace: 'Arial', color: '445566', bold: true, align: 'center',
  charSpacing: 3
});

// Export
pptx.writeFile({ fileName: 'alavanca/carrossel-nr1-checklist-47dias.pptx' })
  .then(() => console.log('PPTX saved: alavanca/carrossel-nr1-checklist-47dias.pptx'))
  .catch(err => console.error(err));
