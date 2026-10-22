/**
 * COSY Languages - Browser Audio Recorder Component
 * Handles microphone recording via MediaRecorder API, status feedback,
 * level meter visualization, playback, deletion, and non-audio fallbacks.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COSYAudioRecorder = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  class AudioRecorder {
    constructor(containerElement, options = {}) {
      this.container = typeof containerElement === 'string' ?
        document.getElementById(containerElement) : containerElement;
      this.options = options;

      this.mediaRecorder = null;
      this.audioChunks = [];
      this.audioBlob = null;
      this.audioUrl = null;
      this.stream = null;
      this.audioContext = null;
      this.analyser = null;
      this.animFrameId = null;

      this.state = 'idle'; // 'idle' | 'recording' | 'paused' | 'stopped' | 'unsupported'
      this.elapsedSeconds = 0;
      this.timerInterval = null;
      this.maxSeconds = options.maxSeconds || 120;

      this.onRecordingComplete = options.onRecordingComplete || function() {};
      this.onStateChange = options.onStateChange || function() {};

      this.init();
    }

    init() {
      if (!this.container) return;

      const isSupported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
      if (!isSupported) {
        this.state = 'unsupported';
        this.renderFallbackUI("Audio recording is not supported in this browser environment. You can use the self-assessment fallback below.");
        return;
      }

      this.renderUI();
    }

    renderUI() {
      this.container.innerHTML = `
        <div class="cosy-audio-recorder">
          <div class="recorder-status-bar">
            <span class="recorder-badge recorder-badge-${this.state}">${this.getStateLabel()}</span>
            <span class="recorder-timer" id="recorder-timer-display">${this.formatTime(this.elapsedSeconds)} / ${this.formatTime(this.maxSeconds)}</span>
          </div>

          <div class="recorder-meter-container">
            <div class="recorder-meter-bar" id="recorder-meter-bar" style="width: 0%;"></div>
          </div>

          <div class="recorder-controls">
            <button type="button" class="btn btn-primary" id="btn-record-start">🎤 Start Recording</button>
            <button type="button" class="btn btn-secondary" id="btn-record-stop" style="display: none;">⏹️ Stop Recording</button>
            <button type="button" class="btn btn-secondary" id="btn-record-delete" style="display: none;">🗑️ Delete & Re-record</button>
          </div>

          <div class="recorder-preview" id="recorder-preview-container" style="display: none; margin-top: 1rem;">
            <audio id="recorder-audio-player" controls style="width: 100%; border-radius: 8px;"></audio>
          </div>
        </div>
      `;

      this.bindEvents();
    }

    renderFallbackUI(reason) {
      this.container.innerHTML = `
        <div class="cosy-audio-recorder-fallback" style="padding: 1.25rem; background: var(--cream-dark); border-radius: 12px; border: 2px dashed var(--border);">
          <div style="font-weight: bold; color: var(--sage-deep, #3d5a45); margin-bottom: 0.5rem;">
            ⚠️ Audio Recording Unavailable
          </div>
          <p style="font-size: 0.95rem; color: var(--ink-soft); line-height: 1.5; margin-bottom: 1rem;">
            ${reason}
          </p>
          <div style="margin-top: 1rem;">
            <label style="display: block; font-weight: bold; margin-bottom: 0.5rem;">
              Self-Assessment Fluency Rating for this prompt:
            </label>
            <select id="recorder-fallback-select" class="option-btn" style="width: 100%; padding: 0.75rem;">
              <option value="A1">A1 - Basic short phrases with hesitations</option>
              <option value="A2">A2 - Simple connected sentences on everyday topics</option>
              <option value="B1" selected>B1 - Continuous speech with occasional pauses</option>
              <option value="B2">B2 - Smooth, natural tempo with detailed arguments</option>
              <option value="C1">C1 - Fluent, spontaneous, near-effortless delivery</option>
              <option value="C2">C2 - Masterful, highly precise articulation</option>
            </select>
            <textarea id="recorder-fallback-notes" placeholder="Optional: Type notes or transcript of what you would say..." style="width: 100%; height: 80px; margin-top: 0.75rem; padding: 0.5rem; border-radius: 8px; border: 1px solid var(--border);"></textarea>
          </div>
        </div>
      `;
    }

    bindEvents() {
      const btnStart = this.container.querySelector('#btn-record-start');
      const btnStop = this.container.querySelector('#btn-record-stop');
      const btnDelete = this.container.querySelector('#btn-record-delete');

      if (btnStart) btnStart.addEventListener('click', () => this.startRecording());
      if (btnStop) btnStop.addEventListener('click', () => this.stopRecording());
      if (btnDelete) btnDelete.addEventListener('click', () => this.resetRecording());
    }

    async startRecording() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(this.stream);
        this.audioChunks = [];

        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            this.audioChunks.push(e.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
          this.audioUrl = URL.createObjectURL(this.audioBlob);

          const audioPlayer = this.container.querySelector('#recorder-audio-player');
          const previewContainer = this.container.querySelector('#recorder-preview-container');

          if (audioPlayer && previewContainer) {
            audioPlayer.src = this.audioUrl;
            previewContainer.style.display = 'block';
          }

          this.state = 'stopped';
          this.updateControls();
          this.stopAudioAnalysis();

          this.onRecordingComplete({
            audioBlob: this.audioBlob,
            audioUrl: this.audioUrl,
            durationSeconds: this.elapsedSeconds
          });
        };

        this.mediaRecorder.start();
        this.state = 'recording';
        this.elapsedSeconds = 0;
        this.updateControls();
        this.startTimer();
        this.startAudioAnalysis();

      } catch (err) {
        console.error("Microphone access error:", err);
        this.renderFallbackUI("Microphone permission was denied or not accessible. Please check browser permissions or use the self-assessment fallback below.");
      }
    }

    stopRecording() {
      if (this.mediaRecorder && this.state === 'recording') {
        this.mediaRecorder.stop();
        if (this.stream) {
          this.stream.getTracks().forEach(track => track.stop());
        }
        this.stopTimer();
      }
    }

    resetRecording() {
      this.stopTimer();
      this.stopAudioAnalysis();

      if (this.audioUrl) {
        URL.revokeObjectURL(this.audioUrl);
      }

      this.audioChunks = [];
      this.audioBlob = null;
      this.audioUrl = null;
      this.elapsedSeconds = 0;
      this.state = 'idle';

      const previewContainer = this.container.querySelector('#recorder-preview-container');
      if (previewContainer) previewContainer.style.display = 'none';

      const meterBar = this.container.querySelector('#recorder-meter-bar');
      if (meterBar) meterBar.style.width = '0%';

      this.updateControls();
    }

    startTimer() {
      this.stopTimer();
      this.timerInterval = setInterval(() => {
        this.elapsedSeconds++;
        const display = this.container.querySelector('#recorder-timer-display');
        if (display) {
          display.textContent = `${this.formatTime(this.elapsedSeconds)} / ${this.formatTime(this.maxSeconds)}`;
        }

        if (this.elapsedSeconds >= this.maxSeconds) {
          this.stopRecording();
        }
      }, 1000);
    }

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    startAudioAnalysis() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;

        this.audioContext = new AudioCtx();
        const source = this.audioContext.createMediaStreamSource(this.stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 64;
        source.connect(this.analyser);

        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        const meterBar = this.container.querySelector('#recorder-meter-bar');

        const drawMeter = () => {
          if (this.state !== 'recording') return;
          this.analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const average = sum / dataArray.length;
          const levelPct = Math.min(100, Math.round((average / 128) * 100));

          if (meterBar) {
            meterBar.style.width = `${levelPct}%`;
          }

          this.animFrameId = requestAnimationFrame(drawMeter);
        };

        drawMeter();
      } catch (e) {
        console.warn("Audio level meter initialization failed:", e);
      }
    }

    stopAudioAnalysis() {
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
      if (this.audioContext && this.audioContext.state !== 'closed') {
        this.audioContext.close();
        this.audioContext = null;
      }
    }

    updateControls() {
      const btnStart = this.container.querySelector('#btn-record-start');
      const btnStop = this.container.querySelector('#btn-record-stop');
      const btnDelete = this.container.querySelector('#btn-record-delete');
      const statusBadge = this.container.querySelector('.recorder-badge');

      if (statusBadge) {
        statusBadge.className = `recorder-badge recorder-badge-${this.state}`;
        statusBadge.textContent = this.getStateLabel();
      }

      if (this.state === 'idle') {
        if (btnStart) btnStart.style.display = 'inline-flex';
        if (btnStop) btnStop.style.display = 'none';
        if (btnDelete) btnDelete.style.display = 'none';
      } else if (this.state === 'recording') {
        if (btnStart) btnStart.style.display = 'none';
        if (btnStop) btnStop.style.display = 'inline-flex';
        if (btnDelete) btnDelete.style.display = 'none';
      } else if (this.state === 'stopped') {
        if (btnStart) btnStart.style.display = 'none';
        if (btnStop) btnStop.style.display = 'none';
        if (btnDelete) btnDelete.style.display = 'inline-flex';
      }

      this.onStateChange(this.state);
    }

    getFallbackData() {
      const select = this.container.querySelector('#recorder-fallback-select');
      const notes = this.container.querySelector('#recorder-fallback-notes');
      return {
        estimatedBand: select ? select.value : 'B1',
        notes: notes ? notes.value : '',
        isFallback: true
      };
    }

    getStateLabel() {
      switch (this.state) {
        case 'recording': return '🔴 Recording...';
        case 'stopped': return '🟢 Recorded';
        case 'unsupported': return '⚠️ Recording Unavailable';
        default: return '⚪ Ready to Record';
      }
    }

    formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  }

  return AudioRecorder;
}));
