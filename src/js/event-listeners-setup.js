import AudioFeedback from './audio-feedback.js';
import { 
    initializePracticeSectionsVisibility, 
    updateDaySelectors as updateDaySelectorsVisibility, 
    updateUIVisibilityForDay,
    goBackToMainMenu // Assuming goBackToMainMenu is also from ui-visibility.js
} from './ui/ui-visibility.js';

// Placeholder or actual function for updateGrammarOptions.
// If this is meant to be from ui-visibility.js, it should be imported.
// For now, keeping a local or global reference.
let updateGrammarOptions = window.updateGrammarOptions || function() { 
    // Check if ui-visibility.js has updateGrammarOptions and prefer that.
    // This is a bit of a workaround for potentially unclear ownership of updateGrammarOptions.
    if (typeof window.uiVisibilityFunctions !== 'undefined' && typeof window.uiVisibilityFunctions.updateGrammarOptions === 'function') {
        return window.uiVisibilityFunctions.updateGrammarOptions();
    }
    console.log("DEBUG: updateGrammarOptions called (local/global fallback)"); 
};
// If updateGrammarOptions is definitely in ui-visibility.js and exported:
// import { updateGrammarOptions } from './ui/ui-visibility.js';


function populateDaysDropdowns() {
    const daySelect = document.getElementById('day');
    const dayFromSelect = document.getElementById('day-from');
    const dayToSelect = document.getElementById('day-to');

    console.log('[Debug] populateDaysDropdowns: Attempting to find select elements.');
    if (!daySelect) console.error('[Debug] populateDaysDropdowns: daySelect element NOT found.');
    if (!dayFromSelect) console.error('[Debug] populateDaysDropdowns: dayFromSelect element NOT found.');
    if (!dayToSelect) console.error('[Debug] populateDaysDropdowns: dayToSelect element NOT found.');

    if (daySelect && dayFromSelect && dayToSelect) {
        console.log('[Debug] populateDaysDropdowns: All select elements found. Starting to populate days.');
        for (let i = 1; i <= 30; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Day ${i}`;
            daySelect.appendChild(option.cloneNode(true));
            dayFromSelect.appendChild(option.cloneNode(true));
            dayToSelect.appendChild(option.cloneNode(true));
        }
        console.log('[Debug] populateDaysDropdowns: Finished populating days.');
    } else {
        console.error('[Debug] populateDaysDropdowns: Not all select elements were found. Days cannot be populated.');
    }
}

function initializeEventListeners() {
    console.log("DEBUG: initializeEventListeners called");

    populateDaysDropdowns();
    initializePracticeSectionsVisibility(); // Initialize UI visibility

    if (typeof restoreUserSelection === 'function') {
        restoreUserSelection(); 
    } else {
        console.warn('[Debug] restoreUserSelection function not found.');
    }

    // Ensure goBackToMainMenu (imported from ui-visibility.js) is used if available
    if (typeof goBackToMainMenu === 'function') {
        // This call might be part of initializePracticeSectionsVisibility or only for specific events.
        // For now, if it was here before for a reason, it's kept.
        // goBackToMainMenu(); // Original task description implied this was for setup.
        // However, initializePracticeSectionsVisibility should handle initial main menu state.
        // Let's assume this specific call here is not needed if initializePracticeSectionsVisibility sets the correct initial state.
    } else {
        console.warn('[Debug] goBackToMainMenu function (from ui-visibility.js) not found.');
    }

    if (typeof updateDaySelectorsVisibility === 'function') {
        updateDaySelectorsVisibility(); 
    } else {
        console.warn('[Debug] updateDaySelectorsVisibility function (from ui-visibility.js) not found.');
    }
    
    const languageSelectElement = document.getElementById('language');
    const daySelectElement = document.getElementById('day'); // Used for getting value
    const dayFromSelectElement = document.getElementById('day-from'); // Used for getting value
    const grammarOptionsElement = document.getElementById('grammar-options');

    if (languageSelectElement) {
        languageSelectElement.addEventListener('change', function() {
            AudioFeedback.playSelectSound();
            const lang = this.value;
            let dayToUse = 1;
            const singleDayValue = daySelectElement ? daySelectElement.value : "";
            if (singleDayValue) {
                dayToUse = parseInt(singleDayValue);
            } else {
                const dayFromValue = dayFromSelectElement ? dayFromSelectElement.value : "";
                if (dayFromValue) dayToUse = parseInt(dayFromValue);
            }
            updateUIVisibilityForDay(dayToUse || 1, lang); // Imported from ui-visibility.js

            if (grammarOptionsElement && grammarOptionsElement.style.display === 'block') {
                updateGrammarOptions(); // Call the potentially imported/updated function
            }
        });
    }

    const daySelectors = [document.getElementById('day'), document.getElementById('day-from'), document.getElementById('day-to')];
    daySelectors.forEach(selector => {
        if (selector) {
            selector.addEventListener('change', function() {
                AudioFeedback.playSelectSound();
                updateDaySelectorsVisibility(); // Imported from ui-visibility.js
                
                const currentLanguage = languageSelectElement ? languageSelectElement.value : 'COSYenglish';
                let dayToUseForVisibility = 1;
                const singleDayValue = daySelectElement ? daySelectElement.value : "";
                if (singleDayValue) {
                    dayToUseForVisibility = parseInt(singleDayValue);
                } else {
                    const dayFromValue = dayFromSelectElement ? dayFromSelectElement.value : "";
                    if (dayFromValue) dayToUseForVisibility = parseInt(dayFromValue);
                }
                updateUIVisibilityForDay(dayToUseForVisibility || 1, currentLanguage); // Imported

                if (grammarOptionsElement && grammarOptionsElement.style.display === 'block') {
                    updateGrammarOptions();
                }
            });
        }
    });
    
    if (typeof initButtons === 'function') {
        initButtons();
    } else {
        console.error('[event-listeners-setup.js] initButtons function not found.');
    }

    if (typeof initVocabularyPractice === 'function') {
        initVocabularyPractice();
    } else {
        console.warn('[event-listeners-setup.js] initVocabularyPractice function not found.');
    }
    
    if (typeof initGrammarPractice === 'function') {
        initGrammarPractice();
    } else {
        console.warn('[event-listeners-setup.js] initGrammarPractice function not found.');
    }
    
    // The explicit call to updateUIVisibilityForDay for initial load is removed
    // as initializePracticeSectionsVisibility() now handles this.

    console.log("DEBUG: initializeEventListeners completed.");
}

window.addEventListener('DOMContentLoaded', initializeEventListeners);
