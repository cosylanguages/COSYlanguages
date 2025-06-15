// User progress module for XP, streaks, lesson completion, and gamification
const UserProgress = {
    data: {
        xp: 0,
        streak: 0,
        lastActive: null,
        completedLessons: [],
        achievements: [],
        level: 1,
        firstTimeTodayForDay1: {},
        learnedItems: [] // Ensure it's here too
    },
    load() {
        const saved = localStorage.getItem('userProgress');
        if (saved) {
            this.data = JSON.parse(saved);
            if (!this.data.firstTimeTodayForDay1) {
                this.data.firstTimeTodayForDay1 = {};
            }
            // Ensure default values for new properties if loading old data
            if (this.data.xp === undefined) this.data.xp = 0;
            if (this.data.level === undefined) this.data.level = 1;
            if (this.data.streak === undefined) this.data.streak = 0;
            if (!this.data.learnedItems) {
                this.data.learnedItems = [];
            } else {
                this.data.learnedItems = this.data.learnedItems.map(item => ({
                    ...item,
                    masteryLevel: item.masteryLevel === undefined ? 1 : item.masteryLevel,
                    incorrectAttempts: item.incorrectAttempts === undefined ? 0 : item.incorrectAttempts
                }));
            }
        } else {
            // If no saved data, initialize with defaults
            this.data = {
                xp: 0,
                streak: 0,
                lastActive: null,
                completedLessons: [],
                achievements: [],
                level: 1,
                firstTimeTodayForDay1: {},
                learnedItems: []
            };
        }
        this.updateXPLevelDisplay(); // Call the update here
    },
    updateXPLevelDisplay() {
        const xpElement = document.getElementById('xp-display');
        if (xpElement) {
            xpElement.textContent = `XP: ${this.data.xp}`;
        }
        const levelElement = document.getElementById('level-display');
        if (levelElement) {
            levelElement.textContent = `Level: ${this.data.level}`;
        }
        const streakElement = document.getElementById('streak-display');
        if (streakElement) {
            streakElement.textContent = `Streak: ${this.data.streak}`;
        }
    },
    save() {
        localStorage.setItem('userProgress', JSON.stringify(this.data));
    },
    addXP(amount) {
        this.data.xp += amount;
        if (this.data.xp < 0) this.data.xp = 0; // Prevent negative XP
        const newLevel = Math.floor(this.data.xp / 50) + 1;
        if (newLevel > this.data.level) {
            this.data.level = newLevel;
            if (typeof showConfetti === 'function') showConfetti();
            if (typeof showToast === 'function') showToast('🏅 Level Up!');
        }
        this.save();
        this.updateXPLevelDisplay();
    },
    completeLesson(lessonId) {
        if (!this.data.completedLessons.includes(lessonId)) {
            this.data.completedLessons.push(lessonId);
        }
        this.save();
    },
    updateStreak() {
        const today = new Date().toDateString();
        if (this.data.lastActive !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (this.data.lastActive === yesterday) {
                this.data.streak += 1;
            } else {
                this.data.streak = 1;
            }
            this.data.lastActive = today;
            this.addXP(10); // Award XP for maintaining a streak
            this.save();
            this.updateXPLevelDisplay();
        }
    },
    recordAnswer(isCorrect, itemId, itemType) { // Added itemId, itemType
        const itemIndex = itemId && itemType ? this.data.learnedItems.findIndex(item => item.id === itemId && item.type === itemType) : -1;
        if (isCorrect) {
            this.addXP(5); // Award 5 XP for a correct answer
            if (itemIndex > -1) {
                this.data.learnedItems[itemIndex].masteryLevel = Math.min(5, (this.data.learnedItems[itemIndex].masteryLevel || 1) + 1);
                // Optional: Reset incorrect attempts on correct answer
                // this.data.learnedItems[itemIndex].incorrectAttempts = 0;
            }
        } else {
            this.addXP(-2); // Deduct 2 XP for an incorrect answer
            if (itemIndex > -1) {
                this.data.learnedItems[itemIndex].masteryLevel = Math.max(0, (this.data.learnedItems[itemIndex].masteryLevel || 1) - 1);
                this.data.learnedItems[itemIndex].incorrectAttempts = (this.data.learnedItems[itemIndex].incorrectAttempts || 0) + 1;
            }
        }
        this.save(); // Save specifically for learnedItems changes if not covered by addXP
        this.updateXPLevelDisplay(); // Ensure display updates if addXP didn't run or for learnedItem changes
    },
    addLearnedItem(itemId, itemType) {
        const existingItemIndex = this.data.learnedItems.findIndex(item => item.id === itemId && item.type === itemType);
        const nextReviewDate = new Date();
        nextReviewDate.setDate(nextReviewDate.getDate() + 1); // Default next review in 1 day

        if (existingItemIndex > -1) {
            // Item already learned, update its last review and next review date (e.g., reset its schedule if re-learned)
            this.data.learnedItems[existingItemIndex].lastReviewed = new Date().toISOString();
            this.data.learnedItems[existingItemIndex].nextReview = nextReviewDate.toISOString();
            this.data.learnedItems[existingItemIndex].consecutiveCorrect = 0; // Reset correct streak for this item
            this.data.learnedItems[existingItemIndex].masteryLevel = 1; // Reset mastery
            this.data.learnedItems[existingItemIndex].incorrectAttempts = 0; // Reset attempts
            this.data.learnedItems[existingItemIndex].interval = 1; // Reset interval
        } else {
            this.data.learnedItems.push({
                id: itemId,
                type: itemType,
                firstLearned: new Date().toISOString(),
                lastReviewed: new Date().toISOString(),
                nextReview: nextReviewDate.toISOString(),
                consecutiveCorrect: 0, // How many times answered correctly in a row during review
                interval: 1, // Current review interval in days
                masteryLevel: 1, // Initial mastery level
                incorrectAttempts: 0 // Initial incorrect attempts
            });
        }
        this.save();
    },
    updateReviewedItem(itemId, itemType, answeredCorrectly) {
        const itemIndex = this.data.learnedItems.findIndex(item => item.id === itemId && item.type === itemType);
        if (itemIndex === -1) return;
        const item = this.data.learnedItems[itemIndex];
        item.lastReviewed = new Date().toISOString();
        const nextReviewDate = new Date();
        if (answeredCorrectly) {
            item.consecutiveCorrect = (item.consecutiveCorrect || 0) + 1;
            item.interval = Math.min((item.interval || 1) * 2, 90); // Cap at ~3 months
            item.masteryLevel = Math.min(5, (item.masteryLevel || 1) + 1); // Increase mastery
        } else {
            item.consecutiveCorrect = 0;
            item.interval = 1; // Reset interval if incorrect
            item.masteryLevel = Math.max(0, (item.masteryLevel || 1) - 1); // Decrease mastery
            item.incorrectAttempts = (item.incorrectAttempts || 0) + 1;
        }
        nextReviewDate.setDate(nextReviewDate.getDate() + item.interval);
        item.nextReview = nextReviewDate.toISOString();
        this.data.learnedItems[itemIndex] = item;
        this.save();
        this.updateXPLevelDisplay(); // Update display
    },
    getItemsForReview() {
        const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD part of today
        return this.data.learnedItems.filter(item => {
            if (!item.nextReview) return false; // Ensure item has a nextReview date
            const nextReviewDay = item.nextReview.split('T')[0];
            return nextReviewDay <= today;
        });
    },
    getWeightedLearnableItems(allItemsRaw, itemType) {
        // allItemsRaw is an array of basic items, e.g., {id: 'word1', ...}
        const weightedItems = allItemsRaw.map(rawItem => {
            const learnedItem = this.data.learnedItems.find(li => li.id === rawItem.id && li.type === itemType);
            let weight = 10; // Default weight
            if (learnedItem) {
                // Decrease weight for higher mastery (less likely to be picked)
                weight -= learnedItem.masteryLevel * 2; // e.g., mastery 5 -> weight 0
                // Increase weight for more incorrect attempts (more likely to be picked)
                weight += learnedItem.incorrectAttempts;
            }
            // Ensure weight is at least 1 (or some small positive number) to allow selection
            return { ...rawItem, weight: Math.max(1, weight) };
        });
        // Simple weighted selection: create a list where items are repeated by their weight
        const selectionPool = [];
        weightedItems.forEach(item => {
            for (let i = 0; i < item.weight; i++) {
                selectionPool.push(item);
            }
        });
        return selectionPool; // The exercise module would then pick randomly from this pool
    }
};

export default UserProgress;
