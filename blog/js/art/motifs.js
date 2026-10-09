/**
 * blog/js/art/motifs.js
 * SVG motif generators for COSY magazine cover art, dividers, pullquotes, and word cards.
 * Provides 13 distinct procedural art motifs with cozy, tactile feel and full-bleed bounds:
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
    const radius = prng.rangeInt(50, Math.min(width, height) / 1.8);
    const sides = prng.rangeInt(3, 7);

    let points = [];
    for (let s = 0; s < sides; s++) {
      const angle = (s / sides) * Math.PI * 2 + prng.rangeFloat(-0.2, 0.2);
      const r = radius * prng.rangeFloat(0.7, 1.25);
      const px = Math.round(cx + Math.cos(angle) * r);
      const py = Math.round(cy + Math.sin(angle) * r);
      points.push(`${px},${py}`);
    }

    const shadowOffset = prng.rangeInt(4, 8);
    shapesSvg += `
      <polygon points="${points.join(' ')}" fill="${color}" opacity="0.88" style="filter: drop-shadow(${shadowOffset}px ${shadowOffset}px 4px rgba(0,0,0,0.15));" />
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
    const r = prng.rangeInt(25, 110);
    const color = prng.pick([c1, c2]);
    const dx = prng.rangeInt(-8, 8);
    const dy = prng.rangeInt(-8, 8);

    circles += `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="0.45" style="mix-blend-mode: multiply;" />
      <circle cx="${cx + dx}" cy="${cy + dy}" r="${r * 0.9}" fill="${color}" opacity="0.3" style="mix-blend-mode: multiply;" />
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
    gridSvg += `<rect x="${x}" y="0" width="${gridSize / 2}" height="${height}" fill="${color1}" opacity="0.14" />`;
  }
  for (let y = 0; y < height; y += gridSize) {
    gridSvg += `<rect x="0" y="${y}" width="${width}" height="${gridSize / 2}" fill="${color2}" opacity="0.14" />`;
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

  const blotCount = prng.rangeInt(4, 8);
  let blots = '';

  for (let i = 0; i < blotCount; i++) {
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const rx = prng.rangeInt(80, 220);
    const ry = prng.rangeInt(50, 160);
    const rotation = prng.rangeInt(0, 360);

    blots += `
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${stainColor}" opacity="0.28" transform="rotate(${rotation} ${cx} ${cy})" style="filter: blur(10px);" />
      <ellipse cx="${cx + 12}" cy="${cy - 6}" rx="${rx * 0.6}" ry="${ry * 0.6}" fill="${accentColor}" opacity="0.18" transform="rotate(${rotation} ${cx} ${cy})" style="filter: blur(6px);" />
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
    <line x1="${panex + 110}" y1="${paney}" x2="${panex + 110}" y2="${height}" stroke="${lightColor}" stroke-width="4" opacity="0.3" />
    <line x1="${panex - 40}" y1="${paney + 100}" x2="${panex + 280}" y2="${paney + 100}" stroke="${lightColor}" stroke-width="4" opacity="0.3" />
  `;
}

/** 6. Ticket-Stub Collage Motif */
export function generateTicketStub({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf5ff';
  const c1 = palette[0] || '#44337a';
  const c2 = palette[1] || '#805ad5';

  const stubCount = prng.rangeInt(2, 4);
  let stubs = '';

  for (let i = 0; i < stubCount; i++) {
    const w = prng.rangeInt(180, 260);
    const h = prng.rangeInt(90, 130);
    const x = prng.rangeInt(-20, width - w + 20);
    const y = prng.rangeInt(-10, height - h + 10);
    const rot = prng.rangeInt(-15, 15);

    stubs += `
      <g transform="rotate(${rot} ${x + w/2} ${y + h/2})">
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${i % 2 === 0 ? c1 : c2}" opacity="0.85" />
        <circle cx="${x}" cy="${y + h/2}" r="12" fill="${bg}" />
        <circle cx="${x + w}" cy="${y + h/2}" r="12" fill="${bg}" />
        <line x1="${x + 45}" y1="${y + 12}" x2="${x + 45}" y2="${y + h - 12}" stroke="${bg}" stroke-dasharray="4 4" stroke-width="2" />
        <text x="${x + 60}" y="${y + 35}" fill="${bg}" font-family="Fraunces, serif" font-size="13" font-weight="bold">COSY GAZETTE</text>
        <text x="${x + 60}" y="${y + 58}" fill="${bg}" font-family="DM Sans, sans-serif" font-size="11" opacity="0.85">ADMIT ONE • PASS</text>
      </g>
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${stubs}
  `;
}

/** 7. Doodle-Border Motif */
export function generateDoodleBorder({ width, height, palette, prng }) {
  const bg = palette[3] || '#f0fff4';
  const strokeColor = palette[0] || '#22543d';
  const accentColor = palette[1] || '#38a169';

  const margin = prng.rangeInt(10, 20);
  let pathD = `M ${margin} ${margin} `;

  for (let x = margin; x <= width - margin; x += 30) {
    const dy = margin + prng.rangeInt(-5, 5);
    pathD += `L ${x} ${dy} `;
  }
  for (let y = margin; y <= height - margin; y += 30) {
    const dx = width - margin + prng.rangeInt(-5, 5);
    pathD += `L ${dx} ${y} `;
  }
  for (let x = width - margin; x >= margin; x -= 30) {
    const dy = height - margin + prng.rangeInt(-5, 5);
    pathD += `L ${x} ${dy} `;
  }
  for (let y = height - margin; y >= margin; y -= 30) {
    const dx = margin + prng.rangeInt(-5, 5);
    pathD += `L ${dx} ${y} `;
  }
  pathD += 'Z';

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="${width - margin * 2.5}" cy="${margin * 2.5}" r="18" fill="${accentColor}" opacity="0.3" />
    <circle cx="${margin * 2.5}" cy="${height - margin * 2.5}" r="24" fill="${accentColor}" opacity="0.25" />
  `;
}

/** 8. Vintage-Stamp Motif */
export function generateVintageStamp({ width, height, palette, prng }) {
  const bg = palette[3] || '#fff5f7';
  const stampColor = palette[0] || '#702459';
  const stampBg = palette[1] || '#b83280';

  const cx = width / 2;
  const cy = height / 2;
  const stampW = Math.min(width * 0.7, 320);
  const stampH = Math.min(height * 0.7, 240);

  let teeth = '';
  for (let x = cx - stampW/2; x <= cx + stampW/2; x += 14) {
    teeth += `<circle cx="${x}" cy="${cy - stampH/2}" r="5" fill="${bg}" />`;
    teeth += `<circle cx="${x}" cy="${cy + stampH/2}" r="5" fill="${bg}" />`;
  }
  for (let y = cy - stampH/2; y <= cy + stampH/2; y += 14) {
    teeth += `<circle cx="${cx - stampW/2}" cy="${y}" r="5" fill="${bg}" />`;
    teeth += `<circle cx="${cx + stampW/2}" cy="${y}" r="5" fill="${bg}" />`;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <rect x="${cx - stampW/2}" y="${cy - stampH/2}" width="${stampW}" height="${stampH}" fill="${stampBg}" />
    <rect x="${cx - stampW/2 + 10}" y="${cy - stampH/2 + 10}" width="${stampW - 20}" height="${stampH - 20}" fill="none" stroke="${bg}" stroke-width="2.5" />
    <text x="${cx}" y="${cy + 8}" fill="${bg}" font-family="Fraunces, serif" font-size="28" text-anchor="middle" font-weight="bold">COSY</text>
    ${teeth}
  `;
}

/** 9. Tea-Ring Wash Motif (NEW) */
export function generateTeaRingWash({ width, height, palette, prng }) {
  const bg = palette[3] || '#fdfbf7';
  const teaColor = palette[0] || '#8c5319';
  const accentColor = palette[1] || '#d97706';

  const ringCount = prng.rangeInt(3, 6);
  let rings = '';

  for (let i = 0; i < ringCount; i++) {
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const r = prng.rangeInt(40, 120);
    const strokeW = prng.rangeFloat(3, 10);
    const color = prng.pick([teaColor, accentColor]);

    rings += `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${strokeW}" opacity="0.25" style="filter: blur(1px);" />
      <circle cx="${cx + prng.rangeInt(-4, 4)}" cy="${cy + prng.rangeInt(-4, 4)}" r="${r * prng.rangeFloat(0.92, 0.98)}" fill="none" stroke="${color}" stroke-width="${strokeW * 0.5}" opacity="0.18" />
    `;

    const dropCount = prng.rangeInt(2, 5);
    for (let d = 0; d < dropCount; d++) {
      const angle = prng.rangeFloat(0, Math.PI * 2);
      const dist = r + prng.rangeFloat(5, 25);
      const dx = cx + Math.cos(angle) * dist;
      const dy = cy + Math.sin(angle) * dist;
      const dr = prng.rangeFloat(2, 6);
      rings += `<circle cx="${dx}" cy="${dy}" r="${dr}" fill="${color}" opacity="0.22" />`;
    }
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${rings}
  `;
}

/** 10. Pressed-Flower Botanical Motif (NEW) */
export function generatePressedFlower({ width, height, palette, prng }) {
  const bg = palette[3] || '#faf7f2';
  const stemColor = palette[0] || '#22543d';
  const petalColor = palette[1] || '#b83280';
  const centerColor = palette[2] || '#f59e0b';

  const flowerCount = prng.rangeInt(4, 7);
  let flowers = '';

  for (let i = 0; i < flowerCount; i++) {
    const cx = prng.rangeInt(40, width - 40);
    const cy = prng.rangeInt(40, height - 40);
    const petalCount = prng.rangeInt(5, 8);
    const petalR = prng.rangeInt(18, 40);

    let petals = '';
    for (let p = 0; p < petalCount; p++) {
      const angle = (p / petalCount) * Math.PI * 2;
      const px = cx + Math.cos(angle) * petalR * 0.9;
      const py = cy + Math.sin(angle) * petalR * 0.9;
      petals += `<ellipse cx="${px}" cy="${py}" rx="${petalR * 0.55}" ry="${petalR * 0.35}" fill="${petalColor}" opacity="0.35" transform="rotate(${(angle * 180 / Math.PI)} ${px} ${py})" />`;
    }

    const stemD = `M ${cx} ${cy} Q ${cx + prng.rangeInt(-30, 30)} ${cy + prng.rangeInt(40, 80)} ${cx + prng.rangeInt(-20, 20)} ${cy + prng.rangeInt(80, 140)}`;

    flowers += `
      <path d="${stemD}" fill="none" stroke="${stemColor}" stroke-width="2" opacity="0.4" />
      ${petals}
      <circle cx="${cx}" cy="${cy}" r="${petalR * 0.3}" fill="${centerColor}" opacity="0.7" />
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${flowers}
  `;
}

/** 11. Postcard-Stamp Airmail Motif (NEW) */
export function generatePostcardStamp({ width, height, palette, prng }) {
  const bg = palette[3] || '#f8fafc';
  const blue = palette[0] || '#1d4ed8';
  const red = palette[1] || '#b91c1c';

  const stripeWidth = 24;
  let stripes = '';
  for (let x = -stripeWidth; x < width + height; x += stripeWidth * 2) {
    stripes += `<polygon points="${x},0 ${x + stripeWidth},0 ${x + stripeWidth - height},${height} ${x - height},${height}" fill="${blue}" opacity="0.15" />`;
    stripes += `<polygon points="${x + stripeWidth},0 ${x + stripeWidth * 2},0 ${x + stripeWidth * 2 - height},${height} ${x + stripeWidth - height},${height}" fill="${red}" opacity="0.15" />`;
  }

  const pmX = prng.rangeInt(width * 0.5, width * 0.85);
  const pmY = prng.rangeInt(height * 0.2, height * 0.7);
  const pmR = 45;

  let postmarkLines = '';
  for (let l = -20; l <= 20; l += 8) {
    postmarkLines += `<line x1="${pmX + 25}" y1="${pmY + l}" x2="${pmX + 110}" y2="${pmY + l}" stroke="${blue}" stroke-width="2" opacity="0.4" />`;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    <g class="airmail-stripes">${stripes}</g>
    <circle cx="${pmX}" cy="${pmY}" r="${pmR}" fill="none" stroke="${blue}" stroke-width="2.5" stroke-dasharray="6 3" opacity="0.45" />
    <circle cx="${pmX}" cy="${pmY}" r="${pmR * 0.8}" fill="none" stroke="${blue}" stroke-width="1.5" opacity="0.35" />
    <text x="${pmX}" y="${pmY - 5}" fill="${blue}" font-family="DM Sans, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" opacity="0.6">COSY POST</text>
    <text x="${pmX}" y="${pmY + 12}" fill="${blue}" font-family="DM Sans, sans-serif" font-size="9" text-anchor="middle" opacity="0.5">AIR MAIL</text>
    ${postmarkLines}
  `;
}

/** 12. Terrazzo-Tile Motif (NEW) */
export function generateTerrazzoTile({ width, height, palette, prng }) {
  const bg = palette[3] || '#f1f5f9';
  const c1 = palette[0] || '#0f766e';
  const c2 = palette[1] || '#c2410c';
  const c3 = palette[2] || '#a21caf';

  const chipCount = prng.rangeInt(35, 60);
  let chips = '';

  for (let i = 0; i < chipCount; i++) {
    const cx = prng.rangeInt(0, width);
    const cy = prng.rangeInt(0, height);
    const color = prng.pick([c1, c2, c3]);
    const r = prng.rangeInt(6, 22);

    let pts = [];
    const sides = prng.rangeInt(4, 6);
    for (let s = 0; s < sides; s++) {
      const angle = (s / sides) * Math.PI * 2 + prng.rangeFloat(-0.3, 0.3);
      const dist = r * prng.rangeFloat(0.5, 1.2);
      pts.push(`${Math.round(cx + Math.cos(angle) * dist)},${Math.round(cy + Math.sin(angle) * dist)}`);
    }

    chips += `<polygon points="${pts.join(' ')}" fill="${color}" opacity="${prng.rangeFloat(0.4, 0.8)}" />`;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${chips}
  `;
}

/** 13. Pressed-Leaf Botanical Motif (NEW) */
export function generatePressedLeaf({ width, height, palette, prng }) {
  const bg = palette[3] || '#f2f7f4';
  const leafColor = palette[0] || '#2d6a4f';
  const veinColor = palette[1] || '#52b788';

  const leafCount = prng.rangeInt(3, 5);
  let leaves = '';

  for (let i = 0; i < leafCount; i++) {
    const cx = prng.rangeInt(50, width - 50);
    const cy = prng.rangeInt(50, height - 50);
    const len = prng.rangeInt(90, 160);
    const rot = prng.rangeInt(-60, 60);

    leaves += `
      <g transform="rotate(${rot} ${cx} ${cy})">
        <path d="M ${cx - len/2} ${cy} Q ${cx} ${cy - 45} ${cx + len/2} ${cy} Z" fill="${leafColor}" opacity="0.25" />
        <line x1="${cx - len/2 - 10}" y1="${cy}" x2="${cx + len/2}" y2="${cy}" stroke="${veinColor}" stroke-width="2" opacity="0.4" />
        <line x1="${cx - 20}" y1="${cy}" x2="${cx - 5}" y2="${cy - 18}" stroke="${veinColor}" stroke-width="1.5" opacity="0.3" />
        <line x1="${cx - 20}" y1="${cy}" x2="${cx - 5}" y2="${cy + 18}" stroke="${veinColor}" stroke-width="1.5" opacity="0.3" />
        <line x1="${cx + 10}" y1="${cy}" x2="${cx + 25}" y2="${cy - 18}" stroke="${veinColor}" stroke-width="1.5" opacity="0.3" />
        <line x1="${cx + 10}" y1="${cy}" x2="${cx + 25}" y2="${cy + 18}" stroke="${veinColor}" stroke-width="1.5" opacity="0.3" />
      </g>
    `;
  }

  return `
    <rect width="${width}" height="${height}" fill="${bg}" />
    ${leaves}
  `;
}
