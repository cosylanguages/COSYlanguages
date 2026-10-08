#!/usr/bin/env node
/**
 * scripts/build-blog.js
 * Builds static blog post HTML pages and generates blog/posts.json & blog/index.json directly from JSON source files.
 *
 * Usage: node scripts/build-blog.js
 */

const fs = require('fs');
const path = require('path');
let marked;
try {
  const markedModule = require('marked');
  marked = markedModule.marked || markedModule;
} catch (e) {
  // Graceful fallback if marked is not available
}

const { validatePostSchema } = require('./validate-blog-schema.js');
const { generatePodcastRss } = require('./generate-podcast-rss.js');

const BLOG_DIR = path.join(__dirname, '..', 'blog');
const POSTS_DIR = path.join(BLOG_DIR, 'posts');
const GUIDES_FILE = path.join(BLOG_DIR, 'guides.json');
const POSTS_JSON = path.join(BLOG_DIR, 'posts.json');
const INDEX_JSON = path.join(BLOG_DIR, 'index.json');

const DESKS_CATALOG = [
  { key: 'Front Page', i18n_key: 'desk_front_page', icon: '📰', order: 1 },
  { key: 'Words', i18n_key: 'desk_words', icon: '🔤', order: 2 },
  { key: 'Grammar Made Cosy', i18n_key: 'desk_grammar_made_cosy', icon: '📐', order: 3 },
  { key: 'Say It', i18n_key: 'desk_say_it', icon: '🗣️', order: 4 },
  { key: 'Culture & Quotes', i18n_key: 'desk_culture_quotes', icon: '🎭', order: 5 },
  { key: 'Long Reads', i18n_key: 'desk_long_reads', icon: '📖', order: 6 },
  { key: 'Cosy Events', i18n_key: 'desk_cosy_events', icon: '🎉', order: 7 },
  { key: 'The Podcast', i18n_key: 'desk_the_podcast', icon: '🎙️', order: 8 },
  { key: 'Back Issues', i18n_key: 'desk_back_issues', icon: '🗄️', order: 9 }
];

const RESERVED_SLUGS = new Set([
  'index',
  'posts',
  'guides',
  'top-10-verbs',
  'top-100-a0-a1'
]);

const LANG_FLAG_MAP = {
  en: '🇬🇧',
  fr: '🇫🇷',
  it: '🇮🇹',
  ru: '🇷🇺',
  el: '🇬🇷',
  es: '🇪🇸',
  de: '🇩🇪',
  pt: '🇵🇹',
  hy: '🇦🇲',
  ka: '🇬🇪',
  tt: '🌐',
  ba: '🌐',
  br: '🌐'
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function parseFormattedText(text) {
  if (!text) return '';
  if (marked && typeof marked.parseInline === 'function') {
    return marked.parseInline(text);
  }
  return escapeHtml(text);
}

function getDocumentTitle(title) {
  const fullTitle = `${title} — COSY Gazette`;
  const characters = Array.from(fullTitle);
  let documentTitle = characters.length <= 70
    ? fullTitle
    : `${characters.slice(0, 69).join('').trimEnd()}…`;

  while (escapeHtml(documentTitle).length > 70) {
    documentTitle = `${Array.from(documentTitle).slice(0, -2).join('').trimEnd()}…`;
  }
  return documentTitle;
}

function renderBlockToHtml(block, index, post) {
  if (!block || typeof block !== 'object') return '';

  const format = post.format || 'essay';

  switch (block.type) {
    case 'heading': {
      const lvl = Math.min(6, Math.max(1, block.level || 2));
      if (format === 'qa' && block.text.startsWith('Q:')) {
        return `<h${lvl} class="qa-question">${parseFormattedText(block.text)}</h${lvl}>`;
      }
      return `<h${lvl} class="gazette-heading">${parseFormattedText(block.text)}</h${lvl}>`;
    }
    case 'paragraph': {
      const isFirstParagraph = (index === 0 || (index === 1 && post.blocks[0]?.type === 'heading'));
      const dropCapClass = isFirstParagraph ? ' gazette-drop-cap' : '';
      if (format === 'qa' && block.text.startsWith('A:')) {
        return `<div class="qa-answer"><p>${parseFormattedText(block.text.replace(/^A:\s*/, ''))}</p></div>`;
      }
      return `<p class="${dropCapClass}">${parseFormattedText(block.text)}</p>`;
    }
    case 'list-item': {
      const tag = block.ordered ? 'ol' : 'ul';
      if (format === 'ranking') {
        const itemsHtml = (block.items || []).map((item, idx) => `
<div class="rank-item">
  <div class="rank-number">${idx + 1}</div>
  <div class="rank-content">${parseFormattedText(item)}</div>
</div>`).join('\n');
        return `<div class="ranking-list">${itemsHtml}</div>`;
      }
      const itemsHtml = (block.items || []).map(item => `<li>${parseFormattedText(item)}</li>`).join('\n');
      return `<${tag} class="gazette-list">\n${itemsHtml}\n</${tag}>`;
    }
    case 'table': {
      // Two-column spread for Instead of / Try using tables
      const headersHtml = (block.headers || []).map(h => `<th>${parseFormattedText(h)}</th>`).join('');
      const rowsHtml = (block.rows || []).map(row => {
        const cellsHtml = row.map(cell => `<td>${parseFormattedText(cell)}</td>`).join('');
        return `<tr>${cellsHtml}</tr>`;
      }).join('\n');
      const captionHtml = block.caption ? `<caption>${parseFormattedText(block.caption)}</caption>` : '';

      return `
<div class="two-page-spread">
  <div class="spread-column">
    <div class="table-wrapper">
      <table class="gazette-table">
        ${captionHtml}
        <thead><tr>${headersHtml}</tr></thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  </div>
</div>`;
    }
    case 'example': {
      return `
<div class="gazette-marginalia">
  <div class="gazette-marginalia-title">💡 CONVERSATIONAL MODEL</div>
  <p style="font-size: 1.1rem; font-weight: 700; color: var(--post-palette-accent); margin-bottom: 0.25rem;">${parseFormattedText(block.targetText)}</p>
  <p style="font-size: 0.95rem; margin: 0;">${parseFormattedText(block.gloss)}</p>
  ${block.context ? `<p style="font-size: 0.85rem; font-style: italic; color: var(--blog-ink-muted); margin-top: 0.25rem;">Context: ${parseFormattedText(block.context)}</p>` : ''}
</div>`;
    }
    case 'pronunciation': {
      return `
<div class="pronunciation-card" style="display: flex; align-items: center; gap: 1rem; background: var(--blog-paper-aged); border: 1px solid var(--blog-border-delicate); padding: 0.75rem 1rem; border-radius: 8px; margin: 1rem 0;">
  <span style="font-weight: 700; font-size: 1.1rem;">${parseFormattedText(block.word)}</span>
  <span style="font-family: var(--blog-font-mono); color: var(--post-palette-accent);">[${escapeHtml(block.ipa)}]</span>
  ${block.audioUrl ? `<audio controls src="${escapeHtml(block.audioUrl)}"></audio>` : ''}
</div>`;
    }
    case 'pullquote': {
      return `
<blockquote class="gazette-pullquote">
  “${parseFormattedText(block.quote)}”
  ${block.attribution ? `<cite>— ${escapeHtml(block.attribution)}</cite>` : ''}
</blockquote>`;
    }
    case 'image': {
      return `
<figure class="photo-card" style="margin: 1.5rem 0;">
  <img src="${escapeHtml(block.url)}" alt="${escapeHtml(block.alt)}" loading="lazy">
  ${block.caption ? `<figcaption class="photo-caption">${parseFormattedText(block.caption)}</figcaption>` : ''}
</figure>`;
    }
    case 'quiz': {
      const optionsHtml = (block.options || []).map((opt, i) => `
<button type="button" class="quiz-option-btn" data-correct="${i === block.correctIndex}">
  ${i === block.correctIndex ? '✅' : '⚪'} ${parseFormattedText(opt)}
</button>`).join('');
      return `
<div class="quiz-card format-quiz">
  <h4 style="font-family: var(--post-font-display); color: var(--post-palette-accent); margin-bottom: 0.5rem;">❓ ${parseFormattedText(block.question)}</h4>
  <div class="quiz-options">${optionsHtml}</div>
  ${block.explanation ? `<p style="font-size: 0.9rem; font-style: italic; margin-top: 0.5rem; color: var(--blog-ink-muted);">${parseFormattedText(block.explanation)}</p>` : ''}
</div>`;
    }
    case 'culture-bite': {
      return `
<div class="gazette-marginalia" style="border-left: 4px solid var(--post-palette-accent);">
  <div class="gazette-marginalia-title">📌 ${parseFormattedText(block.title)}</div>
  <p style="margin: 0; font-size: 0.95rem;">${parseFormattedText(block.content)}</p>
</div>`;
    }
    case 'quote-wall': {
      const quotesHtml = (block.quotes || []).map(q => `
<div class="quote-tile">
  <div class="quote-tile-text">“${parseFormattedText(q.quote)}”</div>
  <div class="quote-tile-author">— ${escapeHtml(q.author)}</div>
</div>`).join('');
      return `<div class="format-quote-wall" style="margin: 1.5rem 0;">${quotesHtml}</div>`;
    }
    case 'links': {
      return `
<div class="links-block" style="margin: 1.5rem 0;">
  <a href="${escapeHtml(block.url)}" class="stamp-sticker" style="text-decoration: none; display: inline-block;">${parseFormattedText(block.label)}</a>
</div>`;
    }
    default:
      return '';
  }
}

function renderLanguageSwitcherHtml(currentPost, allPosts) {
  const baseSlug = currentPost.translationOf || (currentPost.slug.replace(/-(fr|it|ru|el)$/, ''));
  const variants = allPosts.filter(p => p.slug === baseSlug || p.translationOf === baseSlug);

  if (variants.length <= 1) return '';

  const linksHtml = variants.map(v => {
    const flag = LANG_FLAG_MAP[v.language] || '🌐';
    const langCode = v.language.toUpperCase();
    if (v.slug === currentPost.slug) {
      return `<span class="lang-switcher-active stamp-sticker" style="background: var(--post-palette-accent); color: #ffffff;">${flag} ${langCode}</span>`;
    }
    return `<a href="${v.slug}.html" class="lang-switcher-link stamp-sticker" style="text-decoration: none;">${flag} ${langCode}</a>`;
  }).join(' ');

  return `
<div class="language-switcher-bar" style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin: 0.5rem 0;">
  ${linksHtml}
</div>`;
}

async function buildBlog() {
  console.log('🚀 Starting COSYlanguages Unified Blog Build Pipeline...');

  const artGen = await import('../blog/js/art/generator.js');

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  // 1. Load Guides metadata
  let guides = [];
  if (fs.existsSync(GUIDES_FILE)) {
    try {
      guides = JSON.parse(fs.readFileSync(GUIDES_FILE, 'utf-8'));
    } catch (e) {
      console.error('❌ Failed to parse blog/guides.json:', e.message);
      process.exit(1);
    }
  }

  const guideSlugs = new Set(guides.map(g => g.slug));

  // 2. Load JSON post files from blog/posts/*.json
  const jsonFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
  const allPosts = [];
  const postSlugs = new Set();
  const errors = [];
  const issuesSet = new Map();

  jsonFiles.forEach(file => {
    const filePath = path.join(POSTS_DIR, file);
    let postData;
    try {
      postData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch (e) {
      errors.push(`[${file}] JSON Parse Error: ${e.message}`);
      return;
    }

    const valErrors = validatePostSchema(postData, file);
    if (valErrors.length > 0) {
      errors.push(...valErrors);
      return;
    }

    const slug = postData.slug;
    if (RESERVED_SLUGS.has(slug) || guideSlugs.has(slug)) {
      errors.push(`[${file}] Slug "${slug}" collides with a reserved system page or guide slug.`);
    }
    if (postSlugs.has(slug)) {
      errors.push(`[${file}] Duplicate slug "${slug}" detected.`);
    }
    postSlugs.add(slug);

    if (postData.issue && postData.issue.number) {
      issuesSet.set(postData.issue.number, {
        number: postData.issue.number,
        title: postData.issue.title
      });
    }

    allPosts.push(postData);
  });

  if (errors.length > 0) {
    console.error('❌ Blog Schema & Post Validation Failed:');
    errors.forEach(err => console.error('  - ' + err));
    process.exit(1);
  }

  // 3. Filter published posts
  const publishedPosts = allPosts.filter(p => !p.draft);
  console.log(`📝 Processing ${publishedPosts.length} published post(s) (${allPosts.length - publishedPosts.length} draft(s) skipped)...`);

  // 4. Generate HTML pages for non-draft posts
  publishedPosts.forEach(post => {
    const htmlPath = path.join(BLOG_DIR, `${post.slug}.html`);
    const renderedBlocksHtml = (post.blocks || []).map((b, idx) => renderBlockToHtml(b, idx, post)).join('\n');
    const langSwitcherHtml = renderLanguageSwitcherHtml(post, publishedPosts);

    const art = post.artDirection || {};
    const palette = art.palette || ['#0d9488', '#faf7f2', '#1e293b'];
    const fonts = art.fonts || { display: 'Fraunces', text: 'DM Sans', accent: 'Fraunces Italic' };

    const accentColor = palette[0] || '#0d9488';
    const bgColor = palette[1] || '#faf7f2';
    const textColor = palette[2] || '#1c1917';

    // Build inline SVG Cover Art
    const coverSvg = artGen.renderCover(post, { width: 800, height: 400, showText: false });

    const authorName = 'JY DM';
    const deskName = post.desk || 'Words';
    const formatClass = `format-${post.format || 'essay'}`;
    const issueNum = post.issue?.number || 'Vol. 2026.08';
    const issueTitle = post.issue?.title || 'COSY Editorial';

    const stageUrl = `${post.slug}.html?stage=1`;
    const scriptUrl = `${post.slug}.html?script=1`;

    const htmlContent = `<!DOCTYPE html>
<html lang="${escapeHtml(post.language)}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(getDocumentTitle(post.title))}</title>
    <meta name="description" content="${escapeHtml(post.dek)}">
    <link rel="icon" href="../images/logos/cosylanguages.png">
    <link rel="manifest" href="../apps/free-portal/manifest.json">
    <meta name="theme-color" content="${accentColor}">

    <!-- Self-hosted & Google Fonts with Latin, Cyrillic & Greek support -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,900;1,9..144,300;1,9..144,600&family=DM+Sans:wght@400;500;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../css/tokens.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/blog.css">
    <link rel="stylesheet" href="css/tokens.css">
    <link rel="stylesheet" href="css/magazine-templates.css">

    <style>
      :root {
        --post-palette-accent: ${accentColor};
        --post-palette-bg: ${bgColor};
        --post-palette-text: ${textColor};
        --post-font-display: '${escapeHtml(fonts.display)}', 'Fraunces', 'Lora', Georgia, serif;
        --post-font-body: '${escapeHtml(fonts.text)}', 'DM Sans', sans-serif;
      }
    </style>
</head>
<body class="blog-page gazette-container">

    <nav id="cosy-nav"></nav>

    <div class="blog-wrapper" style="max-width: 1080px; margin: 0 auto; padding: 1.5rem 1rem;">

        <!-- Gazette Slim Masthead -->
        <header class="gazette-masthead">
            <h1 class="gazette-masthead-title">COSY GAZETTE</h1>
            <div class="gazette-masthead-meta">
                <span>${escapeHtml(issueNum)} • ${escapeHtml(issueTitle)}</span>
                <span>DESK: ${escapeHtml(deskName).toUpperCase()}</span>
                <span>${escapeHtml(post.date)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-top: 0.75rem;">
              <a href="index.html" style="color: var(--post-palette-accent); text-decoration: none; font-weight: 700; font-size: 0.85rem;">← Back to Editorial Corner</a>
              <div style="display: flex; gap: 0.75rem;">
                <a href="${stageUrl}" class="stamp-sticker" style="text-decoration: none;">📺 Stage Mode</a>
                <a href="${scriptUrl}" class="stamp-sticker" style="text-decoration: none;">📜 Script Mode</a>
              </div>
            </div>
            ${langSwitcherHtml}
        </header>

        <!-- Full-Bleed Cover Art -->
        <div class="gazette-cover-wrapper" style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; border: 2px solid var(--blog-border-strong); box-shadow: var(--blog-shadow-paper);">
            ${coverSvg}
        </div>

        <!-- Article Lead Header -->
        <div class="article-lead-header" style="margin-bottom: 2rem;">
            <span class="editorial-kicker">${escapeHtml(post.kicker || deskName)}</span>
            <h1 class="cover-headline" style="font-family: var(--post-font-display); margin: 0.5rem 0 1rem 0;">${escapeHtml(post.title)}</h1>
            ${post.dek ? `<div class="editorial-dek">${escapeHtml(post.dek)}</div>` : ''}

            <!-- Byline Row -->
            <div class="post-card-meta" style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; font-size: var(--blog-text-xs); color: var(--blog-ink-muted); margin-top: 1rem; padding-top: 0.5rem; border-top: 1px solid var(--blog-border-delicate);">
                <span>By <strong>${escapeHtml(authorName)}</strong></span>
                <span>•</span>
                <span>📅 ${post.date}</span>
                <span>•</span>
                <span>⏱️ ${post.readingTime} min read</span>
                <span>•</span>
                <span class="stamp-sticker" style="padding: 0.15rem 0.4rem;">${escapeHtml(post.level)}</span>
                ${post.podcast ? `<span class="stamp-sticker" style="padding: 0.15rem 0.4rem; background: var(--post-palette-accent); color: #ffffff;">🎙️ EP. ${post.podcast.episode}</span>` : ''}
            </div>
        </div>

        <!-- Podcast Player Container -->
        ${post.podcast ? `<div id="podcast-box-container" style="margin-bottom: 2rem;"></div>` : ''}

        <!-- Main Content Area with Format Layout -->
        <main class="gazette-main-content ${formatClass}">
            <article class="post-full-content" style="line-height: 1.8; color: var(--blog-ink-primary);">
                ${renderedBlocksHtml}
            </article>
        </main>

        <!-- Folio Footer -->
        <div class="gazette-folio">
            <span>COSY GAZETTE • ${escapeHtml(issueNum)}</span>
            <span class="stamp-sticker">VERIFIED CELLTA STANDARD</span>
            <span>PUBLISHED BY COSYLANGUAGES</span>
        </div>

        <!-- Collapsed Founder Deck Colophon Block at End -->
        <section class="founder-presentation-card" style="margin-top: 3rem;" aria-label="Founder Presentation Deck Colophon">
            <div class="founder-card-header" style="padding: 1rem;">
                <div class="founder-info">
                    <div class="founder-avatar" style="width: 36px; height: 36px; font-size: 1rem; background: var(--post-palette-accent);">J</div>
                    <div class="founder-meta">
                        <h4 class="founder-title" style="font-size: 0.95rem; margin: 0;">JY DM — Founder's Colophon &amp; Editorial Deck</h4>
                        <span class="founder-subtitle" style="font-size: 0.8rem;">CELTA-aligned target-language guidance for ${escapeHtml(issueTitle)}</span>
                    </div>
                </div>
                <div class="founder-card-actions">
                    <button type="button" class="founder-expand-btn" aria-expanded="false" style="font-size: 0.8rem; padding: 0.35rem 0.6rem;">
                        <span>🎙️ Colophon Deck</span>
                    </button>
                </div>
            </div>
            <div class="founder-card-body">
                <div class="founder-card-notes">
                    <p style="font-size: 0.9rem;"><strong>Founder Notes:</strong> CELTA-aligned target-language guidance by JY DM for COSYmagazine ${escapeHtml(issueTitle)} edition.</p>
                </div>
            </div>
        </section>

    </div>

<footer>

  <div class="footer-inner">
    <div class="footer-brand">
      <div class="fb-logo">
        <img src="../images/logos/cosylanguages.png" alt="COSYlanguages logo" loading="lazy" decoding="async" width="38" height="38">
        <span class="fb-name">COSYlanguages</span>
      </div>
      <p data-translate-key="footer_fb_p">Your friendly corner to master new languages and connect with the world. 🌍</p>
    </div>
    <div class="footer-links-col">
      <h3 data-translate-key="footer_h5_courses">Courses</h3>
      <a href="../courses/index.html">All Courses 📖</a>
      <a href="../courses/general.html" data-translate-key="course_general">General Course 📖</a>
      <a href="../courses/spoken.html" data-translate-key="course_spoken">Spoken Course 🗣️</a>
      <a href="../courses/exam-preparation.html" data-translate-key="course_exam">Exam Preparation 📝</a>
      <a href="../courses/travelling.html" data-translate-key="course_travelling">Travelling Course ✈️</a>
      <a href="../courses/professional.html" data-translate-key="course_professional">Professional Course 💼</a>
      <a href="../courses/relocation.html" data-translate-key="course_relocation">Relocation Course 🏡</a>
    </div>
    <div class="footer-links-col">
      <h3 data-translate-key="footer_h5_explore">Explore</h3>
      <a href="https://cosylanguages.github.io/COSYmanuals/" target="_blank" rel="noopener">Manuals Hub 🔒 (for students)</a>
      <a href="../comparative/index.html">Grammar Atlas 🌐</a>
      <a href="../placement-quiz.html">Placement Quiz 📝</a>
      <a href="../hybrid/index.html">Hybrid &amp; Community 🌿</a>
      <a href="../blog/index.html">Blog &amp; Top 100 📝</a>
      <a href="../apps/index.html">Reference Engines 🔎</a>
      <a href="../apps/premium-events/index.html">Events 🎉</a>
    </div>
    <div class="footer-links-col">
      <h3>Project</h3>
      <a href="../about/index.html">Our Story 🏡</a>
      <a href="../privacy.html">Privacy &amp; Safety 🛡️</a>
    </div>
    <div class="footer-links-col">
      <h3 data-translate-key="footer_h5_contact">Contact</h3>
      <a href="https://wa.me/330766784195">WhatsApp 📱</a>
      <a href="https://t.me/cosylanguagesproject">Telegram ✈️</a>
      <a href="mailto:cosylanguages@gmail.com">cosylanguages@gmail.com ✉️</a>
    </div>
  </div>
  <div class="footer-bottom" data-translate-key="footer_copy">© 2020–2026 COSYlanguages, All rights reserved</div>

</footer>

    <script src="../js/data/languages.js"></script>
    <script src="../js/core/engine.js"></script>
    <script src="../js/core/i18n.js"></script>
    <script src="../js/core/ui.js"></script>
    <script src="../js/pages/flipbook.js"></script>
    ${post.podcast ? `
    <script type="module">
      import { PodcastBoxComponent } from './js/podcast-box.js';
      const container = document.getElementById('podcast-box-container');
      if (container) {
        new PodcastBoxComponent({
          container,
          post: ${JSON.stringify(post)}
        });
      }
    </script>` : ''}
</body>
</html>
`;

    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
    console.log(`  ✓ Generated ${post.slug}.html`);
  });

  // 5. Generate blog/posts.json
  const postsJsonList = [
    ...publishedPosts.map(p => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      updated: p.updated || null,
      category: p.desk || 'Words',
      summary: p.dek || '',
      author: 'JY DM',
      reading_time: p.readingTime || 5,
      cover_image: p.artDirection?.coverOverride || '',
      tags: p.tags || [],
      featured: Boolean(p.featured),
      type: 'post',
      url: `${p.slug}.html`,
      issue_volume: p.issue?.number || 'Vol. 2026.08',
      issue_title: p.issue?.title || 'COSY Editorial',
      cefr_level: p.level || 'A0–B2',
      vibe: 'Editorial Vibe',
      founder_notes: `CELTA-aligned target-language guidance by JY DM for COSYmagazine ${p.issue?.title || 'COSY Editorial'} edition.`,
      audio_podcast: Boolean(p.podcast?.audioUrl),
      artDirection: p.artDirection
    })),
    ...guides.map(g => ({
      slug: g.slug,
      title: g.title,
      date: g.date,
      updated: g.updated || null,
      category: g.category || 'Resource List',
      summary: g.summary,
      author: g.author || 'JY DM',
      reading_time: g.reading_time || 10,
      cover_image: g.cover_image || '',
      tags: g.tags || [],
      featured: Boolean(g.featured),
      type: 'guide',
      url: g.url || `${g.slug}.html`,
      issue_volume: g.issue_volume || 'Vol. 2026 — August Issue',
      issue_title: g.issue_title || 'Get ready for school',
      cefr_level: g.cefr_level || 'A0–A1 / A2',
      vibe: g.vibe || 'Curriculum Vibe',
      founder_notes: g.founder_notes || 'CELTA-aligned A0–A1 / A2 target-language guidance by JY DM for COSYmagazine Get ready for school edition.',
      audio_podcast: Boolean(g.audio_podcast !== false)
    }))
  ];

  postsJsonList.sort((a, b) => {
    const dA = new Date(a.date).getTime() || 0;
    const dB = new Date(b.date).getTime() || 0;
    return dB - dA;
  });

  fs.writeFileSync(POSTS_JSON, JSON.stringify(postsJsonList, null, 2), 'utf-8');
  console.log(`✅ Successfully generated blog/posts.json (${postsJsonList.length} total entries).`);

  // 6. Generate blog/index.json (including posts and guides)
  const guidesForIndex = guides.map(g => ({
    id: `guide-${g.slug}`,
    slug: g.slug,
    language: 'en',
    desk: 'Long Reads',
    format: 'essay',
    level: g.cefr_level || 'A0–A1 / A2',
    issue: {
      number: g.issue_volume || 'Vol. 2026 — August Issue',
      title: g.issue_title || 'Get ready for school'
    },
    date: g.date || '2026-08-01',
    title: g.title,
    kicker: 'GUIDE',
    dek: g.summary || '',
    tags: g.tags || [],
    readingTime: g.reading_time || 10,
    podcast: { episode: 1, audioUrl: null },
    artDirection: {
      palette: ['#0d9488', '#faf7f2', '#1e293b'],
      fonts: { display: 'Fraunces', text: 'DM Sans', accent: 'Fraunces Italic' },
      layout: 'magazine-spread',
      motif: 'editorial-stars',
      seed: g.slug,
      coverOverride: g.cover_image || null
    },
    blocks: [
      {
        type: 'paragraph',
        text: g.summary || g.title
      }
    ]
  }));

  const indexPostsList = [
    ...allPosts,
    ...guidesForIndex
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const issuesList = Array.from(issuesSet.values());
  const indexOutput = {
    version: '2.0.0',
    generatedAt: new Date().toISOString(),
    stats: {
      totalPosts: indexPostsList.length,
      totalDesks: DESKS_CATALOG.length,
      totalIssues: issuesList.length
    },
    desks: DESKS_CATALOG,
    issues: issuesList,
    posts: indexPostsList
  };

  fs.writeFileSync(INDEX_JSON, JSON.stringify(indexOutput, null, 2), 'utf-8');
  console.log(`✅ Successfully generated blog/index.json (${indexPostsList.length} total posts/guides, ${DESKS_CATALOG.length} desks).`);

  // 7. Generate podcast RSS feed
  generatePodcastRss();
}

if (require.main === module) {
  buildBlog();
}

module.exports = { buildBlog };
