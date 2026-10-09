/**
 * blog/js/art/generator.js
 * Primary entry point for rendering cover art, section dividers, pull-quote cards,
 * and word cards for COSY magazine posts.
 */

import { createPRNG } from './rng.js';
import { MOTIFS, DEFAULT_PALETTES } from './motifs.js';

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const MOTIF_KEYS = Object.keys(MOTIFS);

const LANG_ACCENTS = {
  en: '#0d9488', // Teal
  fr: '#2563eb', // French Blue
  it: '#16a34a', // Italian Green
  ru: '#dc2626', // Russian Red
  el: '#0284c7', // Aegean Cyan
  es: '#ea580c', // Spanish Orange
  de: '#d97706', // German Gold
  pt: '#059669', // Portuguese Emerald
  hy: '#7c3aed', // Armenian Violet
  ka: '#b91c1c', // Georgian Crimson
  tt: '#0d9488', // Tatar Turquoise
  ba: '#15803d', // Bashkir Fern
  br: '#0369a1'  // Breton Ocean
};

/** Extracts base slug for language translation family matching */
export function getBaseSlug(post) {
  if (!post) return 'cosy-post';
  if (post.translationOf) return post.translationOf;
  const slug = post.slug || 'cosy-post';
  return slug.replace(/-(fr|it|ru|el|es|de|pt|hy|ka|tt|ba|br)$/, '');
}

/** Detects post language code */
export function getPostLanguage(post) {
  if (!post) return 'en';
  if (post.language) return post.language.toLowerCase();
  const slug = post.slug || '';
  const match = slug.match(/-(fr|it|ru|el|es|de|pt|hy|ka|tt|ba|br)$/);
  return match ? match[1] : 'en';
}

/** Resolves artDirection configuration with sensible defaults */
export function resolveArtDirection(post) {
  const art = (post && post.artDirection) || {};
  const desk = post ? (post.desk || 'Front Page') : 'Front Page';
  const slug = post ? (post.slug || 'cosy-post') : 'cosy-post';
  const baseSlug = getBaseSlug(post);
  const lang = getPostLanguage(post);

  // Derive palette
  const defaultPalette = [...(DEFAULT_PALETTES[desk] || DEFAULT_PALETTES['Front Page'])];
  let palette = (art.palette && art.palette.length >= 2) ? [...art.palette] : defaultPalette;

  // Apply language accent override
  if (LANG_ACCENTS[lang]) {
    const accent = LANG_ACCENTS[lang];
    if (palette.length >= 3) {
      palette[2] = accent;
    } else {
      palette.push(accent);
    }
  }

  // Deterministic motif selection from baseSlug if art.motif is not explicitly set
  let motif = art.motif;
  if (!motif) {
    let hash = 0;
    for (let i = 0; i < baseSlug.length; i++) {
      hash = (Math.imul(31, hash) + baseSlug.charCodeAt(i)) | 0;
    }
    const idx = Math.abs(hash) % MOTIF_KEYS.length;
    motif = MOTIF_KEYS[idx];
  }

  const seed = art.seed || baseSlug;
  const coverOverride = art.coverOverride || null;

  return { palette, motif, seed, coverOverride, desk, slug, baseSlug, lang };
}

/** Wraps text into lines fitting max character count per line */
function wrapTitleText(title, maxCharsPerLine = 32) {
  if (!title) return ['COSY Gazette'];
  const words = title.trim().split(/\s+/);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if (!currentLine) {
      currentLine = word;
    } else if ((currentLine + ' ' + word).length <= maxCharsPerLine) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

/**
 * Renders cover artwork as an inline SVG string.
 * Full-bleed without empty side bands.
 * Title auto-wraps and auto-shrinks to guarantee zero overflow across all scripts.
 * Supports artDirection.coverOverride for custom hand-drawn image artwork.
 */
export function renderCover(post, options = {}) {
  const width = options.width || 800;
  const height = options.height || 450;
  const showText = options.showText !== false;

  const { palette, motif, seed, coverOverride, lang } = resolveArtDirection(post);

  // Handle hand-made artwork override with fallback
  if (coverOverride) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" class="cosy-cover-art cosy-cover-override">
        <image href="${escapeXml(coverOverride)}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice" />
      </svg>
    `.trim();
  }

  const prng = createPRNG(seed);
  const motifFn = MOTIFS[motif] || MOTIFS['paper-cut'];
  const artworkSvg = motifFn({ width, height, palette, prng });

  const title = post ? (post.title || 'COSY Gazette') : 'COSY Gazette';
  const kicker = post ? (post.kicker || post.category || 'EDITORIAL') : 'EDITORIAL';
  const issueStr = post && post.issue ? (post.issue.number || '') : '';

  let textOverlay = '';
  if (showText) {
    const titleLen = title.length;
    let fontSize = 22;
    let maxCharsPerLine = 36;
    let lineHeight = 28;

    if (titleLen > 90) {
      fontSize = 14;
      maxCharsPerLine = 58;
      lineHeight = 18;
    } else if (titleLen > 65) {
      fontSize = 16;
      maxCharsPerLine = 48;
      lineHeight = 21;
    } else if (titleLen > 40) {
      fontSize = 18;
      maxCharsPerLine = 40;
      lineHeight = 24;
    }

    const scaleFactor = width / 800;
    const finalFontSize = Math.max(12, Math.round(fontSize * scaleFactor));
    const finalLineHeight = Math.max(16, Math.round(lineHeight * scaleFactor));
    const finalMaxChars = Math.max(25, Math.round(maxCharsPerLine / scaleFactor));

    const lines = wrapTitleText(title, finalMaxChars);
    const cappedLines = lines.slice(0, 3);
    if (lines.length > 3) {
      cappedLines[2] = cappedLines[2].slice(0, -3) + '...';
    }

    const padX = Math.round(20 * scaleFactor);
    const padY = Math.round(14 * scaleFactor);
    const kickerFontSize = Math.max(10, Math.round(11 * scaleFactor));

    const textBlockHeight = (cappedLines.length * finalLineHeight) + kickerFontSize + Math.round(10 * scaleFactor);
    const rectHeight = textBlockHeight + (padY * 2);

    const marginX = Math.round(16 * scaleFactor);
    const marginY = Math.round(16 * scaleFactor);
    const rectX = marginX;
    const rectY = height - rectHeight - marginY;
    const rectW = width - (marginX * 2);

    const kickerY = rectY + padY + kickerFontSize;
    const firstLineY = kickerY + Math.round(12 * scaleFactor) + (finalFontSize * 0.75);

    const titleLinesSvg = cappedLines.map((lineText, idx) => {
      const lineY = Math.round(firstLineY + (idx * finalLineHeight));
      return `<text x="${rectX + padX}" y="${lineY}" fill="#ffffff" font-family="Fraunces, 'Lora', Georgia, serif" font-size="${finalFontSize}" font-weight="bold">${escapeXml(lineText)}</text>`;
    }).join('\n');

    const accentColor = LANG_ACCENTS[lang] || '#f59e0b';

    textOverlay = `
      <g class="cover-text-overlay">
        <rect class="cover-overlay-box" x="${rectX}" y="${rectY}" width="${rectW}" height="${rectHeight}" rx="8" fill="rgba(15, 23, 42, 0.82)" backdrop-filter="blur(6px)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        <text x="${rectX + padX}" y="${kickerY}" fill="${accentColor}" font-family="Fraunces, 'Lora', Georgia, serif" font-size="${kickerFontSize}" font-weight="bold" letter-spacing="1.5">${escapeXml(kicker.toUpperCase())} ${escapeXml(issueStr ? '• ' + issueStr : '')}</text>
        ${titleLinesSvg}
      </g>
    `;
  }

  const collagePrng = createPRNG(`${seed}-collage`);
  const c1 = palette[0] || '#1e293b';
  const c2 = palette[1] || '#0d9488';
  const c3 = palette[2] || '#f59e0b';
  const bg = palette[3] || '#faf7f2';

  // 1. Cut-out collage layer (overlapping paper shapes with soft drop shadow)
  const paperCount = collagePrng.rangeInt(2, 4);
  let paperShapes = '';

  for (let i = 0; i < paperCount; i++) {
    const pw = collagePrng.rangeInt(Math.round(width * 0.25), Math.round(width * 0.42));
    const ph = collagePrng.rangeInt(Math.round(height * 0.32), Math.round(height * 0.55));
    const px = collagePrng.rangeInt(Math.round(width * 0.08), Math.round(width * 0.55));
    const py = collagePrng.rangeInt(Math.round(height * 0.12), Math.round(height * 0.42));
    const rot = collagePrng.rangeInt(-12, 12);
    const color = collagePrng.pick([bg, '#ffffff', c2, c3]);
    const strokeColor = collagePrng.pick([c1, c2]);

    paperShapes += `
      <g transform="rotate(${rot} ${px + pw/2} ${py + ph/2})">
        <rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="6" fill="${color}" opacity="0.82" stroke="${strokeColor}" stroke-width="1.5" filter="url(#soft-shadow)" />
      </g>
    `;
  }

  // 2. Hand-drawn sketchy underline path
  const ulX1 = collagePrng.rangeInt(40, 100);
  const ulX2 = ulX1 + collagePrng.rangeInt(180, 280);
  const ulY = height - collagePrng.rangeInt(30, 60);
  const midX = Math.round((ulX1 + ulX2) / 2);
  const midY = ulY + collagePrng.rangeInt(-8, 8);
  const underlineSvg = `
    <g class="cover-sketchy-underline">
      <path d="M ${ulX1} ${ulY} Q ${midX} ${midY} ${ulX2} ${ulY + collagePrng.rangeInt(-3, 3)}" stroke="${c3}" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.85" />
      <path d="M ${ulX1 + 10} ${ulY + 4} Q ${midX} ${midY + 4} ${ulX2 - 10} ${ulY + 2}" stroke="${c2}" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6" />
    </g>
  `;

  // 3. Masthead-style label tag
  const desk = post ? (post.desk || 'Front Page') : 'Front Page';
  const labelText = `COSY GAZETTE • ${desk.toUpperCase()}`;
  const labelW = Math.min(width - 40, Math.max(220, labelText.length * 8 + 36));
  const labelH = 32;
  const labelX = 20;
  const labelY = 20;

  const mastheadLabelSvg = `
    <g class="cover-masthead-label" filter="url(#soft-shadow)">
      <rect x="${labelX}" y="${labelY}" width="${labelW}" height="${labelH}" rx="4" fill="${c1}" opacity="0.92" stroke="${c2}" stroke-width="1.5" />
      <text x="${labelX + 14}" y="${labelY + 21}" fill="#ffffff" font-family="Fraunces, 'Lora', Georgia, serif" font-size="11" font-weight="bold" letter-spacing="1.4">${escapeXml(labelText)}</text>
    </g>
  `;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" class="cosy-cover-art" data-motif="${motif}" data-seed="${escapeXml(seed)}" data-lang="${lang}">
      <defs>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.18" />
        </filter>
        <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.06" />
          </feComponentTransfer>
          <feBlend mode="multiply" in="SourceGraphic" result="blend" />
        </filter>
      </defs>
      <style>
        @media (prefers-reduced-motion: reduce) {
          .cosy-cover-art * { animation: none !important; transition: none !important; }
        }
      </style>
      ${artworkSvg}
      ${paperShapes}
      ${underlineSvg}
      ${mastheadLabelSvg}
      ${textOverlay}
      <rect width="${width}" height="${height}" filter="url(#paper-grain)" opacity="0.6" pointer-events="none" />
    </svg>
  `.trim();
}

/** Renders a section divider SVG string */
export function renderSectionDivider(post, options = {}) {
  const width = options.width || 600;
  const height = options.height || 40;

  const { palette, seed } = resolveArtDirection(post);
  const prng = createPRNG(`${seed}-divider`);

  const color1 = palette[0] || '#1e293b';
  const color2 = palette[1] || '#0d9488';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" preserveAspectRatio="xMidYMid slice" class="cosy-section-divider">
      <line x1="0" y1="${height/2}" x2="${width}" y2="${height/2}" stroke="${color1}" stroke-width="1.5" opacity="0.3" stroke-dasharray="4 4" />
      <circle cx="${width/2}" cy="${height/2}" r="6" fill="${color2}" />
      <circle cx="${width/2 - 20}" cy="${height/2}" r="3" fill="${color1}" opacity="0.6" />
      <circle cx="${width/2 + 20}" cy="${height/2}" r="3" fill="${color1}" opacity="0.6" />
    </svg>
  `.trim();
}

/** Renders a decorative Pull Quote Card SVG string */
export function renderPullQuoteCard(quote, post, options = {}) {
  const width = options.width || 600;
  const height = options.height || 200;

  const { palette, seed } = resolveArtDirection(post);
  const prng = createPRNG(`${seed}-quote`);

  const bg = palette[3] || '#faf7f2';
  const accent = palette[0] || '#1e293b';
  const border = palette[1] || '#0d9488';

  const textStr = typeof quote === 'string' ? quote : (quote.quote || '');
  const authorStr = typeof quote === 'object' && quote.attribution ? quote.attribution : '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" class="cosy-pullquote-card">
      <rect x="4" y="4" width="${width - 8}" height="${height - 8}" rx="12" fill="${bg}" stroke="${border}" stroke-width="2" stroke-dasharray="6 4" />
      <text x="30" y="50" fill="${border}" font-family="Fraunces, serif" font-size="48" opacity="0.4">“</text>
      <text x="50" y="85" fill="${accent}" font-family="Fraunces, serif" font-size="18" font-style="italic">${escapeXml(textStr.length > 90 ? textStr.slice(0, 87) + '...' : textStr)}</text>
      ${authorStr ? `<text x="${width - 50}" y="${height - 35}" fill="${border}" font-family="DM Sans, sans-serif" font-size="13" font-weight="bold" text-anchor="end">— ${escapeXml(authorStr)}</text>` : ''}
    </svg>
  `.trim();
}

/** Renders a Vocabulary Word Card SVG string */
export function renderWordCard(wordData, post, options = {}) {
  const width = options.width || 320;
  const height = options.height || 180;

  const { palette, seed } = resolveArtDirection(post);
  const prng = createPRNG(`${seed}-word-${wordData.word || 'vocab'}`);

  const bg = palette[3] || '#f7fafc';
  const textClr = palette[0] || '#1e293b';
  const accent = palette[1] || '#319795';

  const word = wordData.word || 'Word';
  const pos = wordData.pos || 'noun';
  const definition = wordData.definition || wordData.meaning || '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" class="cosy-word-card">
      <rect width="${width}" height="${height}" rx="10" fill="${bg}" stroke="${accent}" stroke-width="1.5" />
      <rect x="0" y="0" width="${width}" height="8" rx="4" fill="${accent}" />
      <text x="20" y="45" fill="${textClr}" font-family="Fraunces, serif" font-size="22" font-weight="bold">${escapeXml(word)}</text>
      <text x="20" y="68" fill="${accent}" font-family="DM Sans, sans-serif" font-size="12" font-style="italic">${escapeXml(pos)}</text>
      <line x1="20" y1="80" x2="${width - 20}" y2="80" stroke="${accent}" opacity="0.2" />
      <text x="20" y="110" fill="${textClr}" font-family="DM Sans, sans-serif" font-size="13" opacity="0.9">${escapeXml(definition.length > 70 ? definition.slice(0, 67) + '...' : definition)}</text>
    </svg>
  `.trim();
}
