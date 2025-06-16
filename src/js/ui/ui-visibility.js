import { getSelectedDays } from '../utils.js';
// UI Visibility Management

const ALL_PRACTICE_TYPES_BUTTON_IDS = ['vocabulary-btn', 'grammar-btn', 'reading-btn', 'speaking-btn', 'writing-btn', 'review-btn', 'practice-all-btn'];
const ALL_OPTIONS_PANEL_IDS = ['vocabulary-options', 'grammar-options', 'reading-options', 'speaking-options', 'writing-options', 'review-section'];

export function showAllMainPracticeTypes() {
    ALL_PRACTICE_TYPES_BUTTON_IDS.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.style.display = 'inline-block';
            btn.classList.remove('active-main-btn');
        }
    });
    // Day-specific visibility will be handled by updateUIVisibilityForDay,
    // which should be called after this if necessary.
}

export function hideOtherMainPracticeTypes(selectedButtonId) {
    ALL_PRACTICE_TYPES_BUTTON_IDS.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            if (id !== selectedButtonId) {
                btn.style.display = 'none';
            } else {
                btn.style.display = 'inline-block';
                btn.classList.add('active-main-btn');
            }
        }
    });
}

export function hideAllPracticeOptionsPanels() {
    ALL_OPTIONS_PANEL_IDS.forEach(id => {
        const panel = document.getElementById(id);
        if (panel) {
            panel.style.display = 'none';
        }
    });
}

export function showPracticeOptionsPanel(type) {
    hideAllPracticeOptionsPanels(); // Hide all other panels first
    const panelId = (type === 'review') ? 'review-section' : `${type}-options`;
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.style.display = 'block';
    } else {
        console.warn(`[ui-visibility] Options panel for type "${type}" (id: "${panelId}") not found.`);
    }
}

export function initializePracticeSectionsVisibility() {
    hideAllPracticeOptionsPanels();
    showAllMainPracticeTypes(); // Make all main practice buttons visible initially

    // Then apply day-specific visibility rules which might hide some main buttons
    // or options based on the currently selected day and language.
    const daySelect = document.getElementById('day');
    const dayFromSelect = document.getElementById('day-from');
    let initialDay = "1"; // Default to day 1

    if (daySelect && daySelect.value) {
        initialDay = daySelect.value;
    } else if (dayFromSelect && dayFromSelect.value) {
        initialDay = dayFromSelect.value; // Use day-from if 'day' is not set
    }
    
    const languageSelect = document.getElementById('language');
    const initialLang = languageSelect ? languageSelect.value : 'COSYenglish';
    
    updateUIVisibilityForDay(parseInt(initialDay) || 1, initialLang || 'COSYenglish');
}

export function goBackToMainPracticeView() {
    showAllMainPracticeTypes();
    hideAllPracticeOptionsPanels();
    
    const resultArea = document.getElementById('result');
    if (resultArea) resultArea.innerHTML = '';

    // Re-apply day-specific visibility rules
    const daySelect = document.getElementById('day');
    const dayFromSelect = document.getElementById('day-from');
    let currentDay = "1";
    if (daySelect && daySelect.value) {
        currentDay = daySelect.value;
    } else if (dayFromSelect && dayFromSelect.value) {
        currentDay = dayFromSelect.value;
    }
    const currentLanguage = document.getElementById('language')?.value || 'COSYenglish';
    updateUIVisibilityForDay(parseInt(currentDay) || 1, currentLanguage);
}

// Original function, ensure it's not exported unless used by another module directly
// This function is called by exported functions, so it needs to be available in this module.
function updateUIVisibilityForDay(selectedDay, selectedLanguage) {
    const day = Number(selectedDay);
    // Assuming 'translations' is a global variable available from translations.js
    const currentTranslations = (typeof translations !== 'undefined' && translations[selectedLanguage]) ? translations[selectedLanguage] : (typeof translations !== 'undefined' ? translations.COSYenglish : {});


    const grammarOptionsEl = document.getElementById('grammar-options');
    const grammarOptionsContainer = document.querySelector('#grammar-options .grammar-options'); 
    const readingBtnEl = document.getElementById('reading-btn');
    const speakingBtnEl = document.getElementById('speaking-btn'); 
    const speakingOptionsEl = document.getElementById('speaking-options');
    // const writingBtnEl = document.getElementById('writing-btn'); // Not used in current logic
    
    const questionPracticeBtn = document.getElementById('question-practice-btn'); 
    const monologueBtn = document.getElementById('monologue-btn');
    const rolePlayBtn = document.getElementById('role-play-btn');
    const practiceAllSpeakingBtn = document.getElementById('practice-all-speaking-btn');
    const writingQuestionBtn = document.getElementById('writing-question-btn'); 
    const storytellingBtn = document.getElementById('storytelling-btn');
    const diaryBtn = document.getElementById('diary-btn');
    
    // const allMainPracticeButtons = ['vocabulary-btn', 'grammar-btn', 'reading-btn', 'speaking-btn', 'writing-btn', 'practice-all-btn', 'review-btn']; // Defined globally in this module

    if (isNaN(day) || day <= 0) {
        if (grammarOptionsEl) grammarOptionsEl.style.display = 'none';
        if (grammarOptionsContainer) grammarOptionsContainer.innerHTML = '';
        // Simplified: just hide buttons that are optional, vocab/review/practice-all generally always available
        if (readingBtnEl) readingBtnEl.style.display = 'none';
        if (speakingBtnEl) speakingBtnEl.style.display = 'none';
        // if (writingBtnEl) writingBtnEl.style.display = 'none'; // If writingBtnEl was defined
        return; 
    }

    const grammarBtnMain = document.getElementById('grammar-btn');
    if (day === 1 && selectedLanguage === 'COSYenglish') {
         if(grammarBtnMain) grammarBtnMain.style.display = 'none';
         if(grammarOptionsEl) grammarOptionsEl.style.display = 'none';
    } else if (grammarBtnMain) { 
        grammarBtnMain.style.display = 'inline-block'; 
        if (grammarOptionsEl && grammarOptionsContainer) { 
             updateGrammarOptions(); 
        }
    }

    if (readingBtnEl) { 
        readingBtnEl.style.display = (day === 1) ? 'none' : 'inline-block'; 
    }
    
    if (speakingOptionsEl) { 
        [questionPracticeBtn, monologueBtn, rolePlayBtn, practiceAllSpeakingBtn].forEach(btn => {
            if (btn) btn.style.display = ''; 
        });
        if (day === 1) {
            if (monologueBtn) monologueBtn.style.display = 'none';
        }
    }

    if (document.getElementById('writing-options')) { 
        [writingQuestionBtn, storytellingBtn, diaryBtn].forEach(btn => {
            if (btn) btn.style.display = '';
        });
        if (day === 1) {
            if (storytellingBtn) storytellingBtn.style.display = 'none';
            if (diaryBtn) diaryBtn.style.display = 'none';
        }
    }
    // console.log(`DEBUG: updateUIVisibilityForDay finished for Day: ${day}, Language: ${selectedLanguage}`);
}

// This function is called by updateUIVisibilityForDay, so it also needs to be in this module.
function updateGrammarOptions() {
    const lang = document.getElementById('language').value;
    // Assuming 'translations' is global
    const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : (typeof translations !== 'undefined' ? translations.COSYenglish : {});
    
    const days = getSelectedDays(); // Now imported

    const grammarOptionsContainer = document.querySelector('#grammar-options .grammar-options');
    if (!grammarOptionsContainer) return;
    grammarOptionsContainer.innerHTML = ''; 

    const grammarOptionsEl = document.getElementById('grammar-options');

    if (!days || days.length === 0) { 
        const noDayMsg = document.createElement('p');
        noDayMsg.textContent = t.selectDay || "Please select a day."; 
        grammarOptionsContainer.appendChild(noDayMsg);
        if(grammarOptionsEl) grammarOptionsEl.style.display = 'block'; 
        return;
    }
    
    const day = parseInt(days[0]); 

    if (day === 1 && lang === 'COSYenglish') {
        if(grammarOptionsEl) grammarOptionsEl.style.display = 'none'; 
        return;
    }
    
    if(grammarOptionsEl) grammarOptionsEl.style.display = 'block';

    let optionsAdded = false;
    if (day >= 1) { 
        const genderBtn = document.createElement('button');
        genderBtn.id = 'gender-btn'; genderBtn.textContent = t.gender || 'Gender';
        genderBtn.className = 'btn-secondary option-btn'; 
        grammarOptionsContainer.appendChild(genderBtn); optionsAdded = true;
    }
    if (day >= 2) {
        const verbBtn = document.createElement('button');
        verbBtn.id = 'verbs-btn'; verbBtn.textContent = t.verbs || 'Verbs';
        verbBtn.className = 'btn-secondary option-btn';
        grammarOptionsContainer.appendChild(verbBtn); optionsAdded = true;
    }
    if (day >= 3) {
        const possBtn = document.createElement('button');
        possBtn.id = 'possessives-btn'; possBtn.textContent = t.possessives || 'Possessives';
        possBtn.className = 'btn-secondary option-btn';
        grammarOptionsContainer.appendChild(possBtn); optionsAdded = true;
    }
  
    if (optionsAdded){ 
        const practiceAllGrammarBtn = document.createElement('button');
        practiceAllGrammarBtn.id = 'practice-all-grammar-btn';
        practiceAllGrammarBtn.textContent = t.practiceAll || 'Practice All';
        practiceAllGrammarBtn.className = 'btn-secondary option-btn';
        grammarOptionsContainer.appendChild(practiceAllGrammarBtn);
    } else {
        if(grammarOptionsEl) grammarOptionsEl.style.display = 'none';
    }
    // Event listeners for these dynamic buttons are expected to be re-attached by setupOptionToggle 
    // called from event-listeners-setup.js after this function runs.
}

export function updateDaySelectors() {
    const daySelect = document.getElementById('day');
    const dayFromSelect = document.getElementById('day-from');
    const dayToSelect = document.getElementById('day-to');

    if (!daySelect || !dayFromSelect || !dayToSelect) return; 

    const dayVal = daySelect.value; 
    const dayFromVal = dayFromSelect.value;
    const dayToVal = dayToSelect.value;

    const dayFromParent = dayFromSelect.parentElement;
    const dayToParent = dayToSelect.parentElement;

    if (!dayFromParent || !dayToParent) return; 

    if (dayVal) {
        dayFromParent.style.display = 'none';
        dayToParent.style.display = 'none';
        daySelect.style.display = ''; 
    } else if (dayFromVal || dayToVal) { 
        daySelect.style.display = 'none';
        dayFromParent.style.display = ''; 
        dayToParent.style.display = '';
    } else { 
        daySelect.style.display = '';
        dayFromParent.style.display = '';
        dayToParent.style.display = '';
    }
}
