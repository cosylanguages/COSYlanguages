/**
 * blog/js/art/motifs.js
 * SVG motif generators for COSY magazine cover art, dividers, pullquotes, and word cards.
 * Provides 8 distinct procedural art motifs:
 * 1. paper-cut
 * 2. riso-print
 * 3. gingham-knit
 * 4. tea-stain
 * 5. window-light
 * 6. ticket-stub
 * 7. doodle-border
 * 8. vintage-stamp
 */

export const MOTIFS = {
  'paper-cut': generatePaperCut,
  'riso-print': generateRisoPrint,
  'gingham-knit': generateGinghamKnit,
  'tea-stain': generateTeaStain,
  'window-light': generateWindowLight,
  'ticket-stub': generateTicketStub,
  'doodle-border': generateDoodleBorder,
  'vintage-stamp': generateVintageStamp
};

// Default cozy color palettes by desk / theme
export const DEFAULT_PALETTES = {
  'Front Page': ['#1e293b', '#0d9488', '#f59e0b', '#faf7f2'],
  'Words': ['#2d3748', '#319795', '#d69e2e', '#f7fafc'],
  'Grammar Made Cosy': ['#1a365d', '#3182ce', '#dd6b20', '#ebf8ff'],
  'Say It': ['#742a2a', '#e53e3e', '#d69e2e', '#fff5f5'],
  'Culture & Quotes': ['#44337a', '#805ad5', '#b794f4', '#faf5ff'],
  'Long Reads': ['#22543d', '#38a169', '#d69e2e', '#f0fff4'],
  'Cosy Events': ['#702459', '#b83280', '#ed64a6', '#fff5f7'],
  'The Podcast': ['#1a202c', '#4a5568', '#a0aec0', '#f7fafc'],
  'Back Issues': ['#2c5282', '#4299e1', '#90cdf4', '#ebf8ff']
};

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** 1. Paper-Cut Motif */
export function generatePaperCut({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf7f2';
  const c1 = palette[0] || '#1e293b';
  const c2 = palette[1] || '#0d9488';
  const c3 = palette[2] || '#f59e0b';

  const shapeCount = prng.rangeInt(5, 9);
  let shapesSvg = '';

  for (let i = 0; i < shapeCount; i++) {
    const color = prng.pick([c1, c2, c3]);
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const radius = prng.rangeInt(40, Math.min(width, height) / 2);
    const sides = prng.rangeInt(3, 7);

    let points = [];
    for (let s = 0; s < sides; s++) {
      const angle = (s / sides) * Math.PI * 2 + prng.rangeFloat(-0.2, 0.2);
      const r = radius * prng.rangeFloat(0.7, 1.2);
      const px = Math.round(cx + Math.cos(angle) * r);
      const py = Math.round(cy + Math.sin(angle) * r);
      points.push(`${px},${py}`);
    }

    const shadowOffset = prng.rangeInt(4, 8);
    shapesSvg += `
      <polygon points="${points.join(' ')}" fill="${color}" opacity="0.85" style="filter: drop-shadow(${shadowOffset}px ${shadowOffset}px 4px rgba(0,0,0,0.15));" />
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${shapesSvg}
  `;
}

/** 2. Riso-Print Motif */
export function generateRisoPrint({ width, height, palette, prng }) {
  const bg = palette[3] || '#f7fafc';
  const c1 = palette[0] || '#319795';
  const c2 = palette[1] || '#d69e2e';

  const circleCount = prng.rangeInt(12, 20);
  let circles = '';

  for (let i = 0; i < circleCount; i++) {
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const r = prng.rangeInt(20, 90);
    const color = prng.pick([c1, c2]);
    const dx = prng.rangeInt(-6, 6);
    const dy = prng.rangeInt(-6, 6);

    circles += `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="0.4" style="mix-blend-mode: multiply;" />
      <circle cx="${cx + dx}" cy="${cy + dy}" r="${r * 0.9}" fill="${color}" opacity="0.25" style="mix-blend-mode: multiply;" />
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <g filter="url(#riso-grain-${prng.rangeInt(1, 999)})">
      ${circles}
    </g>
  `;
}

/** 3. Gingham-Knit Motif */
export function generateGinghamKnit({ width, height, palette, prng }) {
  const bg = palette[3] || '#fff5f5';
  const color1 = palette[0] || '#742a2a';
  const color2 = palette[1] || '#e53e3e';
  const gridSize = prng.rangeInt(24, 40);

  let gridSvg = '';
  for (let x = 0; x < width; x += gridSize) {
    gridSvg += `<rect x="${x}" y="0" width="${gridSize / 2}" height="${height}" fill="${color1}" opacity="0.12" />`;
  }
  for (let y = 0; y < height; y += gridSize) {
    gridSvg += `<rect x="0" y="${y}" width="${width}" height="${gridSize / 2}" fill="${color2}" opacity="0.12" />`;
  }

  // Cross intersections
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      gridSvg += `<rect x="${x}" y="${y}" width="${gridSize / 2}" height="${gridSize / 2}" fill="${color1}" opacity="0.2" />`;
    }
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${gridSvg}
  `;
}

/** 4. Tea-Stain / Watercolour Wash Motif */
export function generateTeaStain({ width, height, palette, prng }) {
  const bg = palette[3] || '#fefcbf';
  const stainColor = palette[2] || '#d69e2e';
  const accentColor = palette[0] || '#742a2a';

  const blotCount = prng.rangeInt(3, 6);
  let blots = '';

  for (let i = 0; i < blotCount; i++) {
    const cx = prng.rangeInt(width * 0.2, width * 0.8);
    const cy = prng.rangeInt(height * 0.2, height * 0.8);
    const rx = prng.rangeInt(60, 180);
    const ry = prng.rangeInt(40, 140);
    const rotation = prng.rangeInt(0, 360);

    blots += `
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${stainColor}" opacity="0.25" transform="rotate(${rotation} ${cx} ${cy})" style="filter: blur(12px);" />
      <ellipse cx="${cx + 10}" cy="${cy - 5}" rx="${rx * 0.6}" ry="${ry * 0.6}" fill="${accentColor}" opacity="0.15" transform="rotate(${rotation} ${cx} ${cy})" style="filter: blur(8px);" />
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${blots}
  `;
}

/** 5. Window-Light Motif */
export function generateWindowLight({ width, height, palette, prng }) {
  const bg = palette[0] || '#1a365d';
  const lightColor = palette[3] || '#ebf8ff';
  const accent = palette[1] || '#3182ce';

  const panex = prng.rangeInt(width * 0.3, width * 0.5);
  const paney = prng.rangeInt(height * 0.1, height * 0.3);

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <polygon points="${panex},${paney} ${panex + 180},${paney + 20} ${panex + 260},${height} ${panex - 80},${height}" fill="${lightColor}" opacity="0.18" />
    <polygon points="${panex + 40},${paney} ${panex + 140},${paney + 10} ${panex + 200},${height} ${panex + 40},${height}" fill="${accent}" opacity="0.12" />
    <line x1="${panex + 90}" y1="${paney}" x2="${panex + 90}" y2="${height}" stroke="${lightColor}" stroke-width="3" opacity="0.25" />
    <line x1="${panex}" y1="${paney + 80}" x2="${panex + 220}" y2="${paney + 80}" stroke="${lightColor}" stroke-width="3" opacity="0.25" />
  `;
}

/** 6. Ticket-Stub Collage Motif */
export function generateTicketStub({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf5ff';
  const c1 = palette[0] || '#44337a';
  const c2 = palette[1] || '#805ad5';

  const x = prng.rangeInt(40, width - 180);
  const y = prng.rangeInt(30, height - 120);
  const w = 180;
  const h = 90;

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <g transform="rotate(${prng.rangeInt(-8, 8)} ${x + w/2} ${y + h/2})">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${c1}" opacity="0.88" />
      <circle cx="${x}" cy="${y + h/2}" r="10" fill="${bg}" />
      <circle cx="${x + w}" cy="${y + h/2}" r="10" fill="${bg}" />
      <line x1="${x + 40}" y1="${y + 15}" x2="${x + 40}" y2="${y + h - 15}" stroke="${bg}" stroke-dasharray="3 3" stroke-width="2" />
      <text x="${x + 55}" y="${y + 35}" fill="${bg}" font-family="Fraunces, serif" font-size="12" font-weight="bold">ADMIT ONE</text>
      <text x="${x + 55}" y="${y + 55}" fill="${bg}" font-family="DM Sans, sans-serif" font-size="10" opacity="0.8">COSY GAZETTE • PASS</text>
    </g>
  `;
}

/** 7. Doodle-Border Motif */
export function generateDoodleBorder({ width, height, palette, prng }) {
  const bg = palette[3] || '#f0fff4';
  const strokeColor = palette[0] || '#22543d';
  const accentColor = palette[1] || '#38a169';

  const margin = prng.rangeInt(12, 24);
  let pathD = `M ${margin} ${margin} `;

  // Top border wavy line
  for (let x = margin; x <= width - margin; x += 30) {
    const dy = margin + prng.rangeInt(-4, 4);
    pathD += `L ${x} ${dy} `;
  }
  // Right border
  for (let y = margin; y <= height - margin; y += 30) {
    const dx = width - margin + prng.rangeInt(-4, 4);
    pathD += `L ${dx} ${y} `;
  }
  // Bottom border
  for (let x = width - margin; x >= margin; x -= 30) {
    const dy = height - margin + prng.rangeInt(-4, 4);
    pathD += `L ${x} ${dy} `;
  }
  // Left border
  for (let y = height - margin; y >= margin; y -= 30) {
    const dx = margin + prng.rangeInt(-4, 4);
    pathD += `L ${dx} ${y} `;
  }
  pathD += 'Z';

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="${width - margin * 2}" cy="${height - margin * 2}" r="12" fill="${accentColor}" opacity="0.3" />
  `;
}

/** 8. Vintage-Stamp Motif */
export function generateVintageStamp({ width, height, palette, prng }) {
  const bg = palette[3] || '#fff5f7';
  const stampColor = palette[0] || '#702459';
  const stampBg = palette[1] || '#b83280';

  const cx = width / 2;
  const cy = height / 2;
  const stampW = 120;
  const stampH = 140;

  let teeth = '';
  // Scalloped edges
  for (let x = cx - stampW/2; x <= cx + stampW/2; x += 12) {
    teeth += `<circle cx="${x}" cy="${cy - stampH/2}" r="4" fill="${bg}" />`;
    teeth += `<circle cx="${x}" cy="${cy + stampH/2}" r="4" fill="${bg}" />`;
  }
  for (let y = cy - stampH/2; y <= cy + stampH/2; y += 12) {
    teeth += `<circle cx="${cx - stampW/2}" cy="${y}" r="4" fill="${bg}" />`;
    teeth += `<circle cx="${cx + stampW/2}" cy="${y}" r="4" fill="${bg}" />`;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <rect x="${cx - stampW/2}" y="${cy - stampH/2}" width="${stampW}" height="${stampH}" fill="${stampBg}" />
    <rect x="${cx - stampW/2 + 8}" y="${cy - stampH/2 + 8}" width="${stampW - 16}" height="${stampH - 16}" fill="none" stroke="${bg}" stroke-width="2" />
    <text x="${cx}" y="${cy + 5}" fill="${bg}" font-family="Fraunces, serif" font-size="22" text-anchor="middle" font-weight="bold">COSY</text>
    ${teeth}
  `;
}
