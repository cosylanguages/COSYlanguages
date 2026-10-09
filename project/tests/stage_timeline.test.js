const assert = require('assert');

async function runTests() {
  console.log('🧪 Running StageTimeline Unit Tests...');

  const { StageTimeline } = await import('../../blog/js/stage/timeline.js');

  // Test 1: Default beat auto-generation and WPM duration derivation
  const mockPost = {
    title: 'Test Post Title',
    dek: 'This is a test dek for WPM duration derivation testing in Stage mode.',
    blocks: [
      { type: 'heading', text: 'Section Heading' },
      { type: 'paragraph', text: 'This paragraph has fifteen words to test the WPM calculation formula in the timeline class.' },
      {
        type: 'table',
        headers: ['Col 1', 'Col 2'],
        rows: [
          ['Row 1 Col 1', 'Row 1 Col 2'],
          ['Row 2 Col 1', 'Row 2 Col 2'],
          ['Row 3 Col 1', 'Row 3 Col 2'],
          ['Row 4 Col 1', 'Row 4 Col 2']
        ]
      },
      { type: 'pullquote', quote: 'A test quote' }
    ]
  };

  const timeline = new StageTimeline(mockPost, null);
  assert(timeline.beats.length > 0, 'Timeline should contain beats');

  // Check title beat
  assert.strictEqual(timeline.beats[0].id, 'beat-title');
  assert.strictEqual(timeline.beats[0].cameraPreset, 'pull-back');

  // Check heading beat
  const headingBeat = timeline.beats.find(b => b.id === 'beat-block-0');
  assert(headingBeat, 'Heading beat should exist');
  assert.strictEqual(headingBeat.cameraPreset, 'push-in');

  // Check table row group beats
  const tableBeat = timeline.beats.find(b => b.id.includes('beat-block-2'));
  assert(tableBeat, 'Table row group beat should exist');
  assert.strictEqual(tableBeat.cameraPreset, 'focus');

  // Check pullquote beat
  const quoteBeat = timeline.beats.find(b => b.id === 'beat-block-3');
  assert(quoteBeat, 'Pullquote beat should exist');
  assert.strictEqual(quoteBeat.cameraPreset, 'spotlight');

  // Check outro beat
  const outroBeat = timeline.beats[timeline.beats.length - 1];
  assert.strictEqual(outroBeat.id, 'beat-outro');
  assert.strictEqual(outroBeat.cameraPreset, 'pull-back');

  // Test 2: Hand-written beat fields override defaults
  const customPost = {
    title: 'Custom Beat Post',
    blocks: [
      {
        type: 'paragraph',
        text: 'Custom text',
        beat: {
          camera: 'spotlight',
          duration: 9999,
          say: 'Explicit custom say text'
        }
      }
    ]
  };

  const customTimeline = new StageTimeline(customPost, null);
  const customBeat = customTimeline.beats[1];
  assert.strictEqual(customBeat.cameraPreset, 'spotlight', 'Explicit camera preset should win');
  assert.strictEqual(customBeat.duration, 9999, 'Explicit duration should win');
  assert.strictEqual(customBeat.say, 'Explicit custom say text', 'Explicit say text should win');

  console.log('✅ All StageTimeline Unit Tests Passed!');
}

runTests().catch(err => {
  console.error('❌ StageTimeline Unit Tests Failed:', err);
  process.exit(1);
});
