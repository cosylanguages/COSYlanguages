/**
 * blog/js/art/generator.js
 * Primary entry point for rendering cover art, section dividers, pull-quote cards,
 * and word cards for COSY magazine posts.
 */

import { createPRNG } from './rng.js';
import { MOTIFS, DEFAULT_PALETTES, LANG_PALETTE_ACCENTS } from './motifs.js';

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Get base slug without language suffix or translationOf key */
export function getBaseSlug(post) {
  if (!post) return 'cosy-post';
  if (post.translationOf) return post.translationOf;
  const slug = post.slug || 'cosy-post';
  return slug.replace(/-(fr|it|ru|el|es|de|pt|hy|ka|tt|ba|br|cv)$/, '');
}

/** Hash string deterministically to a motif name */
export function hashStringToMotif(str) {
  const motifKeys = Object.keys(MOTIFS);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % motifKeys.length;
  return motifKeys[index];
}

/** Resolves artDirection configuration with sensible defaults */
export function resolveArtDirection(post) {
  const art = (post && post.artDirection) || {};
  const desk = post ? (post.desk || 'Front Page') : 'Front Page';
  const baseSlug = getBaseSlug(post);
  const lang = post ? (post.language || 'en') : 'en';

  const defaultPalette = DEFAULT_PALETTES[desk] || DEFAULT_PALETTES['Front Page'];
  let palette = (art.palette && art.palette.length >= 2) ? [...art.palette] : [...defaultPalette];

  // Adjust language accent if available to give variants distinct color accents
  if (LANG_PALETTE_ACCENTS[lang]) {
    palette[0] = LANG_PALETTE_ACCENTS[lang];
  }

  // Choose motif: art.motif if explicit, otherwise deterministic hash of baseSlug
  const motif = art.motif || hashStringToMotif(baseSlug);
  const seed = art.seed || baseSlug;
  const coverOverride = art.coverOverride || null;

  return { palette, motif, seed, coverOverride, desk, slug: post ? post.slug : baseSlug, baseSlug };
}

/** Helper to wrap and fit title into lines with dynamic font scaling */
export function formatTitleSvg(title, maxWidth, maxHeight, maxFontSize = 24) {
  const chars = Array.from(title || '');
  if (chars.length === 0) return { fontPx: maxFontSize, lines: [] };

  // Heuristic average char width relative to font size across Latin/Cyrillic/Greek/Georgian/Armenian
  const charWidthRatio = 0.62;

  let fontPx = maxFontSize;
  let lines = [];

  for (; fontPx >= 12; fontPx -= 2) {
    const maxCharsPerLine = Math.floor(maxWidth / (fontPx * charWidthRatio));
    const words = title.split(' ');
    lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine ? `${currentLine} ${word}` : word;

      if (Array.from(testLine).length <= maxCharsPerLine) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        // Handle single huge word longer than maxCharsPerLine
        if (Array.from(word).length > maxCharsPerLine) {
          currentLine = word.slice(0, maxCharsPerLine - 1) + '…';
        } else {
          currentLine = word;
        }
      }
    }
    if (currentLine) lines.push(currentLine);

    const totalHeight = lines.length * (fontPx * 1.25);
    if (totalHeight <= maxHeight && lines.length <= 4) {
      break; // Fits!
    }
  }

  return { fontPx, lines };
}

/**
 * Renders cover artwork as an inline SVG string.
 * Supports artDirection.coverOverride for custom hand-drawn image artwork.
 */
export function renderCover(post, options = {}) {
  const width = options.width || 800;
  const height = options.height || 450;
  const showText = options.showText !== false;

  const { palette, motif, seed, coverOverride } = resolveArtDirection(post);

  // Handle hand-made artwork override
  if (coverOverride) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="cosy-cover-art cosy-cover-override" preserveAspectRatio="none">
        <image href="${escapeXml(coverOverride)}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice" />
      </svg>
    `.trim();
  }

  const prng = createPRNG(seed);
  const motifFn = MOTIFS[motif] || MOTIFS['paper-cut'];
  const artworkSvg = motifFn({ width, height, palette, prng });

  const title = post ? post.title || 'COSY Gazette' : 'COSY Gazette';
  const kicker = post ? (post.kicker || post.category || 'EDITORIAL') : 'EDITORIAL';
  const issueStr = post && post.issue ? (post.issue.number || '') : '';

  let textOverlay = '';
  if (showText) {
    const cardMarginX = Math.round(width * 0.04);
    const cardWidth = width - (cardMarginX * 2);
    const maxTitleWidth = cardWidth - 32;

    const kickerFontPx = height > 300 ? 12 : 10;
    const { fontPx, lines } = formatTitleSvg(title, maxTitleWidth, height * 0.45, height > 300 ? 20 : 15);

    const titleHeight = lines.length * (fontPx * 1.25);
    const requiredCardHeight = Math.round(36 + titleHeight + 16);
    const cardHeight = Math.max(90, Math.min(requiredCardHeight, height * 0.5));
    const cardY = height - cardHeight - Math.round(height * 0.04);
    const kickerY = cardY + 24;

    const titleSpans = lines.map((line, idx) => {
      const lineY = kickerY + 20 + (idx * fontPx * 1.25);
      return `<text x="${cardMarginX + 16}" y="${Math.round(lineY)}" fill="#ffffff" font-family="Fraunces, serif" font-size="${fontPx}" font-weight="bold" class="cover-title-line" data-y="${Math.round(lineY)}">${escapeXml(line)}</text>`;
    }).join('\n');

    textOverlay = `
      <g class="cover-text-overlay" data-card-y="${cardY}" data-card-h="${cardHeight}">
        <rect x="${cardMarginX}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="8" fill="rgba(15, 23, 42, 0.82)" backdrop-filter="blur(4px)" />
        <text x="${cardMarginX + 16}" y="${kickerY}" fill="#f59e0b" font-family="Fraunces, serif" font-size="${kickerFontPx}" font-weight="bold" letter-spacing="1.2" class="cover-kicker-text">${escapeXml(kicker.toUpperCase())} ${escapeXml(issueStr ? '• ' + issueStr : '')}</text>
        ${titleSpans}
      </g>
    `;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="cosy-cover-art" data-motif="${motif}" data-seed="${escapeXml(seed)}" preserveAspectRatio="none">
      <style>
        @media (prefers-reduced-motion: reduce) {
          .cosy-cover-art * { animation: none !important; transition: none !important; }
        }
      </style>
      ${artworkSvg}
      ${textOverlay}
    </svg>
  `.trim();
}

/** Renders a section divider SVG string */
export function renderSectionDivider(post, options = {}) {
  const width = options.width || 600;
  const height = options.height || 40;

  const { palette, seed } = resolveArtDirection(post);
  const color1 = palette[0] || '#1e293b';
  const color2 = palette[1] || '#0d9488';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" class="cosy-section-divider">
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

  const { palette } = resolveArtDirection(post);
  const bg = palette[3] || '#faf7f2';
  const accent = palette[0] || '#1e293b';
  const border = palette[1] || '#0d9488';

  const textStr = typeof quote === 'string' ? quote : (quote.quote || '');
  const authorStr = typeof quote === 'object' && quote.attribution ? quote.attribution : '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="cosy-pullquote-card">
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

  const { palette } = resolveArtDirection(post);
  const bg = palette[3] || '#f7fafc';
  const textClr = palette[0] || '#1e293b';
  const accent = palette[1] || '#319795';

  const word = wordData.word || 'Word';
  const pos = wordData.pos || 'noun';
  const definition = wordData.definition || wordData.meaning || '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="cosy-word-card">
      <rect width="${width}" height="${height}" rx="10" fill="${bg}" stroke="${accent}" stroke-width="1.5" />
      <rect x="0" y="0" width="${width}" height="8" rx="4" fill="${accent}" />
      <text x="20" y="45" fill="${textClr}" font-family="Fraunces, serif" font-size="22" font-weight="bold">${escapeXml(word)}</text>
      <text x="20" y="68" fill="${accent}" font-family="DM Sans, sans-serif" font-size="12" font-style="italic">${escapeXml(pos)}</text>
      <line x1="20" y1="80" x2="${width - 20}" y2="80" stroke="${accent}" opacity="0.2" />
      <text x="20" y="110" fill="${textClr}" font-family="DM Sans, sans-serif" font-size="13" opacity="0.9">${escapeXml(definition.length > 70 ? definition.slice(0, 67) + '...' : definition)}</text>
    </svg>
  `.trim();
}
