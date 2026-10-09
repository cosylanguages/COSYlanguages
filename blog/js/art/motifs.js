/**
 * blog/js/art/motifs.js
 * SVG motif generators for COSY magazine cover art, dividers, pullquotes, and word cards.
 * Provides 13 distinct procedural art motifs:
 * 1. paper-cut
 * 2. riso-print
 * 3. gingham-knit
 * 4. tea-stain
 * 5. window-light
 * 6. ticket-stub
 * 7. doodle-border
 * 8. vintage-stamp
 * 9. tea-ring-wash
 * 10. pressed-flower
 * 11. postcard-stamp
 * 12. terrazzo-tile
 * 13. pressed-leaf
 */

export const MOTIFS = {
  'paper-cut': generatePaperCut,
  'riso-print': generateRisoPrint,
  'gingham-knit': generateGinghamKnit,
  'tea-stain': generateTeaStain,
  'window-light': generateWindowLight,
  'ticket-stub': generateTicketStub,
  'doodle-border': generateDoodleBorder,
  'vintage-stamp': generateVintageStamp,
  'tea-ring-wash': generateTeaRingWash,
  'pressed-flower': generatePressedFlower,
  'postcard-stamp': generatePostcardStamp,
  'terrazzo-tile': generateTerrazzoTile,
  'pressed-leaf': generatePressedLeaf
};

// Default cozy color palettes by desk / theme / language
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

export const LANG_PALETTE_ACCENTS = {
  en: '#0d9488', // Teal
  fr: '#2563eb', // Royal Blue
  it: '#059669', // Emerald
  ru: '#dc2626', // Crimson
  el: '#7c3aed', // Purple
  es: '#d97706', // Amber
  de: '#4b5563', // Slate
  pt: '#16a34a'  // Forest Green
};

/** 1. Paper-Cut Motif */
export function generatePaperCut({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf7f2';
  const c1 = palette[0] || '#1e293b';
  const c2 = palette[1] || '#0d9488';
  const c3 = palette[2] || '#f59e0b';

  const shapeCount = prng.rangeInt(6, 10);
  let shapesSvg = '';

  for (let i = 0; i < shapeCount; i++) {
    const color = prng.pick([c1, c2, c3]);
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const radius = prng.rangeInt(50, Math.min(width, height) * 0.6);
    const sides = prng.rangeInt(3, 8);

    let points = [];
    for (let s = 0; s < sides; s++) {
      const angle = (s / sides) * Math.PI * 2 + prng.rangeFloat(-0.2, 0.2);
      const r = radius * prng.rangeFloat(0.7, 1.3);
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

  const circleCount = prng.rangeInt(14, 22);
  let circles = '';

  for (let i = 0; i < circleCount; i++) {
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const r = prng.rangeInt(30, 110);
    const color = prng.pick([c1, c2]);
    const dx = prng.rangeInt(-8, 8);
    const dy = prng.rangeInt(-8, 8);

    circles += `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="0.4" style="mix-blend-mode: multiply;" />
      <circle cx="${cx + dx}" cy="${cy + dy}" r="${r * 0.9}" fill="${color}" opacity="0.25" style="mix-blend-mode: multiply;" />
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <g>
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
    gridSvg += `<rect x="${x}" y="0" width="${gridSize / 2}" height="${height}" fill="${color1}" opacity="0.15" />`;
  }
  for (let y = 0; y < height; y += gridSize) {
    gridSvg += `<rect x="0" y="${y}" width="${width}" height="${gridSize / 2}" fill="${color2}" opacity="0.15" />`;
  }

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      gridSvg += `<rect x="${x}" y="${y}" width="${gridSize / 2}" height="${gridSize / 2}" fill="${color1}" opacity="0.25" />`;
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

  const blotCount = prng.rangeInt(4, 7);
  let blots = '';

  for (let i = 0; i < blotCount; i++) {
    const cx = prng.rangeInt(width * 0.1, width * 0.9);
    const cy = prng.rangeInt(height * 0.1, height * 0.9);
    const rx = prng.rangeInt(80, 220);
    const ry = prng.rangeInt(50, 160);
    const rotation = prng.rangeInt(0, 360);

    blots += `
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${stainColor}" opacity="0.28" transform="rotate(${rotation} ${cx} ${cy})" style="filter: blur(12px);" />
      <ellipse cx="${cx + 10}" cy="${cy - 5}" rx="${rx * 0.6}" ry="${ry * 0.6}" fill="${accentColor}" opacity="0.18" transform="rotate(${rotation} ${cx} ${cy})" style="filter: blur(8px);" />
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

  const panex = prng.rangeInt(width * 0.2, width * 0.6);
  const paney = prng.rangeInt(0, height * 0.3);

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <polygon points="${panex},${paney} ${panex + 240},${paney + 20} ${panex + 340},${height} ${panex - 120},${height}" fill="${lightColor}" opacity="0.22" />
    <polygon points="${panex + 50},${paney} ${panex + 180},${paney + 10} ${panex + 260},${height} ${panex + 50},${height}" fill="${accent}" opacity="0.15" />
    <line x1="${panex + 120}" y1="${paney}" x2="${panex + 120}" y2="${height}" stroke="${lightColor}" stroke-width="4" opacity="0.3" />
    <line x1="${panex - 50}" y1="${paney + 100}" x2="${panex + 300}" y2="${paney + 100}" stroke="${lightColor}" stroke-width="4" opacity="0.3" />
  `;
}

/** 6. Ticket-Stub Collage Motif */
export function generateTicketStub({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf5ff';
  const c1 = palette[0] || '#44337a';
  const c2 = palette[1] || '#805ad5';

  const ticketCount = prng.rangeInt(2, 4);
  let tickets = '';

  for (let i = 0; i < ticketCount; i++) {
    const w = prng.rangeInt(160, 220);
    const h = prng.rangeInt(80, 110);
    const x = prng.rangeInt(20, width - w - 20);
    const y = prng.rangeInt(20, height - h - 20);
    const color = i % 2 === 0 ? c1 : c2;
    const rot = prng.rangeInt(-12, 12);

    tickets += `
      <g transform="rotate(${rot} ${x + w/2} ${y + h/2})">
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${color}" opacity="0.88" />
        <circle cx="${x}" cy="${y + h/2}" r="10" fill="${bg}" />
        <circle cx="${x + w}" cy="${y + h/2}" r="10" fill="${bg}" />
        <line x1="${x + 45}" y1="${y + 12}" x2="${x + 45}" y2="${y + h - 12}" stroke="${bg}" stroke-dasharray="3 3" stroke-width="2" />
        <text x="${x + 60}" y="${y + 32}" fill="${bg}" font-family="Fraunces, serif" font-size="11" font-weight="bold">COSY GAZETTE</text>
        <text x="${x + 60}" y="${y + 52}" fill="${bg}" font-family="DM Sans, sans-serif" font-size="9" opacity="0.85">ADMIT ONE • READ</text>
      </g>
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${tickets}
  `;
}

/** 7. Doodle-Border Motif */
export function generateDoodleBorder({ width, height, palette, prng }) {
  const bg = palette[3] || '#f0fff4';
  const strokeColor = palette[0] || '#22543d';
  const accentColor = palette[1] || '#38a169';

  const margin = prng.rangeInt(10, 20);
  let pathD = `M ${margin} ${margin} `;

  for (let x = margin; x <= width - margin; x += 25) {
    const dy = margin + prng.rangeInt(-5, 5);
    pathD += `L ${x} ${dy} `;
  }
  for (let y = margin; y <= height - margin; y += 25) {
    const dx = width - margin + prng.rangeInt(-5, 5);
    pathD += `L ${dx} ${y} `;
  }
  for (let x = width - margin; x >= margin; x -= 25) {
    const dy = height - margin + prng.rangeInt(-5, 5);
    pathD += `L ${x} ${dy} `;
  }
  for (let y = height - margin; y >= margin; y -= 25) {
    const dx = margin + prng.rangeInt(-5, 5);
    pathD += `L ${dx} ${y} `;
  }
  pathD += 'Z';

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="${width - margin * 2.5}" cy="${margin * 2.5}" r="16" fill="${accentColor}" opacity="0.3" />
    <circle cx="${margin * 2.5}" cy="${height - margin * 2.5}" r="16" fill="${accentColor}" opacity="0.3" />
  `;
}

/** 8. Vintage-Stamp Motif */
export function generateVintageStamp({ width, height, palette, prng }) {
  const bg = palette[3] || '#fff5f7';
  const stampColor = palette[0] || '#702459';
  const stampBg = palette[1] || '#b83280';

  const cx = width / 2;
  const cy = height / 2;
  const stampW = Math.min(width * 0.45, 200);
  const stampH = Math.min(height * 0.65, 240);

  let teeth = '';
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

/** 9. Tea-Ring Wash Motif (NEW) */
export function generateTeaRingWash({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf7f2';
  const ringColor = palette[2] || '#d69e2e';
  const washColor = palette[0] || '#1e293b';

  const ringCount = prng.rangeInt(2, 5);
  let rings = '';

  for (let i = 0; i < ringCount; i++) {
    const cx = prng.rangeInt(width * 0.2, width * 0.8);
    const cy = prng.rangeInt(height * 0.2, height * 0.8);
    const r = prng.rangeInt(50, 130);
    const strokeW = prng.rangeFloat(3, 8);

    rings += `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${ringColor}" stroke-width="${strokeW}" opacity="0.35" stroke-dasharray="15 8 4 6" style="filter: blur(1.5px);" />
      <circle cx="${cx + 2}" cy="${cy - 2}" r="${r * 0.98}" fill="none" stroke="${washColor}" stroke-width="1.5" opacity="0.15" />
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${rings}
  `;
}

/** 10. Pressed-Flower / Botanical Motif (NEW) */
export function generatePressedFlower({ width, height, palette, prng }) {
  const bg = palette[3] || '#f0fff4';
  const stemColor = palette[0] || '#22543d';
  const petalColor = palette[1] || '#38a169';
  const centerColor = palette[2] || '#f59e0b';

  const plantCount = prng.rangeInt(3, 6);
  let plants = '';

  for (let p = 0; p < plantCount; p++) {
    const cx = prng.rangeInt(width * 0.1, width * 0.9);
    const cy = prng.rangeInt(height * 0.3, height * 0.9);
    const h = prng.rangeInt(80, 180);

    let stem = `<path d="M ${cx} ${cy} Q ${cx + prng.rangeInt(-20, 20)} ${cy - h/2} ${cx + prng.rangeInt(-10, 10)} ${cy - h}" stroke="${stemColor}" stroke-width="3" fill="none" opacity="0.75" />`;

    const petalCount = prng.rangeInt(5, 8);
    const topY = cy - h;
    let petals = '';
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      const px = cx + Math.cos(angle) * 22;
      const py = topY + Math.sin(angle) * 22;
      petals += `<ellipse cx="${px}" cy="${py}" rx="10" ry="6" fill="${petalColor}" opacity="0.6" transform="rotate(${angle * 180 / Math.PI} ${px} ${py})" />`;
    }
    petals += `<circle cx="${cx}" cy="${topY}" r="8" fill="${centerColor}" opacity="0.85" />`;

    plants += `${stem}${petals}`;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${plants}
  `;
}

/** 11. Postcard-Stamp / Airmail Border Motif (NEW) */
export function generatePostcardStamp({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf7f2';
  const red = '#dc2626';
  const blue = '#2563eb';

  const stripeW = 20;
  const stripeH = 12;

  let topBorder = '';
  let bottomBorder = '';

  for (let x = 0; x < width; x += stripeW * 2) {
    topBorder += `<polygon points="${x},0 ${x + stripeW},0 ${x + stripeW/2},${stripeH} ${x - stripeW/2},${stripeH}" fill="${red}" opacity="0.8" />`;
    topBorder += `<polygon points="${x + stripeW},0 ${x + stripeW * 2},0 ${x + stripeW * 1.5},${stripeH} ${x + stripeW/2},${stripeH}" fill="${blue}" opacity="0.8" />`;

    bottomBorder += `<polygon points="${x},${height} ${x + stripeW},${height} ${x + stripeW/2},${height - stripeH} ${x - stripeW/2},${height - stripeH}" fill="${red}" opacity="0.8" />`;
    bottomBorder += `<polygon points="${x + stripeW},${height} ${x + stripeW * 2},${height} ${x + stripeW * 1.5},${height - stripeH} ${x + stripeW/2},${height - stripeH}" fill="${blue}" opacity="0.8" />`;
  }

  const cx = width - 100;
  const cy = 60;
  const cancellation = `
    <g opacity="0.4">
      <circle cx="${cx}" cy="${cy}" r="30" fill="none" stroke="#1e293b" stroke-width="2" />
      <text x="${cx}" y="${cy - 4}" fill="#1e293b" font-family="DM Sans, sans-serif" font-size="8" text-anchor="middle" font-weight="bold">COSY AIRMAIL</text>
      <text x="${cx}" y="${cy + 12}" fill="#1e293b" font-family="DM Sans, sans-serif" font-size="8" text-anchor="middle">2026</text>
      <line x1="${cx - 90}" y1="${cy - 10}" x2="${cx - 35}" y2="${cy - 10}" stroke="#1e293b" stroke-width="2" />
      <line x1="${cx - 90}" y1="${cy}" x2="${cx - 35}" y2="${cy}" stroke="#1e293b" stroke-width="2" />
      <line x1="${cx - 90}" y1="${cy + 10}" x2="${cx - 35}" y2="${cy + 10}" stroke="#1e293b" stroke-width="2" />
    </g>
  `;

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${topBorder}
    ${bottomBorder}
    ${cancellation}
  `;
}

/** 12. Terrazzo-Tile Motif (NEW) */
export function generateTerrazzoTile({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf7f2';
  const c1 = palette[0] || '#1e293b';
  const c2 = palette[1] || '#0d9488';
  const c3 = palette[2] || '#f59e0b';

  const fleckCount = prng.rangeInt(35, 60);
  let flecks = '';

  for (let i = 0; i < fleckCount; i++) {
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const r = prng.rangeInt(6, 24);
    const color = prng.pick([c1, c2, c3]);
    const rot = prng.rangeInt(0, 360);

    flecks += `
      <polygon points="${cx - r},${cy - r/2} ${cx + r/2},${cy - r} ${cx + r},${cy + r/2} ${cx - r/2},${cy + r}" fill="${color}" opacity="0.75" transform="rotate(${rot} ${cx} ${cy})" />
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${flecks}
  `;
}

/** 13. Pressed-Leaf Motif (NEW) */
export function generatePressedLeaf({ width, height, palette, prng }) {
  const bg = palette[3] || '#f0fff4';
  const leafColor = palette[0] || '#22543d';
  const veinColor = palette[1] || '#38a169';

  const leafCount = prng.rangeInt(3, 6);
  let leaves = '';

  for (let i = 0; i < leafCount; i++) {
    const cx = prng.rangeInt(width * 0.15, width * 0.85);
    const cy = prng.rangeInt(height * 0.2, height * 0.8);
    const rx = prng.rangeInt(40, 90);
    const ry = prng.rangeInt(80, 160);
    const rot = prng.rangeInt(-45, 45);

    leaves += `
      <g transform="rotate(${rot} ${cx} ${cy})">
        <path d="M ${cx} ${cy - ry} Q ${cx + rx} ${cy} ${cx} ${cy + ry} Q ${cx - rx} ${cy} ${cx} ${cy - ry}" fill="${leafColor}" opacity="0.25" />
        <line x1="${cx}" y1="${cy - ry}" x2="${cx}" y2="${cy + ry}" stroke="${veinColor}" stroke-width="2.5" opacity="0.6" />
        <line x1="${cx}" y1="${cy - ry/2}" x2="${cx + rx/2}" y2="${cy - ry/4}" stroke="${veinColor}" stroke-width="1.5" opacity="0.5" />
        <line x1="${cx}" y1="${cy - ry/2}" x2="${cx - rx/2}" y2="${cy - ry/4}" stroke="${veinColor}" stroke-width="1.5" opacity="0.5" />
        <line x1="${cx}" y1="${cy}" x2="${cx + rx/2}" y2="${cy + ry/4}" stroke="${veinColor}" stroke-width="1.5" opacity="0.5" />
        <line x1="${cx}" y1="${cy}" x2="${cx - rx/2}" y2="${cy + ry/4}" stroke="${veinColor}" stroke-width="1.5" opacity="0.5" />
      </g>
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${leaves}
  `;
}
