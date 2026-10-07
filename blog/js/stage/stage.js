/**
 * blog/js/stage/stage.js
 * Main controller for Stage Mode & Reading Mode word card magnification.
 */

import { StageCamera } from './camera.js';
import { StageTimeline } from './timeline.js';

export class StageController {
  constructor(containerElement, postData) {
    this.container = containerElement;
    this.post = postData;
    this.isStageMode = false;
    this.isRecordingMode = false;

    this.initModeDetection();
    this.renderStage();
    this.bindEvents();
  }

  initModeDetection() {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      this.isStageMode = urlParams.get('stage') === '1';
    }
  }

  renderStage() {
    if (!this.container) return;

    if (this.isStageMode) {
      document.body.classList.add('stage-mode-active');
      this.container.innerHTML = `
        <div class="stage-frame-16-9">
          <div class="stage-viewport" id="stage-viewport">
            <div class="stage-content" id="stage-content">
              <!-- Title Card -->
              <div id="stage-title-card" class="stage-card stage-title-card">
                <span class="stage-kicker">${this.escapeHtml(this.post.kicker || 'COSY GAZETTE')}</span>
                <h1 class="stage-main-title">${this.escapeHtml(this.post.title)}</h1>
                <p class="stage-dek">${this.escapeHtml(this.post.dek || '')}</p>
              </div>

              <!-- Blocks -->
              <div class="stage-blocks-container">
                ${(this.post.blocks || []).map((b, i) => this.renderBlockHtml(b, i)).join('')}
              </div>

              <!-- Outro Card -->
              <div id="stage-outro-card" class="stage-card stage-outro-card">
                <h2>COSYlanguages</h2>
                <p>Learn languages naturally, conversationally, and beautifully.</p>
              </div>
            </div>
          </div>

          <!-- Lower Third Captions -->
          <div class="stage-lower-third" id="stage-lower-third">
            <span class="lower-third-text" id="lower-third-text">Ready to start presentation...</span>
          </div>

          <!-- Progress Bar -->
          <div class="stage-progress-bar" id="stage-progress-bar">
            <div class="stage-progress-fill" id="stage-progress-fill" style="width: 0%;"></div>
          </div>

          <!-- Stage Controls Overlay -->
          <div class="stage-controls" id="stage-controls">
            <button id="btn-play-pause" class="stage-btn" title="Play/Pause (Space)">▶</button>
            <button id="btn-prev" class="stage-btn" title="Previous (Left Arrow)">⏮</button>
            <button id="btn-next" class="stage-btn" title="Next (Right Arrow)">⏭</button>
            <span class="beat-counter" id="beat-counter">0 / 0</span>
            <button id="btn-speed" class="stage-btn">1.0x</button>
            <button id="btn-rec-toggle" class="stage-btn" title="Toggle Clean Recording View (H)">🔴 Clean View</button>
            <button id="btn-fullscreen" class="stage-btn" title="Toggle Fullscreen (F)">⛶</button>
          </div>
        </div>
      `;

      this.initCameraAndTimeline();
    } else {
      // Standard Reading Mode with Word Magnification
      this.initReadingModeMagnifier();
    }
  }

  renderBlockHtml(block, index) {
    const id = `block-${index}`;
    if (block.type === 'heading') {
      return `<h2 id="${id}" class="stage-block stage-heading">${this.escapeHtml(block.text)}</h2>`;
    } else if (block.type === 'paragraph') {
      return `<p id="${id}" class="stage-block stage-paragraph">${this.escapeHtml(block.text)}</p>`;
    } else if (block.type === 'pullquote') {
      return `
        <blockquote id="${id}" class="stage-block stage-pullquote">
          <p>“${this.escapeHtml(block.quote)}”</p>
          ${block.attribution ? `<cite>— ${this.escapeHtml(block.attribution)}</cite>` : ''}
        </blockquote>
      `;
    } else if (block.type === 'culture-bite') {
      return `
        <div id="${id}" class="stage-block stage-culture-bite">
          <h3>📌 ${this.escapeHtml(block.title)}</h3>
          <p>${this.escapeHtml(block.content)}</p>
        </div>
      `;
    } else if (block.type === 'pronunciation' || block.word) {
      return `
        <div id="${id}" class="stage-block stage-vocab-card" data-word="${this.escapeHtml(block.word)}">
          <span class="vocab-term">${this.escapeHtml(block.word)}</span>
          <span class="vocab-ipa">${this.escapeHtml(block.ipa || '')}</span>
        </div>
      `;
    }
    return `<div id="${id}" class="stage-block">${this.escapeHtml(block.text || '')}</div>`;
  }

  initCameraAndTimeline() {
    const stageEl = this.container.querySelector('.stage-frame-16-9');
    const viewportEl = this.container.querySelector('#stage-viewport');

    this.camera = new StageCamera(stageEl, viewportEl);
    this.timeline = new StageTimeline(this.post, this.camera, {
      onBeatChange: (beat, idx, total) => {
        const lowerThird = this.container.querySelector('#lower-third-text');
        const counter = this.container.querySelector('#beat-counter');
        if (lowerThird) lowerThird.textContent = beat.say || beat.caption || '';
        if (counter) counter.textContent = `${idx + 1} / ${total}`;
      },
      onPlayStateChange: (isPlaying) => {
        const btn = this.container.querySelector('#btn-play-pause');
        if (btn) btn.textContent = isPlaying ? '⏸' : '▶';
      },
      onProgress: (ratio) => {
        const fill = this.container.querySelector('#stage-progress-fill');
        if (fill) fill.style.width = `${Math.round(ratio * 100)}%`;
      }
    });

    // Control buttons
    this.container.querySelector('#btn-play-pause')?.addEventListener('click', () => this.timeline.togglePlay());
    this.container.querySelector('#btn-prev')?.addEventListener('click', () => this.timeline.prev());
    this.container.querySelector('#btn-next')?.addEventListener('click', () => this.timeline.next());

    this.container.querySelector('#btn-rec-toggle')?.addEventListener('click', () => {
      this.isRecordingMode = !this.isRecordingMode;
      const controls = this.container.querySelector('#stage-controls');
      const progress = this.container.querySelector('#stage-progress-bar');
      if (this.isRecordingMode) {
        controls?.classList.add('hide-recording');
        progress?.classList.add('hide-recording');
      } else {
        controls?.classList.remove('hide-recording');
        progress?.classList.remove('hide-recording');
      }
    });
  }

  initReadingModeMagnifier() {
    // Clickable vocabulary word cards in reading mode
    const clickableWords = document.querySelectorAll('.vocab-word, [data-cosydata-word]');
    clickableWords.forEach(wordEl => {
      wordEl.addEventListener('click', (e) => {
        const word = wordEl.dataset.cosydataWord || wordEl.textContent.trim();
        this.showMagnifiedWordModal(word);
      });
    });
  }

  showMagnifiedWordModal(word) {
    const existing = document.querySelector('#cosy-word-magnifier-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'cosy-word-magnifier-modal';
    modal.className = 'cosy-word-magnifier-modal';
    modal.innerHTML = `
      <div class="magnifier-card">
        <button class="magnifier-close">&times;</button>
        <span class="magnifier-kicker">VOCABULARY CARD</span>
        <h2 class="magnifier-word">${this.escapeHtml(word)}</h2>
        <p class="magnifier-def">Explore canonical definitions, audio pronunciation, and example sentences in COSYdata.</p>
        <a href="https://cosylanguages.github.io/COSYdata/vocabulary/index.html?word=${encodeURIComponent(word)}" target="_blank" rel="noopener" class="magnifier-link">
          Open in COSYdata ↗
        </a>
      </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector('.magnifier-close').addEventListener('click', () => modal.remove());
  }

  bindEvents() {
    if (typeof window === 'undefined') return;

    window.addEventListener('keydown', (e) => {
      if (!this.isStageMode) return;
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        this.timeline?.togglePlay();
      } else if (e.key === 'ArrowRight') {
        this.timeline?.next();
      } else if (e.key === 'ArrowLeft') {
        this.timeline?.prev();
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          this.container.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      } else if (e.key === 'h' || e.key === 'H') {
        this.container.querySelector('#btn-rec-toggle')?.click();
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
