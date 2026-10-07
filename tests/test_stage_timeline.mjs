import test from 'node:test';
import assert from 'node:assert/strict';

import { StageTimeline } from '../blog/js/stage/timeline.js';

test('StageTimeline - Auto-generates beats for post without explicit beats', () => {
  const samplePost = {
    title: 'Sample Presentation Title',
    dek: 'Sample subheadline description',
    blocks: [
      { type: 'heading', level: 2, text: 'Introduction' },
      { type: 'paragraph', text: 'This is the first paragraph.' },
      { type: 'pullquote', quote: 'Language learning is journey.', attribution: 'JY DM' }
    ]
  };

  const mockCamera = {
    spotlight: () => {},
    pushIn: () => {},
    pullBack: () => {},
    focus: () => {},
    clearSpotlight: () => {}
  };

  const timeline = new StageTimeline(samplePost, mockCamera);

  // Title beat + 3 block beats + Outro beat = 5 beats total
  assert.strictEqual(timeline.beats.length, 5);
  assert.strictEqual(timeline.beats[0].id, 'beat-title');
  assert.strictEqual(timeline.beats[0].caption, 'Sample Presentation Title');
  assert.strictEqual(timeline.beats[4].id, 'beat-outro');
});

test('StageTimeline - Uses explicit beat properties when present', () => {
  const samplePost = {
    title: 'Explicit Beats Post',
    blocks: [
      {
        type: 'heading',
        text: 'Custom Beat Heading',
        say: 'Welcome to this custom beat.',
        beat: {
          duration: 1200,
          camera: 'push-in',
          reveal: 'fade-in'
        }
      }
    ]
  };

  const timeline = new StageTimeline(samplePost, null);
  const headingBeat = timeline.beats[1];

  assert.strictEqual(headingBeat.duration, 1200);
  assert.strictEqual(headingBeat.cameraPreset, 'push-in');
  assert.strictEqual(headingBeat.say, 'Welcome to this custom beat.');
});

test('StageTimeline - Playback controls (play, pause, togglePlay, jumpTo)', () => {
  const samplePost = {
    title: 'Playback Controls Post',
    blocks: [{ type: 'paragraph', text: 'Paragraph text' }]
  };

  let lastBeatIndex = -1;
  let playState = false;

  const timeline = new StageTimeline(samplePost, null, {
    onBeatChange: (beat, idx) => { lastBeatIndex = idx; },
    onPlayStateChange: (isPlaying) => { playState = isPlaying; }
  });

  assert.strictEqual(timeline.isPlaying, false);

  timeline.play();
  assert.strictEqual(timeline.isPlaying, true);
  assert.strictEqual(playState, true);
  assert.strictEqual(lastBeatIndex, 0);

  timeline.pause();
  assert.strictEqual(timeline.isPlaying, false);
  assert.strictEqual(playState, false);

  timeline.jumpTo(2);
  assert.strictEqual(timeline.currentIndex, 2);
  assert.strictEqual(lastBeatIndex, 2);
});
