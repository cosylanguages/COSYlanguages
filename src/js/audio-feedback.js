// Audio feedback module
const AudioFeedback = {
    sounds: {
        click: new Audio('assets/sounds/click.mp3'),
        success: new Audio('assets/sounds/success.mp3'),
        error: new Audio('assets/sounds/error.mp3'),
        select: new Audio('assets/sounds/select.mp3')
    },

    play(soundName) {
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0; // Rewind to the start
            sound.play().catch(error => console.error(`Error playing sound ${soundName}:`, error));
        } else {
            console.warn(`Sound not found: ${soundName}`);
        }
    },

    playClickSound() {
        this.play('click');
    },

    playSuccessSound() {
        this.play('success');
    },

    playErrorSound() {
        this.play('error');
    },

    playSelectSound() {
        this.play('select');
    }
};

export default AudioFeedback;
