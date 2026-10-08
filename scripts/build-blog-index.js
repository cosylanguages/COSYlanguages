#!/usr/bin/env node
/**
 * scripts/build-blog-index.js
 * Delegates to the unified blog build pipeline in scripts/build-blog.js.
 *
 * Usage: node scripts/build-blog-index.js
 */

const { buildBlog } = require('./build-blog.js');

function buildBlogIndex() {
  buildBlog();
}

if (require.main === module) {
  buildBlogIndex();
}

module.exports = { buildBlogIndex };
