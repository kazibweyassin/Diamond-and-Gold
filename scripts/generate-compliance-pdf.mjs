import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { jsPDF } from 'jspdf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const inputPath = path.join(root, 'public', 'compliance-pack.md');
const outputPath = path.join(root, 'public', 'compliance-pack.pdf');

const md = fs.readFileSync(inputPath, 'utf8');

const doc = new jsPDF({ unit: 'pt', format: 'a4' });
const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const marginX = 44;
const marginY = 52;
const maxWidth = pageWidth - marginX * 2;

let y = marginY;

const BRAND = {
  navy: [10, 22, 40],
  gold: [184, 146, 42],
  ink: [24, 24, 24],
  muted: [98, 108, 120],
  line: [210, 214, 219],
  soft: [245, 246, 248],
};

const tocEntries = [];

function currentPageNumber() {
  return doc.getCurrentPageInfo?.().pageNumber ?? doc.getNumberOfPages();
}

function isNumberedSectionHeading(text) {
  // Accept headings like "1. Executive Summary" or "10. Certifications"
  return /^\d+\.\s+/.test(text.trim());
}

function getHeadingNumber(text) {
  const match = text.trim().match(/^(\d+)\.\s+/);
  return match ? Number(match[1]) : null;
}

function getSortedUniqueTocEntries(entries) {
  const byKey = new Map();

  for (const entry of entries) {
    const n = getHeadingNumber(entry.title);
    const key = n !== null ? `n:${n}` : `t:${entry.title.toLowerCase()}`;
    const existing = byKey.get(key);

    if (!existing) {
      byKey.set(key, entry);
      continue;
    }

    // Keep the earliest page occurrence for deterministic TOC links
    if (entry.page < existing.page) {
      byKey.set(key, entry);
    }
  }

  return [...byKey.values()].sort((a, b) => {
    const na = getHeadingNumber(a.title);
    const nb = getHeadingNumber(b.title);

    if (na !== null && nb !== null && na !== nb) return na - nb;
    if (na !== null && nb === null) return -1;
    if (na === null && nb !== null) return 1;
    if (a.page !== b.page) return a.page - b.page;
    return a.title.localeCompare(b.title);
  });
}

function textHeightFor(text, size = 11, width = maxWidth) {
  doc.setFontSize(size);
  const wrapped = doc.splitTextToSize(text, width);
  const lineHeight = Math.max(13.5, size * 1.32);
  return { wrapped, lineHeight, height: wrapped.length * lineHeight };
}

function ensureSpace(heightNeeded = 16) {
  if (y + heightNeeded > pageHeight - marginY) {
    doc.addPage();
    y = marginY;
  }
}

function writeLine(text, options = {}) {
  const {
    size = 11,
    style = 'normal',
    color = BRAND.ink,
    gapAfter = 8,
    indent = 0,
  } = options;

  doc.setFont('helvetica', style);
  doc.setFontSize(size);
  doc.setTextColor(...color);

  const { wrapped, lineHeight, height } = textHeightFor(text, size, maxWidth - indent);

  ensureSpace(height + gapAfter);

  wrapped.forEach((line) => {
    doc.text(line, marginX + indent, y);
    y += lineHeight;
  });

  y += gapAfter;
}

function writeRule() {
  ensureSpace(14);
  doc.setDrawColor(...BRAND.line);
  doc.setLineWidth(0.6);
  doc.line(marginX, y, pageWidth - marginX, y);
  y += 12;
}

function stripMdInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1');
}

function writeCoverPage() {
  doc.setFillColor(...BRAND.navy);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  doc.setFillColor(...BRAND.gold);
  doc.rect(0, 0, pageWidth, 10, 'F');

  // Try to place logo if available
  const logoCandidates = [
    path.join(root, 'public', 'Logo.png'),
    path.join(root, 'public', 'Logo.jpg'),
    path.join(root, 'public', 'logo.png'),
    path.join(root, 'public', 'logo.jpg'),
  ];

  for (const logoPath of logoCandidates) {
    if (!fs.existsSync(logoPath)) continue;
    const ext = path.extname(logoPath).toLowerCase();
    const format = ext === '.jpg' || ext === '.jpeg' ? 'JPEG' : 'PNG';
    const mime = format === 'JPEG' ? 'image/jpeg' : 'image/png';
    const data = fs.readFileSync(logoPath).toString('base64');
    const dataUrl = `data:${mime};base64,${data}`;

    try {
      doc.addImage(dataUrl, format, marginX, 52, 128, 50, undefined, 'FAST');
      break;
    } catch {
      // continue trying next candidate
    }
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(34);
  doc.text('Diamond Capital Africa', marginX, 188);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...BRAND.gold);
  doc.setFontSize(24);
  doc.text('Compliance Pack', marginX, 228);

  doc.setDrawColor(...BRAND.gold);
  doc.setLineWidth(1.2);
  doc.line(marginX, 246, pageWidth - marginX, 246);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(214, 218, 226);
  doc.setFontSize(12);
  doc.text('Version 1.1', marginX, 282);
  doc.text('May 2026', marginX, 302);
  doc.text('Prepared for verified buyers and partners', marginX, 322);
  doc.text('compliance@diamondcapitalafrica.com  |  +256 704 833 021', marginX, 342);

  doc.setFontSize(10);
  doc.setTextColor(170, 178, 194);
  doc.text('Confidential – shared for due diligence and transaction readiness.', marginX, pageHeight - 68);

  // Reserve page 2 for clickable TOC, then continue content on page 3
  doc.addPage();
  doc.addPage();
  y = marginY;
}

function writeClickableTocPage() {
  doc.setPage(2);

  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  doc.setTextColor(...BRAND.navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.text('Table of Contents', marginX, marginY + 8);

  doc.setDrawColor(...BRAND.line);
  doc.setLineWidth(0.8);
  doc.line(marginX, marginY + 20, pageWidth - marginX, marginY + 20);

  let tocY = marginY + 44;
  const lineH = 18;

  const finalTocEntries = getSortedUniqueTocEntries(tocEntries);

  finalTocEntries.forEach((entry) => {
    if (tocY > pageHeight - marginY - 28) return;

    const title = entry.title;
    const pageText = `${entry.page}`;
    const pageTextWidth = doc.getTextWidth(pageText);
    const rightX = pageWidth - marginX;
    const dotEndX = rightX - pageTextWidth - 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(...BRAND.ink);
    doc.text(title, marginX, tocY);

    const titleW = Math.min(doc.getTextWidth(title), dotEndX - marginX - 20);
    doc.setTextColor(...BRAND.muted);
    const dotStart = marginX + titleW + 8;
    if (dotStart < dotEndX - 4) {
      doc.text('.'.repeat(Math.floor((dotEndX - dotStart) / 4.2)), dotStart, tocY);
    }

    doc.setTextColor(...BRAND.navy);
    doc.setFont('helvetica', 'bold');
    doc.text(pageText, rightX - pageTextWidth, tocY);

    doc.link(marginX, tocY - 12, rightX - marginX, 14, { pageNumber: entry.page });

    tocY += lineH;
  });
}

function writeCodeBlock(lines) {
  if (!lines.length) return;

  const codeFontSize = 9.7;
  const codeLineHeight = 13;
  const left = marginX;
  const boxWidth = maxWidth;

  const wrappedLines = [];
  lines.forEach((ln) => {
    const wrapped = doc.splitTextToSize(ln || ' ', boxWidth - 18);
    wrapped.forEach((w) => wrappedLines.push(w));
  });

  const blockHeight = wrappedLines.length * codeLineHeight + 18;
  ensureSpace(blockHeight + 6);

  doc.setFillColor(...BRAND.soft);
  doc.setDrawColor(...BRAND.line);
  doc.roundedRect(left, y - 10, boxWidth, blockHeight, 4, 4, 'FD');

  doc.setFont('courier', 'normal');
  doc.setFontSize(codeFontSize);
  doc.setTextColor(58, 64, 74);

  let yy = y + 2;
  wrappedLines.forEach((ln) => {
    doc.text(ln, left + 9, yy);
    yy += codeLineHeight;
  });

  y += blockHeight + 8;
}

function writeTable(tableRows) {
  if (!tableRows.length) return;

  const rows = tableRows
    .map((r) => r.slice(1, -1).split('|').map((c) => stripMdInline(c.trim())))
    .filter((r) => r.length > 0);

  if (!rows.length) return;

  const isSeparatorRow = (cells) => cells.every((c) => /^:?-{3,}:?$/.test(c));
  const cleanRows = rows.filter((r) => !isSeparatorRow(r));
  if (!cleanRows.length) return;

  const colCount = Math.max(...cleanRows.map((r) => r.length));
  const colWidth = maxWidth / Math.max(1, colCount);
  const linePadY = 7;

  cleanRows.forEach((row, rowIdx) => {
    const normalized = Array.from({ length: colCount }, (_, i) => row[i] ?? '');
    const cellMetrics = normalized.map((cell) => textHeightFor(cell, 10, colWidth - 12));
    const rowHeight = Math.max(...cellMetrics.map((m) => m.height)) + linePadY * 2;

    ensureSpace(rowHeight + 2);

    let x = marginX;
    normalized.forEach((cell, colIdx) => {
      doc.setFillColor(...(rowIdx === 0 ? [236, 241, 246] : [255, 255, 255]));
      doc.setDrawColor(...BRAND.line);
      doc.rect(x, y - 10, colWidth, rowHeight, 'FD');

      doc.setFont('helvetica', rowIdx === 0 ? 'bold' : 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...(rowIdx === 0 ? BRAND.navy : BRAND.ink));

      const wrapped = cellMetrics[colIdx].wrapped;
      let yy = y + 4;
      wrapped.forEach((ln) => {
        doc.text(ln, x + 6, yy);
        yy += 13;
      });

      x += colWidth;
    });

    y += rowHeight;
  });

  y += 10;
}

const lines = md.split(/\r?\n/);
let inCodeBlock = false;
const codeBuffer = [];
const tableBuffer = [];

writeCoverPage();

function flushTableBuffer() {
  if (tableBuffer.length) {
    writeTable(tableBuffer);
    tableBuffer.length = 0;
  }
}

for (const rawLine of lines) {
  const line = rawLine.trimEnd();

  if (line.startsWith('|') && line.endsWith('|') && !inCodeBlock) {
    tableBuffer.push(line);
    continue;
  }
  flushTableBuffer();

  if (line.startsWith('```')) {
    if (!inCodeBlock) {
      inCodeBlock = true;
    } else {
      inCodeBlock = false;
      writeCodeBlock(codeBuffer);
      codeBuffer.length = 0;
    }
    continue;
  }

  if (inCodeBlock) {
    codeBuffer.push(line);
    continue;
  }

  if (!line.trim()) {
    y += 5;
    continue;
  }

  if (line === '---') {
    writeRule();
    continue;
  }

  if (line.startsWith('# ')) {
    writeLine(stripMdInline(line.slice(2)), { size: 22, style: 'bold', color: BRAND.navy, gapAfter: 10 });
    continue;
  }

  if (line.startsWith('## ')) {
    const heading = stripMdInline(line.slice(3));
    writeLine(heading, { size: 15.5, style: 'bold', color: BRAND.navy, gapAfter: 6 });
    if (isNumberedSectionHeading(heading)) {
      tocEntries.push({ title: heading, page: currentPageNumber() });
    }
    continue;
  }

  if (line.startsWith('### ')) {
    writeLine(stripMdInline(line.slice(4)), { size: 12.4, style: 'bold', color: BRAND.navy, gapAfter: 3 });
    continue;
  }

  if (line.startsWith('- ')) {
    writeLine(`• ${stripMdInline(line.slice(2))}`, { size: 10.8, gapAfter: 2.5, indent: 8 });
    continue;
  }

  if (/^\d+\.\s+/.test(line)) {
    writeLine(stripMdInline(line), { size: 10.8, gapAfter: 2.5, indent: 6 });
    continue;
  }

  writeLine(stripMdInline(line), { size: 10.9, gapAfter: 3.5, color: BRAND.ink });
}

flushTableBuffer();
if (inCodeBlock && codeBuffer.length) {
  writeCodeBlock(codeBuffer);
}

writeClickableTocPage();

const pageCount = doc.getNumberOfPages();
for (let i = 1; i <= pageCount; i++) {
  doc.setPage(i);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...BRAND.muted);
  doc.text(`Diamond Capital Africa — Compliance Pack`, marginX, pageHeight - 24);
  doc.text(`Page ${i} of ${pageCount}`, pageWidth - marginX - 62, pageHeight - 24);
}

const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));

console.log(`PDF generated: ${outputPath}`);
