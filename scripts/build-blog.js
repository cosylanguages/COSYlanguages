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
  const fullTitle = `${title} — COSY Blog`;
  const characters = Array.from(fullTitle);
  let documentTitle = characters.length <= 70
    ? fullTitle
    : `${characters.slice(0, 69).join('').trimEnd()}…`;

  while (escapeHtml(documentTitle).length > 70) {
    documentTitle = `${Array.from(documentTitle).slice(0, -2).join('').trimEnd()}…`;
  }
  return documentTitle;
}

function renderBlockToHtml(block) {
  if (!block || typeof block !== 'object') return '';

  switch (block.type) {
    case 'heading': {
      const lvl = Math.min(6, Math.max(1, block.level || 2));
      return `<h${lvl}>${parseFormattedText(block.text)}</h${lvl}>`;
    }
    case 'paragraph': {
      return `<p>${parseFormattedText(block.text)}</p>`;
    }
    case 'list-item': {
      const tag = block.ordered ? 'ol' : 'ul';
      const itemsHtml = (block.items || []).map(item => `<li>${parseFormattedText(item)}</li>`).join('\n');
      return `<${tag}>\n${itemsHtml}\n</${tag}>`;
    }
    case 'table': {
      const headersHtml = (block.headers || []).map(h => `<th>${parseFormattedText(h)}</th>`).join('');
      const rowsHtml = (block.rows || []).map(row => {
        const cellsHtml = row.map(cell => `<td>${parseFormattedText(cell)}</td>`).join('');
        return `<tr>${cellsHtml}</tr>`;
      }).join('\n');
      const captionHtml = block.caption ? `<caption>${parseFormattedText(block.caption)}</caption>` : '';
      return `<div class="table-wrapper">\n<table>\n${captionHtml}\n<thead><tr>${headersHtml}</tr></thead>\n<tbody>\n${rowsHtml}\n</tbody>\n</table>\n</div>`;
    }
    case 'example': {
      return `
<div class="example-box" style="background: rgba(13, 148, 136, 0.05); border-left: 4px solid var(--teal, #0d9488); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
  <p style="font-size: 1.1rem; font-weight: 600; color: var(--teal, #0d9488); margin-bottom: 0.25rem;">${parseFormattedText(block.targetText)}</p>
  <p style="font-size: 0.95rem; margin: 0; color: var(--text-main, #1e293b);">${parseFormattedText(block.gloss)}</p>
  ${block.context ? `<p style="font-size: 0.85rem; font-style: italic; color: #64748b; margin-top: 0.25rem;">Context: ${parseFormattedText(block.context)}</p>` : ''}
</div>`;
    }
    case 'pronunciation': {
      return `
<div class="pronunciation-card" style="display: flex; align-items: center; gap: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; padding: 0.75rem 1rem; border-radius: 8px; margin: 1rem 0;">
  <span style="font-weight: 700; font-size: 1.1rem;">${parseFormattedText(block.word)}</span>
  <span style="font-family: monospace; color: #0d9488;">[${escapeHtml(block.ipa)}]</span>
  ${block.audioUrl ? `<audio controls src="${escapeHtml(block.audioUrl)}"></audio>` : ''}
</div>`;
    }
    case 'pullquote': {
      return `
<blockquote style="border-left: 4px solid var(--teal, #0d9488); padding-left: 1rem; margin: 1.5rem 0; font-style: italic; font-size: 1.15rem;">
  <p style="margin-bottom: 0.25rem;">“${parseFormattedText(block.quote)}”</p>
  ${block.attribution ? `<cite style="font-size: 0.9rem; font-style: normal; color: #64748b;">— ${escapeHtml(block.attribution)}</cite>` : ''}
</blockquote>`;
    }
    case 'image': {
      return `
<figure style="margin: 1.5rem 0;">
  <img src="${escapeHtml(block.url)}" alt="${escapeHtml(block.alt)}" style="max-width: 100%; border-radius: 8px;">
  ${block.caption ? `<figcaption style="font-size: 0.85rem; color: #64748b; text-align: center; margin-top: 0.5rem;">${parseFormattedText(block.caption)}</figcaption>` : ''}
</figure>`;
    }
    case 'quiz': {
      const optionsHtml = (block.options || []).map((opt, i) => `<li style="margin-bottom: 0.25rem;">${i === block.correctIndex ? '✅ ' : '⚪ '}${parseFormattedText(opt)}</li>`).join('');
      return `
<div class="quiz-block" style="background: #faf7f2; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin: 1.5rem 0;">
  <h4 style="color: var(--teal, #0d9488); margin-bottom: 0.5rem;">❓ ${parseFormattedText(block.question)}</h4>
  <ul style="list-style: none; padding-left: 0;">${optionsHtml}</ul>
  ${block.explanation ? `<p style="font-size: 0.9rem; font-style: italic; margin-top: 0.5rem; color: #64748b;">${parseFormattedText(block.explanation)}</p>` : ''}
</div>`;
    }
    case 'culture-bite': {
      return `
<div class="culture-bite" style="background: rgba(217, 119, 6, 0.08); border-left: 4px solid #d97706; padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <h4 style="color: #b45309; margin-bottom: 0.35rem;">📌 ${parseFormattedText(block.title)}</h4>
  <p style="margin: 0; font-size: 0.95rem;">${parseFormattedText(block.content)}</p>
</div>`;
    }
    case 'quote-wall': {
      const quotesHtml = (block.quotes || []).map(q => `<div style="margin-bottom: 0.75rem;"><em>“${parseFormattedText(q.quote)}”</em> — <strong>${escapeHtml(q.author)}</strong></div>`).join('');
      return `<div class="quote-wall" style="background: #f1f5f9; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">${quotesHtml}</div>`;
    }
    case 'links': {
      return `
<div class="links-block" style="margin: 1.5rem 0;">
  <a href="${escapeHtml(block.url)}" class="read-more-link" style="font-weight: 600; color: var(--teal, #0d9488);">${parseFormattedText(block.label)}</a>
</div>`;
    }
    default:
      return '';
  }
}

function formatFlipbookContent(renderedBlocksHtml, slug) {
  const hrChunks = renderedBlocksHtml.split(/<hr\s*\/?>/i).filter(c => c.trim().length > 0);
  let pages = [];

  if (hrChunks.length > 1) {
    pages = hrChunks;
  } else {
    const h2Parts = renderedBlocksHtml.split(/(?=<h[23][^>]*>)/i).filter(c => c.trim().length > 0);
    if (h2Parts.length > 1) {
      pages = h2Parts;
    } else {
      pages = [renderedBlocksHtml];
    }
  }

  return pages.map((chunk, idx) => {
    const pageNum = idx + 1;
    const audioSrc = `../audio/blog/${slug}-page-${pageNum}.mp3`;
    const audioPlayerHtml = `
  <div class="page-audio-guide">
    <div class="audio-guide-header">
      <span class="audio-guide-label">🎧 Page Audio Guide &amp; Narration</span>
      <span class="audio-guide-badge">Page ${pageNum} of ${pages.length}</span>
    </div>
    <audio controls preload="none" src="${audioSrc}">
      Your browser does not support the audio element.
    </audio>
  </div>`;

    const pageFooterHtml = `
  <div class="flipbook-page-footer">
    <span>🗞️ COSY Gazette • Magazine Edition</span>
    <span>Page ${pageNum} of ${pages.length}</span>
  </div>`;

    return `
<section class="flipbook-page${idx === 0 ? ' active' : ''}" data-page="${pageNum}" aria-label="Page ${pageNum} of ${pages.length}">
  ${audioPlayerHtml}
  ${chunk}
  ${pageFooterHtml}
</section>`;
  }).join('\n');
}

function renderLanguageSwitcherHtml(currentPost, allPosts) {
  const baseSlug = currentPost.translationOf || (currentPost.slug.replace(/-(fr|it|ru|el)$/, ''));
  const variants = allPosts.filter(p => p.slug === baseSlug || p.translationOf === baseSlug);

  if (variants.length <= 1) return '';

  const linksHtml = variants.map(v => {
    const flag = LANG_FLAG_MAP[v.language] || '🌐';
    const langCode = v.language.toUpperCase();
    if (v.slug === currentPost.slug) {
      return `<span class="lang-switcher-active" style="font-weight: 700; padding: 0.2rem 0.5rem; background: var(--teal, #0d9488); color: #fff; border-radius: 4px;">${flag} ${langCode}</span>`;
    }
    return `<a href="${v.slug}.html" class="lang-switcher-link" style="text-decoration: none; padding: 0.2rem 0.5rem; background: #e2e8f0; color: #1e293b; border-radius: 4px; font-weight: 600;">${flag} ${langCode}</a>`;
  }).join(' ');

  return `
<div class="language-switcher-bar" style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
  ${linksHtml}
</div>`;
}

function buildBlog() {
  console.log('🚀 Starting COSYlanguages Unified Blog Build Pipeline...');

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
    const renderedBlocksHtml = (post.blocks || []).map(renderBlockToHtml).join('\n');
    const flipbookBody = formatFlipbookContent(renderedBlocksHtml, post.slug);
    const langSwitcherHtml = renderLanguageSwitcherHtml(post, publishedPosts);

    const authorName = 'JY DM';
    const category = post.desk || 'Words';
    const coverImage = post.artDirection?.coverOverride || '';
    const founderNotes = `CELTA-aligned target-language guidance by JY DM for COSYmagazine ${post.issue.title} edition.`;

    const htmlContent = `<!DOCTYPE html>
<html lang="${escapeHtml(post.language)}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(getDocumentTitle(post.title))}</title>
    <meta name="description" content="${escapeHtml(post.dek)}">
    <link rel="icon" href="../images/logos/cosylanguages.png">
    <link rel="manifest" href="../apps/free-portal/manifest.json">
    <meta name="theme-color" content="#FAF7F2">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../css/tokens.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="stylesheet" href="../css/blog.css">
    <link rel="stylesheet" href="css/tokens.css">
    <link rel="stylesheet" href="css/magazine-templates.css">
</head>
<body class="blog-page">

    <nav id="cosy-nav"></nav>

    <div class="blog-wrapper">
        <header class="blog-header" data-category="${escapeHtml(category)}">
            <div class="post-breadcrumb" style="margin-bottom: 0.75rem;">
                <a href="index.html" style="color: var(--teal, #0d9488); text-decoration: none; font-weight: 600; font-size: 0.9rem;">← Back to Blog &amp; Editorial Hub</a>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <span class="kicker" style="margin-bottom: 0;">${escapeHtml(category)}</span>
                <span class="gazette-badge">📖 Magazine Flipbook Edition</span>
            </div>
            <h1 class="blog-header-title" style="margin-top: 0.5rem;">${escapeHtml(post.title)}</h1>
            ${langSwitcherHtml}
            <div class="post-card-meta" style="margin-top: 0.75rem;">
                <span class="post-author-avatar">J</span>
                <span>Written by <strong>${escapeHtml(authorName)}</strong></span>
                <span>·</span>
                <span>📅 Published ${post.date}</span>
                <span>·</span>
                <span>⏱️ ${post.readingTime} min read</span>
            </div>
        </header>

        <!-- Founder's Role Expandable Presentation Card -->
        <section class="founder-presentation-card" aria-label="Founder Presentation Deck">
            <div class="founder-card-header">
                <div class="founder-info">
                    <div class="founder-avatar">J</div>
                    <div class="founder-meta">
                        <h3 class="founder-title">JY DM — Founder's Editorial Room &amp; Podcast Deck</h3>
                        <span class="founder-subtitle">${escapeHtml(post.issue.title)} (${escapeHtml(post.level)}) • Editorial Vibe</span>
                    </div>
                </div>
                <div class="founder-card-actions">
                    <button type="button" class="founder-expand-btn" aria-expanded="false">
                        <span>🎙️ Expand Founder Deck</span>
                    </button>
                    <button type="button" class="podcast-mode-btn" aria-label="Toggle Podcast Mode">
                        <span>🎙️ Podcast View Mode</span>
                    </button>
                </div>
            </div>
            <div class="founder-card-body">
                <div class="founder-card-notes">
                    <p><strong>Founder's Notes:</strong> ${escapeHtml(founderNotes)}</p>
                </div>
            </div>
        </section>

        <div class="blog-layout">
            <main class="blog-main-col">
                ${coverImage ? `<div class="post-cover" style="margin-bottom: 1.5rem;"><img src="${escapeHtml(coverImage)}" alt="${escapeHtml(post.title)}" style="width: 100%; border-radius: 12px;"></div>` : ''}
                <article class="post-full-content flipbook-mode" style="background: var(--surface, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 2rem; line-height: 1.75; color: var(--text-main, #1e293b);">
                    ${flipbookBody}
                </article>

                ${post.tags.length > 0 ? `
                <div class="post-tags-row" style="margin-top: 1.5rem;">
                    ${post.tags.map(t => `<span class="post-tag-chip">#${escapeHtml(t)}</span>`).join(' ')}
                </div>` : ''}

                <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color, #e2e8f0);">
                    <a href="index.html" class="read-more-link">← Return to Blog Index</a>
                </div>
            </main>

            <aside class="blog-sidebar">
                <div class="sidebar-widget">
                    <h3 class="sidebar-widget-title">🏷️ Topics &amp; Labels</h3>
                    <div class="label-cloud">
                        <a href="top-100-a0-a1.html" class="sidebar-label-chip">Top 100 Semantic Tree</a>
                        <a href="top-10-verbs.html" class="sidebar-label-chip">Verbs Matrix</a>
                        <a href="top-100-a0-a1-english.html" class="sidebar-label-chip">A0–A1 Curricula</a>
                        <a href="index.html" class="sidebar-label-chip">Philosophy</a>
                        <a href="index.html" class="sidebar-label-chip">Journal Notes</a>
                    </div>
                </div>

                <div class="sidebar-widget">
                    <h3 class="sidebar-widget-title">🌐 Language Guides</h3>
                    <ul class="sidebar-list">
                        <li><a href="top-100-a0-a1.html">🌍 Top 100 Master Semantic Tree (14 Langs)</a></li>
                        <li><a href="top-100-a0-a1-english.html">🇬🇧 English Master Guide</a></li>
                        <li><a href="top-100-a0-a1-french.html">🇫🇷 French Master Guide</a></li>
                        <li><a href="top-100-a0-a1-italian.html">🇮🇹 Italian Master Guide</a></li>
                        <li><a href="top-100-a0-a1-russian.html">🇷🇺 Russian Master Guide</a></li>
                        <li><a href="top-100-a0-a1-greek.html">🇬🇷 Greek Master Guide</a></li>
                        <li><a href="top-100-a0-a1-spanish.html">🇪🇸 Spanish Master Guide</a></li>
                        <li><a href="top-100-a0-a1-german.html">🇩🇪 German Master Guide</a></li>
                    </ul>
                </div>
            </aside>
        </div>
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
