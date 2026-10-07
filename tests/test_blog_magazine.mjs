import fs from 'fs';
import path from 'path';
import assert from 'assert';

console.log('Running Blog Magazine & Podcast Presentation Automated Tests...');

// Test 1: Check blog/posts.json metadata
const postsPath = path.resolve('blog/posts.json');
assert.ok(fs.existsSync(postsPath), 'blog/posts.json should exist');

const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
assert.ok(Array.isArray(posts) && posts.length > 0, 'posts.json should contain an array of posts');

posts.forEach((post, idx) => {
    assert.ok(post.title, `Post at index ${idx} missing title`);
    assert.ok(post.url, `Post at index ${idx} missing url`);
    assert.ok(post.author === 'JY DM', `Post ${post.slug} author should be JY DM`);
    assert.ok(post.issue_volume, `Post ${post.slug} missing issue_volume`);
    assert.ok(post.vibe, `Post ${post.slug} missing vibe`);
    assert.ok(post.founder_notes, `Post ${post.slug} missing founder_notes`);
});
console.log(`✅ Passed: All ${posts.length} posts in blog/posts.json have valid monthly issue & founder metadata.`);

// Test 2: Check blog/index.html HTML elements
const indexPath = path.resolve('blog/index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

assert.ok(indexHtml.includes('COSY Gazette &amp; Magazine Edition'), 'blog/index.html should feature magazine title');
assert.ok(indexHtml.includes('founder-presentation-card'), 'blog/index.html should feature founder presentation card');
assert.ok(indexHtml.includes('founder-expand-btn'), 'blog/index.html should feature founder expand button');
assert.ok(indexHtml.includes('podcast-mode-btn'), 'blog/index.html should feature podcast mode button');
console.log('✅ Passed: blog/index.html contains Founder Presentation Deck & Podcast Mode controls.');

// Test 3: Check all blog post HTML files for Founder Deck & Flipbook script
const blogFiles = fs.readdirSync('blog').filter(f => f.endsWith('.html') && f !== 'index.html');
assert.ok(blogFiles.length > 0, 'Should find blog post HTML files');

blogFiles.forEach(file => {
    const postHtml = fs.readFileSync(path.join('blog', file), 'utf8');
    assert.ok(postHtml.includes('founder-presentation-card'), `${file} should feature founder-presentation-card`);
    assert.ok(postHtml.includes('flipbook.js'), `${file} should load flipbook.js script`);
});
console.log(`✅ Passed: All ${blogFiles.length} blog post HTML files contain Founder Deck & Flipbook script integrations.`);

// Test 4: Check css/blog.css magazine & podcast styles
const cssPath = path.resolve('css/blog.css');
const cssText = fs.readFileSync(cssPath, 'utf8');

assert.ok(cssText.includes('.founder-presentation-card'), 'css/blog.css should define .founder-presentation-card');
assert.ok(cssText.includes('podcast-presentation-mode'), 'css/blog.css should define podcast-presentation-mode');
assert.ok(cssText.includes('@media print'), 'css/blog.css should define @media print styles');
console.log('✅ Passed: css/blog.css defines magazine, podcast presentation mode, and print paper styles.');

console.log('🎉 All Blog Magazine & Podcast Presentation tests passed successfully!');
