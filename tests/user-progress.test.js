// tests/user-progress.test.js
import UserProgress from '../src/js/user-progress.js';

// Mock localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: jest.fn(key => store[key] || null),
        setItem: jest.fn((key, value) => {
            store[key] = value.toString();
        }),
        clear: jest.fn(() => {
            store = {};
        }),
        removeItem: jest.fn(key => {
            delete store[key];
        })
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock UI update functions that might be called if not strictly testing UI
global.showConfetti = jest.fn();
global.showToast = jest.fn();
document.body.innerHTML = `
    <span id="xp-display"></span>
    <span id="level-display"></span>
    <span id="streak-display"></span>
`;


describe('UserProgress', () => {
    beforeEach(() => {
        localStorageMock.clear();
        // Reset UserProgress.data to a clean, default state before each test
        UserProgress.data = {
            xp: 0,
            streak: 0,
            lastActive: null,
            completedLessons: [],
            achievements: [],
            level: 1,
            firstTimeTodayForDay1: {},
            learnedItems: []
        };
        UserProgress.save(); // Save this default state to mock localStorage
        UserProgress.load(); // Load it back to ensure consistency and update displays
    });

    test('initial values should be set correctly after load', () => {
        // localStorage is clear, load initializes defaults
        localStorageMock.clear(); 
        UserProgress.load(); 
        expect(UserProgress.data.xp).toBe(0);
        expect(UserProgress.data.level).toBe(1);
        expect(UserProgress.data.streak).toBe(0);
        expect(UserProgress.data.learnedItems).toEqual([]);
    });

    describe('addXP', () => {
        test('should increase XP and update level correctly', () => {
            UserProgress.addXP(60); // 50 XP for level 2, +10
            expect(UserProgress.data.xp).toBe(60);
            expect(UserProgress.data.level).toBe(2);
            expect(document.getElementById('xp-display').textContent).toBe('XP: 60');
            expect(document.getElementById('level-display').textContent).toBe('Level: 2');
        });

        test('should not allow XP to go below zero', () => {
            UserProgress.addXP(10);
            UserProgress.addXP(-20);
            expect(UserProgress.data.xp).toBe(0);
        });
         test('should call showConfetti and showToast on level up', () => {
             UserProgress.addXP(50); // Level up
             expect(showConfetti).toHaveBeenCalled();
             expect(showToast).toHaveBeenCalledWith('🏅 Level Up!');
         });
    });

    describe('recordAnswer', () => {
        test('correct answer should increase XP and update mastery', () => {
            UserProgress.addLearnedItem('word1', 'vocabulary');
            UserProgress.recordAnswer(true, 'word1', 'vocabulary');
            expect(UserProgress.data.xp).toBe(5);
            const item = UserProgress.data.learnedItems.find(i => i.id === 'word1');
            expect(item.masteryLevel).toBe(2); // Initial 1 + 1
        });

        test('incorrect answer should decrease XP (not below 0) and update mastery/attempts', () => {
            UserProgress.addLearnedItem('word1', 'vocabulary');
            UserProgress.data.learnedItems[0].masteryLevel = 3; // Set initial mastery higher
            UserProgress.save(); // Save this change before recording answer
            UserProgress.recordAnswer(false, 'word1', 'vocabulary');
            expect(UserProgress.data.xp).toBe(0); // XP was 0, addXP(-2) results in 0
            const item = UserProgress.data.learnedItems.find(i => i.id === 'word1');
            expect(item.masteryLevel).toBe(2); // Mastery 3 - 1
            expect(item.incorrectAttempts).toBe(1);
        });
         test('recordAnswer should handle items not yet in learnedItems gracefully', () => {
             UserProgress.recordAnswer(true, 'new_word', 'vocabulary');
             expect(UserProgress.data.xp).toBe(5); // XP should still be awarded
             expect(UserProgress.data.learnedItems.find(i => i.id === 'new_word')).toBeUndefined();
         });
    });

    describe('Streak', () => {
        test('updateStreak should increment streak for consecutive days', () => {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            UserProgress.data.lastActive = yesterday.toDateString();
            UserProgress.data.streak = 1;
            
            UserProgress.updateStreak();
            expect(UserProgress.data.streak).toBe(2);
            expect(UserProgress.data.xp).toBe(10); // XP for streak
            expect(document.getElementById('streak-display').textContent).toBe('Streak: 2');
        });

        test('updateStreak should reset streak if not consecutive day', () => {
            const today = new Date();
            const twoDaysAgo = new Date(today);
            twoDaysAgo.setDate(today.getDate() - 2);
            UserProgress.data.lastActive = twoDaysAgo.toDateString();
            UserProgress.data.streak = 5;

            UserProgress.updateStreak();
            expect(UserProgress.data.streak).toBe(1); // Reset to 1
            expect(UserProgress.data.xp).toBe(10);
        });

         test('updateStreak should set streak to 1 if no lastActive date', () => {
             UserProgress.data.lastActive = null;
             UserProgress.updateStreak();
             expect(UserProgress.data.streak).toBe(1);
             expect(UserProgress.data.xp).toBe(10);
         });

         test('updateStreak should not change streak if called multiple times on the same day', () => {
             UserProgress.updateStreak(); // First call
             const streakAfterFirstCall = UserProgress.data.streak;
             const xpAfterFirstCall = UserProgress.data.xp;
             UserProgress.updateStreak(); // Second call on the same day
             expect(UserProgress.data.streak).toBe(streakAfterFirstCall);
             expect(UserProgress.data.xp).toBe(xpAfterFirstCall); // No additional XP
         });
    });

    describe('Spaced Repetition learnedItems', () => {
        test('addLearnedItem should add a new item with correct defaults', () => {
            UserProgress.addLearnedItem('apple', 'vocabulary');
            expect(UserProgress.data.learnedItems.length).toBe(1);
            const item = UserProgress.data.learnedItems[0];
            expect(item.id).toBe('apple');
            expect(item.type).toBe('vocabulary');
            expect(item.masteryLevel).toBe(1);
            expect(item.incorrectAttempts).toBe(0);
            expect(item.interval).toBe(1);
            const nextReview = new Date(item.nextReview);
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            expect(nextReview.toDateString()).toBe(tomorrow.toDateString());
        });

        test('addLearnedItem should update existing item (reset review schedule and mastery)', () => {
            UserProgress.addLearnedItem('apple', 'vocabulary');
            let item = UserProgress.data.learnedItems.find(i => i.id === 'apple');
            item.interval = 8; 
            item.masteryLevel = 3;
            const oldNextReview = new Date();
            oldNextReview.setDate(oldNextReview.getDate() + 8);
            item.nextReview = oldNextReview.toISOString();
            UserProgress.save();

            UserProgress.addLearnedItem('apple', 'vocabulary'); // Re-adding
            item = UserProgress.data.learnedItems.find(i => i.id === 'apple');
            expect(item.interval).toBe(1); 
            expect(item.masteryLevel).toBe(1); // Mastery reset as per current logic
            const nextReview = new Date(item.nextReview);
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            expect(nextReview.toDateString()).toBe(tomorrow.toDateString());
        });
        
        test('updateReviewedItem correctly updates interval and mastery for correct answer', () => {
            UserProgress.addLearnedItem('banana', 'vocabulary');
            UserProgress.updateReviewedItem('banana', 'vocabulary', true);
            const item = UserProgress.data.learnedItems.find(i => i.id === 'banana');
            expect(item.interval).toBe(2);
            expect(item.masteryLevel).toBe(2);
            expect(item.consecutiveCorrect).toBe(1);
            const nextReview = new Date(item.nextReview);
            const expectedReviewDate = new Date();
            expectedReviewDate.setDate(expectedReviewDate.getDate() + 2);
            expect(nextReview.toDateString()).toBe(expectedReviewDate.toDateString());
        });

        test('updateReviewedItem correctly resets interval and updates mastery for incorrect answer', () => {
            UserProgress.addLearnedItem('banana', 'vocabulary');
            let item = UserProgress.data.learnedItems.find(i => i.id === 'banana');
            item.interval = 4; 
            item.masteryLevel = 3;
            item.consecutiveCorrect = 2;
            UserProgress.save();

            UserProgress.updateReviewedItem('banana', 'vocabulary', false);
            item = UserProgress.data.learnedItems.find(i => i.id === 'banana');
            expect(item.interval).toBe(1); 
            expect(item.masteryLevel).toBe(2); 
            expect(item.consecutiveCorrect).toBe(0);
            expect(item.incorrectAttempts).toBe(1);
        });

        test('getItemsForReview should return items due for review', () => {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            
            UserProgress.addLearnedItem('item1', 'typeA'); // Next review tomorrow
            UserProgress.addLearnedItem('item2', 'typeB');
            UserProgress.data.learnedItems.find(i=>i.id==='item2').nextReview = yesterday.toISOString(); 
            UserProgress.addLearnedItem('item3', 'typeA');
            UserProgress.data.learnedItems.find(i=>i.id==='item3').nextReview = today.toISOString();
            UserProgress.save();

            const reviewItems = UserProgress.getItemsForReview();
            expect(reviewItems.length).toBe(2);
            expect(reviewItems.find(item => item.id === 'item2')).toBeDefined();
            expect(reviewItems.find(item => item.id === 'item3')).toBeDefined();
        });
    });

    describe('getWeightedLearnableItems', () => {
        test('should return items weighted by mastery and incorrect attempts', () => {
            const allItems = [
                { id: 'wordA', text: 'Apple' }, // Removed type from here as itemType is passed to func
                { id: 'wordB', text: 'Banana' },
                { id: 'wordC', text: 'Cherry' }
            ];
            UserProgress.addLearnedItem('wordA', 'vocabulary'); 
            UserProgress.addLearnedItem('wordB', 'vocabulary');
            UserProgress.data.learnedItems.find(i=>i.id==='wordA').masteryLevel = 5; 
            let itemB = UserProgress.data.learnedItems.find(i=>i.id==='wordB');
            itemB.masteryLevel = 1; 
            itemB.incorrectAttempts = 3;
            UserProgress.save();

            const selectionPool = UserProgress.getWeightedLearnableItems(allItems, 'vocabulary');
            
            const countA = selectionPool.filter(item => item.id === 'wordA').length;
            const countB = selectionPool.filter(item => item.id === 'wordB').length;
            const countC = selectionPool.filter(item => item.id === 'wordC').length; 

            expect(countA).toBe(1); // mastery 5 -> weight 10 - 5*2 = 0 -> min 1
            expect(countB).toBe(11); // mastery 1, incorrect 3 -> weight 10 - 1*2 + 3 = 11
            expect(countC).toBe(10); // Never learned, default weight 10
        });
    });
     test('load should initialize with default values if localStorage is empty', () => {
         localStorageMock.getItem.mockReturnValueOnce(null); 
         UserProgress.load();
         expect(UserProgress.data.xp).toBe(0);
         expect(UserProgress.data.level).toBe(1);
         expect(UserProgress.data.streak).toBe(0);
         expect(UserProgress.data.learnedItems).toEqual([]);
         expect(document.getElementById('xp-display').textContent).toBe('XP: 0');
     });

     test('load should parse and use saved data from localStorage', () => {
         const savedData = {
             xp: 100,
             level: 3,
             streak: 5,
             lastActive: new Date().toDateString(),
             completedLessons: ['lesson1'],
             achievements: ['ach1'],
             firstTimeTodayForDay1: {},
             learnedItems: [{id: 'test', type: 'vocab', masteryLevel: 2, incorrectAttempts: 1, nextReview: new Date().toISOString(), interval:1, consecutiveCorrect:0, firstLearned: new Date().toISOString(), lastReviewed: new Date().toISOString()}]
         };
         localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(savedData));
         UserProgress.load();
         expect(UserProgress.data.xp).toBe(100);
         expect(UserProgress.data.level).toBe(3);
         expect(UserProgress.data.streak).toBe(5);
         expect(UserProgress.data.learnedItems[0].masteryLevel).toBe(2);
         expect(document.getElementById('xp-display').textContent).toBe('XP: 100');
     });
});
