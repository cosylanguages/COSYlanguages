/**
 * blog/js/stage/camera.js
 * Smooth camera zoom & pan system for COSY Stage Mode.
 *
 * Uses requestAnimationFrame for smooth 60fps camera movement.
 * Respects prefers-reduced-motion by using instantaneous jump cuts with cross-fades.
 */

export class StageCamera {
  constructor(stageElement, viewportElement) {
    this.stage = stageElement;
    this.viewport = viewportElement;
    this.currentTransform = { x: 0, y: 0, scale: 1 };
    this.targetTransform = { x: 0, y: 0, scale: 1 };
    this.animating = false;
    this.animationFrameId = null;

    // Check reduced motion preference
    this.reducedMotion = typeof window !== 'undefined' &&
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Smoothly transitions camera transform to target bounding element or explicit coordinates.
   */
  moveTo(target, options = {}) {
    const duration = this.reducedMotion ? 0 : (options.duration || 1000);
    const easing = options.easing || 'cubic-bezier(0.25, 1, 0.5, 1)';
    const scale = options.scale || 1;

    let targetX = 0;
    let targetY = 0;

    if (target && typeof target.getBoundingClientRect === 'function' && this.viewport) {
      // Calculate offset relative to the unscaled stage-viewport
      const currentX = this.currentTransform.x;
      const currentY = this.currentTransform.y;
      const currentScale = this.currentTransform.scale || 1;

      const rect = target.getBoundingClientRect();
      const viewportRect = this.viewport.getBoundingClientRect();

      // Unscaled offset of element center from current viewport center
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const viewportCenterX = viewportRect.left + viewportRect.width / 2;
      const viewportCenterY = viewportRect.top + viewportRect.height / 2;

      const offsetX = (elementCenterX - viewportCenterX) / currentScale;
      const offsetY = (elementCenterY - viewportCenterY) / currentScale;

      targetX = currentX - offsetX * scale;
      targetY = currentY - offsetY * scale;
    } else if (typeof target === 'object' && target !== null) {
      targetX = target.x || 0;
      targetY = target.y || 0;
    }

    this.targetTransform = { x: targetX, y: targetY, scale };

    if (duration === 0) {
      this.currentTransform = { ...this.targetTransform };
      this.applyTransform();
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const startX = this.currentTransform.x;
      const startY = this.currentTransform.y;
      const startScale = this.currentTransform.scale;

      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        this.currentTransform.x = startX + (targetX - startX) * easeProgress;
        this.currentTransform.y = startY + (targetY - startY) * easeProgress;
        this.currentTransform.scale = startScale + (scale - startScale) * easeProgress;

        this.applyTransform();

        if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(animate);
        } else {
          this.animating = false;
          resolve();
        }
      };

      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
      this.animating = true;
      this.animationFrameId = requestAnimationFrame(animate);
    });
  }

  /** Camera Presets */
  focus(element, options = {}) {
    return this.moveTo(element, { scale: 1.25, duration: 800, ...options });
  }

  pushIn(element, options = {}) {
    return this.moveTo(element, { scale: 1.5, duration: 1200, ...options });
  }

  pullBack(options = {}) {
    return this.moveTo(null, { scale: 1, x: 0, y: 0, duration: 1000, ...options });
  }

  panAcross(startElement, endElement, options = {}) {
    return this.moveTo(startElement, { scale: 1.2, duration: 600 }).then(() => {
      return this.moveTo(endElement, { scale: 1.2, duration: 1400, ...options });
    });
  }

  spotlight(element) {
    if (!element) return;
    const allBlocks = this.stage.querySelectorAll('.stage-block, .block-item');
    allBlocks.forEach(b => {
      if (b === element || element.contains(b)) {
        b.classList.add('stage-spotlight-active');
        b.classList.remove('stage-spotlight-dim');
      } else {
        b.classList.add('stage-spotlight-dim');
        b.classList.remove('stage-spotlight-active');
      }
    });
    return this.focus(element);
  }

  clearSpotlight() {
    if (!this.stage) return;
    const allBlocks = this.stage.querySelectorAll('.stage-block, .block-item');
    allBlocks.forEach(b => {
      b.classList.remove('stage-spotlight-dim', 'stage-spotlight-active');
    });
  }

  getTargetTransformForBeat(beat) {
    if (!beat) return { x: 0, y: 0, scale: 1 };
    const preset = beat.cameraPreset || 'focus';
    const targetEl = (beat.targetSelector && typeof document !== 'undefined')
      ? document.querySelector(beat.targetSelector)
      : null;

    let scale = 1;
    if (preset === 'push-in') scale = 1.25;
    else if (preset === 'focus' || preset === 'spotlight') scale = 1.1;
    else if (preset === 'pull-back') scale = 1;

    let x = 0;
    let y = 0;

    if (preset !== 'pull-back' && targetEl && typeof targetEl.getBoundingClientRect === 'function' && this.viewport) {
      const currentX = this.currentTransform.x;
      const currentY = this.currentTransform.y;
      const currentScale = this.currentTransform.scale || 1;

      const rect = targetEl.getBoundingClientRect();
      const viewportRect = this.viewport.getBoundingClientRect();

      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const viewportCenterX = viewportRect.left + viewportRect.width / 2;
      const viewportCenterY = viewportRect.top + viewportRect.height / 2;

      const offsetX = (elementCenterX - viewportCenterX) / currentScale;
      const offsetY = (elementCenterY - viewportCenterY) / currentScale;

      x = currentX - offsetX * scale;
      y = currentY - offsetY * scale;
    }

    return { x, y, scale };
  }

  /** Synchronously sets transform at a given timestamp/beat for deterministic rendering */
  setTransformForTime(beats, activeIndex, localElapsedMs, beatDurationMs) {
    if (!beats || activeIndex < 0 || activeIndex >= beats.length) return;

    const currentBeat = beats[activeIndex];
    const targetEl = (currentBeat.targetSelector && typeof document !== 'undefined')
      ? document.querySelector(currentBeat.targetSelector)
      : null;

    if (currentBeat.cameraPreset === 'spotlight' && targetEl) {
      this.spotlight(targetEl);
    } else {
      this.clearSpotlight();
    }

    const currentTarget = this.getTargetTransformForBeat(currentBeat);
    const prevTarget = activeIndex > 0
      ? this.getTargetTransformForBeat(beats[activeIndex - 1])
      : { x: 0, y: 0, scale: 1 };

    let cameraMoveDuration = 1000;
    if (currentBeat.cameraPreset === 'focus' || currentBeat.cameraPreset === 'spotlight') cameraMoveDuration = 800;
    else if (currentBeat.cameraPreset === 'push-in') cameraMoveDuration = 1200;

    let progress = Math.min(1, Math.max(0, localElapsedMs / cameraMoveDuration));
    if (this.reducedMotion) progress = 1;

    const easeProgress = 1 - Math.pow(1 - progress, 3);

    this.currentTransform = {
      x: prevTarget.x + (currentTarget.x - prevTarget.x) * easeProgress,
      y: prevTarget.y + (currentTarget.y - prevTarget.y) * easeProgress,
      scale: prevTarget.scale + (currentTarget.scale - prevTarget.scale) * easeProgress
    };

    this.applyTransform();
  }

  applyTransform() {
    if (!this.viewport) return;
    const { x, y, scale } = this.currentTransform;
    this.viewport.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
  }
}
