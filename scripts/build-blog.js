#!/usr/bin/env Node
/**
 * build-blog.js
 * Builds static blog post HTML pages and generates blog/posts.json from Markdown source files.
 *
 * Usage: node scripts/build-blog.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { marked } = require('marked');

const BLOG_DIR = path.join(__dirname, '..', 'blog');
const POSTS_DIR = path.join(BLOG_DIR, 'posts');
const GUIDES_FILE = path.join(BLOG_DIR, 'guides.json');
const POSTS_JSON = path.join(BLOG_DIR, 'posts.json');

const ALLOWED_CATEGORIES = [
  'Philosophy',
  'Journal Article',
  'Ecosystem Update',
  'Pedagogy',
  'Methodology',
  'Resource List',
  'Curriculum',
  'Speaking First'
];

const RESERVED_SLUGS = new Set([
  'index',
  'posts',
  'guides',
  'top-10-verbs',
  'top-100-a0-a1'
]);

function buildBlog() {
  console.log('🚀 Starting Blog Build Pipeline...');

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

  // 2. Read post Markdown files
  const mdFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  const posts = [];
  const postSlugs = new Set();
  const errors = [];

  mdFiles.forEach(file => {
    const filePath = path.join(POSTS_DIR, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const slug = path.basename(file, '.md');

    // Slug collision checks
    if (RESERVED_SLUGS.has(slug) || guideSlugs.has(slug)) {
      errors.push(`[${file}] Slug "${slug}" collides with a reserved system page or guide slug.`);
    }
    if (postSlugs.has(slug)) {
      errors.push(`[${file}] Duplicate slug "${slug}" detected.`);
    }
    postSlugs.add(slug);

    // Parse frontmatter
    let frontmatter = {};
    let markdownBody = '';

    const fmMatch = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!fmMatch) {
      errors.push(`[${file}] Missing or malformed YAML frontmatter (must start and end with ---).`);
      return;
    }

    try {
      frontmatter = yaml.load(fmMatch[1]);
      markdownBody = fmMatch[2];
    } catch (e) {
      errors.push(`[${file}] Invalid YAML frontmatter: ${e.message}`);
      return;
    }

    // Required fields validation
    const requiredFields = ['title', 'date', 'category', 'summary', 'author'];
    requiredFields.forEach(field => {
      if (!frontmatter[field] || String(frontmatter[field]).trim() === '') {
        errors.push(`[${file}] Missing required field: "${field}".`);
      }
    });

    // Date format validation (YYYY-MM-DD)
    const dateStr = String(frontmatter.date || '').trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr) || isNaN(Date.parse(dateStr))) {
      errors.push(`[${file}] Invalid date format "${dateStr}". Must be YYYY-MM-DD.`);
    }

    // Category enum validation
    const category = String(frontmatter.category || '').trim();
    if (category && !ALLOWED_CATEGORIES.includes(category)) {
      errors.push(`[${file}] Invalid category "${category}". Must be one of: ${ALLOWED_CATEGORIES.join(', ')}.`);
    }

    // Compute reading time if absent
    const wordCount = markdownBody.trim().split(/\s+/).filter(Boolean).length;
    const computedReadingTime = Math.max(1, Math.ceil(wordCount / 200));
    const readingTime = typeof frontmatter.reading_time === 'number' ? frontmatter.reading_time : computedReadingTime;

    const postObj = {
      slug,
      title: String(frontmatter.title || '').trim(),
      date: dateStr,
      updated: frontmatter.updated ? String(frontmatter.updated).trim() : null,
      category,
      summary: String(frontmatter.summary || '').trim(),
      author: String(frontmatter.author || '').trim(),
      reading_time: readingTime,
      cover_image: frontmatter.cover_image ? String(frontmatter.cover_image).trim() : '',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      featured: Boolean(frontmatter.featured),
      draft: Boolean(frontmatter.draft),
      bodyMarkdown: markdownBody,
      type: 'post',
      url: `${slug}.html`
    };

    posts.push(postObj);
  });

  if (errors.length > 0) {
    console.error('❌ Validation Failed with errors:');
    errors.forEach(err => console.error('  - ' + err));
    process.exit(1);
  }

  // 3. Generate HTML pages for non-draft posts
  const publishedPosts = posts.filter(p => !p.draft);
  console.log(`📝 Processing ${publishedPosts.length} published post(s) (${posts.length - publishedPosts.length} draft(s) skipped)...`);

  publishedPosts.forEach(post => {
    const htmlPath = path.join(BLOG_DIR, `${post.slug}.html`);
    const renderedBody = marked.parse(post.bodyMarkdown);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} — COSY Blog</title>
    <meta name="description" content="${post.summary.replace(/"/g, '&quot;')}">
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
</head>
<body class="blog-page">

    <nav id="cosy-nav"></nav>

    <div class="blog-wrapper">
        <header class="blog-header">
            <div class="post-breadcrumb" style="margin-bottom: 0.75rem;">
                <a href="index.html" style="color: var(--teal, #0d9488); text-decoration: none; font-weight: 600; font-size: 0.9rem;">← Back to Blog &amp; Editorial Hub</a>
            </div>
            <span class="post-card-label">${post.category}</span>
            <h1 class="blog-header-title" style="margin-top: 0.5rem;">${post.title}</h1>
            <div class="post-card-meta" style="margin-top: 0.75rem;">
                <span class="post-author-avatar">${post.author.charAt(0).toUpperCase()}</span>
                <span>Written by <strong>${post.author}</strong></span>
                <span>·</span>
                <span>📅 Published ${post.date}</span>
                <span>·</span>
                <span>⏱️ ${post.reading_time} min read</span>
            </div>
        </header>

        <div class="blog-layout">
            <main class="blog-main-col">
                ${post.cover_image ? `<div class="post-cover" style="margin-bottom: 1.5rem;"><img src="${post.cover_image}" alt="${post.title}" style="width: 100%; border-radius: 12px;"></div>` : ''}
                <article class="post-full-content" style="background: var(--surface, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 2rem; line-height: 1.75; color: var(--text-main, #1e293b);">
                    ${renderedBody}
                </article>

                ${post.tags.length > 0 ? `
                <div class="post-tags-row" style="margin-top: 1.5rem;">
                    ${post.tags.map(t => `<span class="post-tag-chip">#${t}</span>`).join(' ')}
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
      <a href="../courses/general.html" data-translate-key="course_general">General Course</a>
      <a href="../courses/spoken.html" data-translate-key="course_spoken">Spoken Course</a>
      <a href="../courses/exam-preparation.html" data-translate-key="course_exam">Exam Preparation</a>
      <a href="../courses/travelling.html" data-translate-key="course_travelling">Travelling Course</a>
      <a href="../courses/professional.html" data-translate-key="course_professional">Professional Course</a>
      <a href="../courses/relocation.html" data-translate-key="course_relocation">Relocation Course</a>
    </div>
    <div class="footer-links-col">
      <h3 data-translate-key="footer_h5_explore">Explore</h3>
      <a href="https://cosylanguages.github.io/COSYmanuals/" target="_blank" rel="noopener">Manuals Hub 🔒 (for students)</a>
      <a href="../comparative/index.html">Grammar Atlas 🌐</a>
      <a href="../placement-quiz.html">Placement Quiz 📝</a>
      <a href="../hybrid/index.html">Hybrid &amp; Community 🌿</a>
      <a href="../blog/index.html">Blog & Top 100 📝</a>
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
</body>
</html>
`;

    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
    console.log(`  ✓ Generated ${post.slug}.html`);
  });

  // 4. Generate blog/posts.json
  const postsJsonList = [
    ...publishedPosts.map(p => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      updated: p.updated,
      category: p.category,
      summary: p.summary,
      author: p.author,
      reading_time: p.reading_time,
      cover_image: p.cover_image,
      tags: p.tags,
      featured: p.featured,
      type: 'post',
      url: p.url
    })),
    ...guides.map(g => ({
      slug: g.slug,
      title: g.title,
      date: g.date,
      updated: g.updated || null,
      category: g.category || 'Resource List',
      summary: g.summary,
      author: g.author || 'COSY Editorial Team',
      reading_time: g.reading_time || 10,
      cover_image: g.cover_image || '',
      tags: g.tags || [],
      featured: Boolean(g.featured),
      type: 'guide',
      url: g.url || `${g.slug}.html`
    }))
  ];

  // Sort newest first by date
  postsJsonList.sort((a, b) => {
    const dA = new Date(a.date).getTime() || 0;
    const dB = new Date(b.date).getTime() || 0;
    return dB - dA;
  });

  fs.writeFileSync(POSTS_JSON, JSON.stringify(postsJsonList, null, 2), 'utf-8');
  console.log(`✅ Successfully generated blog/posts.json (${postsJsonList.length} total entries: ${publishedPosts.length} posts, ${guides.length} guides).`);
}

if (require.main === module) {
  buildBlog();
}

module.exports = { buildBlog };
