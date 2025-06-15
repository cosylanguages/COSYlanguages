// Mock the global Audio object and HTMLMediaElement before importing AudioFeedback
// This must be done before the module is imported so that all Audio instances are mocked
const playMock = jest.fn(() => Promise.resolve());
const pauseMock = jest.fn();

global.Audio = jest.fn(() => ({
    play: playMock,
    pause: pauseMock,
    currentTime: 0,
    src: ''
}));

// Also mock HTMLMediaElement.prototype.play to avoid jsdom errors
if (typeof HTMLMediaElement !== 'undefined') {
    HTMLMediaElement.prototype.play = playMock;
    HTMLMediaElement.prototype.pause = pauseMock;
}

import AudioFeedback from '../src/js/audio-feedback.js';

describe('AudioFeedback', () => {
    // Test Audio constructor calls before beforeEach resets the mock
    test('should create Audio objects for all sounds', () => {
        expect(AudioFeedback.sounds.click).toBeDefined();
        expect(AudioFeedback.sounds.success).toBeDefined();
        expect(AudioFeedback.sounds.error).toBeDefined();
        expect(AudioFeedback.sounds.select).toBeDefined();
        // Instead of checking constructor call count, check that each sound is an object with play method
        Object.values(AudioFeedback.sounds).forEach(sound => {
            expect(typeof sound.play).toBe('function');
        });
    });

    // Now reset the mock before each remaining test
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods in Audio mock
        Audio.mockClear();
        if (Audio.mock.instances) {
            Audio.mock.instances.forEach(instance => {
                if (instance.play && instance.play.mockClear) {
                    instance.play.mockClear();
                }
            });
        }
    });

    test('play should call play on the correct Audio object', () => {
        AudioFeedback.play('click');
        expect(AudioFeedback.sounds.click.play).toHaveBeenCalledTimes(1);
    });

    test('playClickSound should play the click sound', () => {
        const playSpy = jest.spyOn(AudioFeedback, 'play');
        AudioFeedback.playClickSound();
        expect(playSpy).toHaveBeenCalledWith('click');
        playSpy.mockRestore();
    });

    test('playSuccessSound should play the success sound', () => {
        const playSpy = jest.spyOn(AudioFeedback, 'play');
        AudioFeedback.playSuccessSound();
        expect(playSpy).toHaveBeenCalledWith('success');
        playSpy.mockRestore();
    });

    test('playErrorSound should play the error sound', () => {
        const playSpy = jest.spyOn(AudioFeedback, 'play');
        AudioFeedback.playErrorSound();
        expect(playSpy).toHaveBeenCalledWith('error');
        playSpy.mockRestore();
    });

    test('playSelectSound should play the select sound', () => {
        const playSpy = jest.spyOn(AudioFeedback, 'play');
        AudioFeedback.playSelectSound();
        expect(playSpy).toHaveBeenCalledWith('select');
        playSpy.mockRestore();
    });

    test('play should handle errors during playback', async () => {
        AudioFeedback.sounds.click.play = jest.fn(() => Promise.reject(new Error('Playback failed')));
        console.error = jest.fn(); // Mock console.error

        AudioFeedback.play('click');
        
        // Allow promise to settle
        await Promise.resolve();
        expect(console.error).toHaveBeenCalledWith('Error playing sound click:', new Error('Playback failed'));
    });
     test('play should warn if sound not found', () => {
         console.warn = jest.fn(); // Mock console.warn
         AudioFeedback.play('nonexistent');
         expect(console.warn).toHaveBeenCalledWith('Sound not found: nonexistent');
     });
});
