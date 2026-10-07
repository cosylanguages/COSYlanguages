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

/** Resolves artDirection configuration with sensible defaults */
export function resolveArtDirection(post) {
  const art = (post && post.artDirection) || {};
  const desk = post ? (post.desk || 'Front Page') : 'Front Page';
  const slug = post ? (post.slug || 'cosy-post') : 'cosy-post';

  const defaultPalette = DEFAULT_PALETTES[desk] || DEFAULT_PALETTES['Front Page'];
  const palette = (art.palette && art.palette.length >= 2) ? art.palette : defaultPalette;

  // Map desk to motif if motif not specified
  const deskMotifMap = {
    'Front Page': 'paper-cut',
    'Words': 'riso-print',
    'Grammar Made Cosy': 'window-light',
    'Say It': 'gingham-knit',
    'Culture & Quotes': 'ticket-stub',
    'Long Reads': 'doodle-border',
    'Cosy Events': 'vintage-stamp',
    'The Podcast': 'tea-stain',
    'Back Issues': 'paper-cut'
  };

  const motif = art.motif || deskMotifMap[desk] || 'paper-cut';
  const seed = art.seed || slug;
  const coverOverride = art.coverOverride || null;

  return { palette, motif, seed, coverOverride, desk, slug };
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="cosy-cover-art cosy-cover-override">
        <image href="${escapeXml(coverOverride)}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice" />
      </svg>
    `;
  }

  const prng = createPRNG(seed);
  const motifFn = MOTIFS[motif] || MOTIFS['paper-cut'];
  const artworkSvg = motifFn({ width, height, palette, prng });

  const title = post ? post.title || 'COSY Gazette' : 'COSY Gazette';
  const kicker = post ? (post.kicker || post.category || 'EDITORIAL') : 'EDITORIAL';
  const issueStr = post && post.issue ? (post.issue.number || '') : '';

  let textOverlay = '';
  if (showText) {
    textOverlay = `
      <g class="cover-text-overlay">
        <rect x="20" y="${height - 110}" width="${width - 40}" height="90" rx="8" fill="rgba(15, 23, 42, 0.75)" backdrop-filter="blur(4px)" />
        <text x="36" y="${height - 82}" fill="#f59e0b" font-family="Fraunces, serif" font-size="12" font-weight="bold" letter-spacing="1.5">${escapeXml(kicker.toUpperCase())} ${escapeXml(issueStr ? '• ' + issueStr : '')}</text>
        <text x="36" y="${height - 48}" fill="#ffffff" font-family="Fraunces, serif" font-size="20" font-weight="bold">${escapeXml(title.length > 55 ? title.slice(0, 52) + '...' : title)}</text>
      </g>
    `;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%" class="cosy-cover-art" data-motif="${motif}" data-seed="${escapeXml(seed)}">
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
  const prng = createPRNG(`${seed}-divider`);

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

  const { palette, seed } = resolveArtDirection(post);
  const prng = createPRNG(`${seed}-quote`);

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

  const { palette, seed } = resolveArtDirection(post);
  const prng = createPRNG(`${seed}-word-${wordData.word || 'vocab'}`);

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
