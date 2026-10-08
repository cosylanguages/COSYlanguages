#!/usr/bin/env node
/**
 * scripts/build-blog-index.js
 * Builds blog/index.json from blog post JSON files, Markdown posts, and guides.
 * Also invokes RSS podcast generator.
 *
 * Usage: node scripts/build-blog-index.js
 */

const fs = require('fs');
const path = require('path');
const { validatePostSchema } = require('./validate-blog-schema.js');
const { generatePodcastRss } = require('./generate-podcast-rss.js');

const BLOG_DIR = path.join(__dirname, '..', 'blog');
const POSTS_DIR = path.join(BLOG_DIR, 'posts');
const GUIDES_FILE = path.join(BLOG_DIR, 'guides.json');
const INDEX_FILE = path.join(BLOG_DIR, 'index.json');

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

function buildBlogIndex() {
  console.log('🚀 Building blog/index.json...');

  const posts = [];
  const issuesSet = new Map();

  // 1. Load JSON posts from blog/posts/*.json
  if (fs.existsSync(POSTS_DIR)) {
    const jsonFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
    jsonFiles.forEach(file => {
      const filePath = path.join(POSTS_DIR, file);
      try {
        const postData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const errors = validatePostSchema(postData, file);
        if (errors.length > 0) {
          console.warn(`⚠️ Warning: ${file} failed schema validation:`, errors);
        }
        posts.push(postData);

        if (postData.issue && postData.issue.number) {
          issuesSet.set(postData.issue.number, {
            number: postData.issue.number,
            title: postData.issue.title
          });
        }
      } catch (e) {
        console.error(`❌ Failed to parse ${file}:`, e.message);
      }
    });
  }

  // 2. Load existing posts.json entries for backwards compatibility
  const postsJsonPath = path.join(BLOG_DIR, 'posts.json');
  if (fs.existsSync(postsJsonPath)) {
    try {
      const legacyPosts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf-8'));
      legacyPosts.forEach(legacy => {
        // Skip if slug already loaded via new JSON schema
        if (posts.some(p => p.slug === legacy.slug)) return;

        let lang = 'en';
        if (legacy.slug.endsWith('-el')) lang = 'el';
        else if (legacy.slug.endsWith('-fr')) lang = 'fr';
        else if (legacy.slug.endsWith('-it')) lang = 'it';
        else if (legacy.slug.endsWith('-ru')) lang = 'ru';

        const issueNum = legacy.issue_volume || 'Vol. 2026.08';
        const issueTitle = legacy.issue_title || 'Get ready for school';
        issuesSet.set(issueNum, { number: issueNum, title: issueTitle });

        const desk = legacy.type === 'guide' ? 'Long Reads' : (legacy.artDirection?.desk || 'Words');

        posts.push({
          id: `legacy-${legacy.slug}`,
          slug: legacy.slug,
          language: lang,
          desk,
          format: 'list',
          level: legacy.cefr_level || 'A0–B2',
          issue: { number: issueNum, title: issueTitle },
          date: legacy.date || '2026-09-01',
          title: legacy.title,
          kicker: legacy.category ? legacy.category.toUpperCase() : 'EDITORIAL',
          dek: legacy.summary || '',
          tags: legacy.tags || [],
          readingTime: legacy.reading_time || 5,
          podcast: { episode: 1, audioUrl: legacy.audio_podcast ? `../audio/blog/${legacy.slug}.mp3` : null },
          artDirection: legacy.artDirection || {
            palette: ['#0d9488', '#faf7f2', '#1e293b'],
            fonts: { display: 'Fraunces', text: 'DM Sans', accent: 'Fraunces Italic' },
            layout: 'standard-feed',
            motif: 'riso-print',
            seed: legacy.slug,
            coverOverride: legacy.cover_image || null
          },
          blocks: [
            {
              type: 'paragraph',
              text: legacy.summary || legacy.title
            }
          ]
        });
      });
    } catch (e) {
      console.warn('⚠️ Could not load blog/posts.json fallback:', e.message);
    }
  }

  // Sort posts newest first by date
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const issuesList = Array.from(issuesSet.values());

  const indexOutput = {
    version: '2.0.0',
    generatedAt: new Date().toISOString(),
    stats: {
      totalPosts: posts.length,
      totalDesks: DESKS_CATALOG.length,
      totalIssues: issuesList.length
    },
    desks: DESKS_CATALOG,
    issues: issuesList,
    posts
  };

  fs.writeFileSync(INDEX_FILE, JSON.stringify(indexOutput, null, 2), 'utf-8');
  console.log(`✅ Successfully generated blog/index.json (${posts.length} posts, ${DESKS_CATALOG.length} desks, ${issuesList.length} issues).`);

  // Generate podcast RSS feed
  generatePodcastRss();
}

if (require.main === module) {
  buildBlogIndex();
}

module.exports = { buildBlogIndex };
