/**
 * blog/js/stage/timeline.js
 * Beat timeline playback engine for COSY Stage Mode.
 *
 * Sequenced playback of beats defined in post blocks or auto-generated defaults.
 */

export class StageTimeline {
  constructor(post, camera, callbacks = {}) {
    this.post = post;
    this.camera = camera;
    this.callbacks = callbacks; // { onBeatChange, onPlayStateChange, onProgress }

    this.beats = [];
    this.currentIndex = -1;
    this.isPlaying = false;
    this.playbackSpeed = 1.0;
    this.timerId = null;

    this.extractOrGenerateBeats();
  }

  /** Extracts explicit block beats or auto-generates default presentation beats */
  extractOrGenerateBeats() {
    this.beats = [];

    // Title beat always comes first
    this.beats.push({
      id: 'beat-title',
      targetSelector: '#stage-title-card',
      duration: 4000,
      cameraPreset: 'pull-back',
      caption: this.post.title || 'COSY Gazette',
      say: this.post.dek || this.post.title || ''
    });

    const blocks = this.post.blocks || [];
    let explicitBeatsCount = 0;

    blocks.forEach((block, idx) => {
      const blockId = `#block-${idx}`;

      if (block.beat) {
        explicitBeatsCount++;
        this.beats.push({
          id: `beat-block-${idx}`,
          targetSelector: blockId,
          duration: block.beat.duration || 3500,
          cameraPreset: block.beat.camera || 'focus',
          reveal: block.beat.reveal || 'fade-in',
          caption: block.text || block.title || block.quote || '',
          say: block.say || block.text || block.title || ''
        });
      } else {
        // Auto-generate default beat
        let duration = 3000;
        let preset = 'focus';

        if (block.type === 'heading') {
          duration = 3500;
          preset = 'push-in';
        } else if (block.type === 'pullquote') {
          duration = 5000;
          preset = 'spotlight';
        } else if (block.type === 'culture-bite') {
          duration = 4500;
          preset = 'push-in';
        }

        this.beats.push({
          id: `beat-block-${idx}`,
          targetSelector: blockId,
          duration,
          cameraPreset: preset,
          reveal: 'fade-in',
          caption: block.text || block.title || block.quote || block.question || '',
          say: block.say || block.text || block.title || ''
        });
      }
    });

    // Final outro beat
    this.beats.push({
      id: 'beat-outro',
      targetSelector: '#stage-outro-card',
      duration: 3500,
      cameraPreset: 'pull-back',
      caption: 'COSYlanguages • Thanks for learning with us!',
      say: 'Thanks for learning with us!'
    });
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;

    if (this.callbacks.onPlayStateChange) {
      this.callbacks.onPlayStateChange(true);
    }

    if (this.currentIndex < 0) {
      this.jumpTo(0);
    } else {
      this.scheduleNextBeat();
    }
  }

  pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.callbacks.onPlayStateChange) {
      this.callbacks.onPlayStateChange(false);
    }
  }

  togglePlay() {
    if (this.isPlaying) this.pause();
    else this.play();
  }

  jumpTo(index) {
    if (index < 0 || index >= this.beats.length) return;

    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    this.currentIndex = index;
    const beat = this.beats[index];

    // Trigger camera movement
    if (this.camera && beat.targetSelector) {
      const targetEl = document.querySelector(beat.targetSelector);

      if (beat.cameraPreset === 'spotlight' && targetEl) {
        this.camera.spotlight(targetEl);
      } else if (beat.cameraPreset === 'push-in' && targetEl) {
        this.camera.pushIn(targetEl);
      } else if (beat.cameraPreset === 'pull-back') {
        this.camera.clearSpotlight();
        this.camera.pullBack();
      } else if (targetEl) {
        this.camera.clearSpotlight();
        this.camera.focus(targetEl);
      }
    }

    if (this.callbacks.onBeatChange) {
      this.callbacks.onBeatChange(beat, index, this.beats.length);
    }

    if (this.callbacks.onProgress) {
      this.callbacks.onProgress((index + 1) / this.beats.length);
    }

    if (this.isPlaying) {
      this.scheduleNextBeat();
    }
  }

  scheduleNextBeat() {
    if (!this.isPlaying) return;

    const currentBeat = this.beats[this.currentIndex];
    const delay = (currentBeat ? currentBeat.duration : 3000) / this.playbackSpeed;

    this.timerId = setTimeout(() => {
      if (this.currentIndex < this.beats.length - 1) {
        this.jumpTo(this.currentIndex + 1);
      } else {
        this.pause(); // Finished timeline
      }
    }, delay);
  }

  next() {
    if (this.currentIndex < this.beats.length - 1) {
      this.jumpTo(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.jumpTo(this.currentIndex - 1);
    }
  }

  setSpeed(speed) {
    this.playbackSpeed = speed;
  }

  /** Total duration of all beats in milliseconds */
  getTotalDuration() {
    return this.beats.reduce((sum, b) => sum + (b.duration || 3500), 0);
  }

  /** Deterministically seeks stage presentation state to an exact millisecond timestamp */
  seekTime(timeMs) {
    const totalDuration = this.getTotalDuration();
    const clampedTime = Math.max(0, Math.min(timeMs, totalDuration));
    this.currentTimeMs = clampedTime;

    let cumulativeTime = 0;
    let activeIndex = 0;
    let beatStartTime = 0;

    for (let i = 0; i < this.beats.length; i++) {
      const beatDuration = this.beats[i].duration || 3500;
      if (clampedTime >= cumulativeTime && (clampedTime < cumulativeTime + beatDuration || i === this.beats.length - 1)) {
        activeIndex = i;
        beatStartTime = cumulativeTime;
        break;
      }
      cumulativeTime += beatDuration;
    }

    const currentBeat = this.beats[activeIndex];
    const localElapsed = clampedTime - beatStartTime;
    const beatDuration = currentBeat.duration || 3500;

    this.currentIndex = activeIndex;

    if (this.camera && typeof this.camera.setTransformForTime === 'function') {
      this.camera.setTransformForTime(this.beats, activeIndex, localElapsed, beatDuration);
    }

    if (this.callbacks.onBeatChange) {
      this.callbacks.onBeatChange(currentBeat, activeIndex, this.beats.length);
    }

    if (this.callbacks.onProgress) {
      this.callbacks.onProgress(totalDuration > 0 ? clampedTime / totalDuration : 0);
    }

    return {
      currentTimeMs: clampedTime,
      activeIndex,
      totalBeats: this.beats.length,
      isFinished: clampedTime >= totalDuration
    };
  }

  /** Advances clock deterministically by dtMs milliseconds */
  advanceClock(dtMs) {
    const nextTime = (this.currentTimeMs || 0) + dtMs;
    return this.seekTime(nextTime);
  }

  /** Returns current timeline state */
  getState() {
    const totalDuration = this.getTotalDuration();
    return {
      currentTimeMs: this.currentTimeMs || 0,
      activeIndex: this.currentIndex,
      totalBeats: this.beats.length,
      isFinished: (this.currentTimeMs || 0) >= totalDuration
    };
  }
}
