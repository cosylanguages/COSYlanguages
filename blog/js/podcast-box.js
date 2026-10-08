/**
 * blog/js/podcast-box.js
 * Podcast Box Component for COSYlanguages Blog Posts.
 * Renders episode info, audio player, teleprompter script / stage presentation links,
 * and optional timestamp-synced "Listen while reading" read-along highlighting.
 */

export class PodcastBoxComponent {
  constructor(options = {}) {
    this.container = options.container || null;
    this.post = options.post || {};
    this.audioEl = null;
    this.isPlaying = false;
    this.highlightActive = false;

    if (this.container) {
      this.render();
      this.bindAudioSync();
    }
  }

  render() {
    const podcast = this.post.podcast || {};
    const episodeNum = podcast.episode || 1;
    const audioUrl = podcast.audioUrl || (this.post.audio_podcast ? `../audio/blog/${this.post.slug}.mp3` : null);
    const slug = this.post.slug || '';
    const scriptUrl = `${slug}.html?script=1`;
    const stageUrl = `${slug}.html?stage=1`;

    const playerHtml = audioUrl ? `
      <div class="podcast-audio-player-wrapper">
        <audio class="podcast-audio-element" controls preload="metadata" src="${this.escapeHtml(audioUrl)}">
          Your browser does not support the audio element.
        </audio>
        <button type="button" class="podcast-readalong-btn" id="btn-readalong-toggle" title="Sync article text highlighting with audio playback">
          <span>🎧 Listen While Reading</span>
        </button>
      </div>
    ` : `
      <div class="podcast-audio-notice">
        <span>🎙️ Audio recording in production for this episode.</span>
      </div>
    `;

    this.container.innerHTML = `
      <section class="cosy-podcast-box" aria-label="Podcast Episode Controls">
        <div class="podcast-box-header">
          <div class="podcast-ep-meta">
            <span class="podcast-ep-badge">EPISODE ${episodeNum}</span>
            <span class="podcast-show-name">cosylanguages / такиеязыки</span>
          </div>
          <div class="podcast-quick-links">
            <a href="${stageUrl}" class="podcast-action-link" title="Open in 16:9 Animated Presentation Deck">📺 Stage View</a>
            <a href="${scriptUrl}" class="podcast-action-link" title="Open in Teleprompter Script Mode">📜 Script Teleprompter</a>
          </div>
        </div>

        <div class="podcast-box-body">
          <div class="podcast-title-row">
            <h3 class="podcast-box-title">🎙️ ${this.escapeHtml(this.post.title || 'COSY Podcast Episode')}</h3>
            <p class="podcast-box-dek">${this.escapeHtml(this.post.dek || this.post.summary || '')}</p>
          </div>

          ${playerHtml}
        </div>
      </section>
    `;

    this.audioEl = this.container.querySelector('.podcast-audio-element');
  }

  bindAudioSync() {
    if (!this.audioEl) return;

    const readalongBtn = this.container.querySelector('#btn-readalong-toggle');

    readalongBtn?.addEventListener('click', () => {
      this.highlightActive = !this.highlightActive;
      readalongBtn.classList.toggle('active', this.highlightActive);
      readalongBtn.innerHTML = this.highlightActive
        ? '<span>✨ Read-Along Sync Active</span>'
        : '<span>🎧 Listen While Reading</span>';

      if (this.highlightActive && this.audioEl.paused) {
        this.audioEl.play().catch(() => {});
      }
    });

    this.audioEl.addEventListener('timeupdate', () => {
      if (!this.highlightActive) return;

      const currentTime = this.audioEl.currentTime;
      const duration = this.audioEl.duration || 1;
      const progressRatio = currentTime / duration;

      // Find all content blocks/paragraphs in the post to highlight corresponding section
      const contentBlocks = document.querySelectorAll('.post-full-content p, .post-full-content blockquote, .post-full-content .flipbook-page');
      if (contentBlocks.length === 0) return;

      const activeIndex = Math.min(
        contentBlocks.length - 1,
        Math.floor(progressRatio * contentBlocks.length)
      );

      contentBlocks.forEach((block, idx) => {
        if (idx === activeIndex) {
          block.classList.add('podcast-readalong-active');
          if (this.highlightActive && block.scrollIntoView) {
            block.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else {
          block.classList.remove('podcast-readalong-active');
        }
      });
    });

    this.audioEl.addEventListener('ended', () => {
      document.querySelectorAll('.podcast-readalong-active').forEach(el => el.classList.remove('podcast-readalong-active'));
      if (readalongBtn) {
        this.highlightActive = false;
        readalongBtn.classList.remove('active');
        readalongBtn.innerHTML = '<span>🎧 Listen While Reading</span>';
      }
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
