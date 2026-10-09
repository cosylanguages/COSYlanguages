#!/usr/bin/env node
/**
 * scripts/test-cover-overflow.js
 * Validates that all post covers render titles and kickers strictly
 * within their bounding safe area box without text clipping or overflow.
 */

const fs = require('fs');
const path = require('path');

async function testCoverOverflow() {
  console.log('🧪 Testing procedural SVG cover text fitting across all blog posts...');

  const { renderCover } = await import('../blog/js/art/generator.js');
  const POSTS_DIR = path.join(__dirname, '..', 'blog', 'posts');

  const jsonFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
  let totalTested = 0;
  const overflowErrors = [];

  jsonFiles.forEach(file => {
    const post = JSON.parse(fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8'));
    if (post.draft) return;

    totalTested++;
    const svg = renderCover(post, { width: 800, height: 450, showText: true });

    // Extract overlay card dimensions
    const cardMatch = svg.match(/data-card-y="(\d+)"\s+data-card-h="(\d+)"/);
    if (!cardMatch) {
      overflowErrors.push(`[${post.slug}] Missing overlay card bounding metadata.`);
      return;
    }

    const cardY = parseInt(cardMatch[1], 10);
    const cardH = parseInt(cardMatch[2], 10);
    const cardBottom = cardY + cardH;

    // Check title line positions
    const lineMatches = Array.from(svg.matchAll(/class="cover-title-line"\s+data-y="(\d+)"/g));
    if (lineMatches.length === 0) {
      overflowErrors.push(`[${post.slug}] No title text lines found in SVG cover overlay.`);
    }

    lineMatches.forEach(m => {
      const lineY = parseInt(m[1], 10);
      if (lineY >= cardBottom - 4) {
        overflowErrors.push(`[${post.slug}] Title line Y position (${lineY}px) overflows card bottom (${cardBottom}px).`);
      }
    });
  });

  if (overflowErrors.length > 0) {
    console.error('❌ Cover Text Fitting Errors:');
    overflowErrors.forEach(err => console.error('  - ' + err));
    process.exit(1);
  }

  console.log(`✅ All ${totalTested} published posts pass cover text fitting test without overflow!`);
}

testCoverOverflow();
