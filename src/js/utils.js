// Utility functions

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showNoDataMessage() {
    const resultArea = document.getElementById('result');
    resultArea.innerHTML = '<p class="no-data">No data available for selected day/language.</p>';
}

function clearResultArea() {
    const resultArea = document.getElementById('result');
    if (resultArea) resultArea.innerHTML = '';
}

// Helper: Add randomize button to exercise containers
function addRandomizeButton(containerIdOrElement, randomizeFn) { // Modified to accept element directly
    let container = containerIdOrElement;
    if (typeof containerIdOrElement === 'string') {
        container = document.getElementById(containerIdOrElement) || document.querySelector(`.${containerIdOrElement}`);
    }
    
    if (!container) {
        // console.warn(`Container not found for randomize button: ${containerIdOrElement}`);
        return;
    }
    // Remove any existing randomize button to avoid duplicates
    const existingBtn = container.querySelector('.btn-randomize');
    if (existingBtn) existingBtn.remove();
    
    let btn = document.createElement('button');
    btn.className = 'btn-randomize randomizer-button'; // Apply new and old class
    const language = document.getElementById('language')?.value || 'COSYenglish'; // Assume translations is global
    const currentTranslations = translations[language] || translations.COSYenglish;

    btn.setAttribute('aria-label', currentTranslations.aria?.randomize || 'Randomize exercise');
    btn.title = currentTranslations.aria?.randomize || 'Randomize exercise';
    btn.innerHTML = currentTranslations.buttons?.randomize || '<span aria-label="Randomize">🎲</span>';
    // Inline styles and mouse event handlers removed
    btn.onclick = randomizeFn; // Assign the passed randomizeFn directly

    container.prepend(btn);
}

// More specific helper for exercises with known button IDs
function addEnterKeySupport(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
    if (input && button) {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                button.click();
            }
        });
    }
}

async function loadData(filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            try {
                const data = await response.json();
                return { data: data, error: null, errorType: null };
            } catch (jsonError) {
                console.error(`Error parsing JSON from ${filePath}:`, jsonError);
                return { data: [], error: 'Invalid JSON format', errorType: 'jsonError' };
            }
        } else {
            if (response.status === 404) {
                console.error(`Error loading data from ${filePath}: ${response.status} (File not found)`);
                return { data: [], error: 'File not found', errorType: 'fileNotFound' };
            } else {
                console.error(`Error loading data from ${filePath}: ${response.status}`);
                return { data: [], error: 'Failed to load data', errorType: 'httpError' };
            }
        }
    } catch (error) {
        console.error(`Network error or other exception while loading data from ${filePath}:`, error);
        return { data: [], error: 'Network error or other issue', errorType: 'networkError' };
    }
}

function patchExerciseForRandomizeButton(originalExerciseFn, containerSelectorOrElement, randomizeFn) {
    return async function() {
        // Call the original exercise function, ensuring 'this' and 'arguments' are passed correctly
        await originalExerciseFn.apply(this, arguments);
        
        // Now, add the randomize button.
        // addRandomizeButton can take an ID string, a class selector string (e.g. ".my-class"), or an element.
        // The existing addRandomizeButton logic handles ID or class selector (if class is passed as ".class-name" or just "class-name").
        addRandomizeButton(containerSelectorOrElement, randomizeFn);
    }
}

async function loadSpeakingQuestions(language, day) {
    let langFileKey;
    // Determine langFileKey using a switch or map
    switch(language) {
        case 'COSYenglish': langFileKey = 'english'; break;
        case 'COSYfrançais': langFileKey = 'french'; break;
        case 'COSYespañol': langFileKey = 'spanish'; break;
        case 'COSYitaliano': langFileKey = 'italian'; break;
        case 'COSYdeutsch': langFileKey = 'german'; break;
        case 'COSYportuguês': langFileKey = 'portuguese'; break;
        case 'ΚΟΖΥελληνικά': langFileKey = 'greek'; break;
        case 'ТАКОЙрусский': langFileKey = 'russian'; break;
        case 'ԾՈՍՅհայկական': langFileKey = 'armenian'; break;
        case 'COSYbrezhoneg': langFileKey = 'breton'; break;
        case 'COSYtatarça': langFileKey = 'tatar'; break;
        case 'COSYbashkort': langFileKey = 'bashkir'; break;
        default:
            console.warn(`Unsupported language for speaking questions: ${language}. No questions will be loaded.`);
            return []; // Return empty array if language is not mapped
    }

    const filePath = `data/speaking/question/question_${langFileKey}.json`;

    const result = await loadData(filePath); // loadData remains unchanged

    if (result.error) {
        // Error already logged by loadData, but we can add context for which mapping was used
        console.error(`Error encountered in loadSpeakingQuestions for ${language} (mapped to ${langFileKey}), day ${day} from ${filePath}: ${result.errorType} - ${result.error}`);
        return [];
    }

    const data = result.data;
    // Ensure data is not null and day exists
    if (data && data[day]) {
        return data[day];
    } else {
        // console.warn(`No speaking questions found for ${language} (mapped to ${langFileKey}), day ${day}`);
        return [];
    }
}


// Content from uiFeatures.js starts here

const activeExerciseTimers = {
    autoAdvance: null
};

function cancelAutoAdvanceTimer() {
    if (activeExerciseTimers.autoAdvance) {
        clearTimeout(activeExerciseTimers.autoAdvance);
        activeExerciseTimers.autoAdvance = null;
    }
}

async function startRandomExerciseInCategory(categoryName, currentExerciseFunctionNameAsString, allPracticeTypesObject) {
    if (!allPracticeTypesObject || !allPracticeTypesObject[categoryName] || !allPracticeTypesObject[categoryName].exercises) {
        console.error(`Error: Category "${categoryName}" or its exercises not found in practice types object.`);
        return;
    }

    const exercisesInCat = allPracticeTypesObject[categoryName].exercises;
    if (!exercisesInCat || exercisesInCat.length === 0) {
        console.error(`Error: No exercises listed for category "${categoryName}".`);
        return;
    }

    let availableExercises = exercisesInCat.filter(name => name !== currentExerciseFunctionNameAsString);

    let targetFunctionName;
    if (availableExercises.length > 0) {
        targetFunctionName = availableExercises[Math.floor(Math.random() * availableExercises.length)];
    } else if (exercisesInCat.length > 0) { // If filtering left no options, but there were options
        console.warn(`No other exercises available in "${categoryName}" besides "${currentExerciseFunctionNameAsString}". Picking from original list.`);
        targetFunctionName = exercisesInCat[Math.floor(Math.random() * exercisesInCat.length)];
    } else { // Should not happen if initial checks pass
        console.error(`Error: Could not determine a target exercise for category "${categoryName}".`);
        return;
    }
    
    if (targetFunctionName) {
        if (typeof window[targetFunctionName] === 'function') {
            try {
                // Assuming exercise functions might be async and we should wait for them
                await window[targetFunctionName]();
            } catch (error) {
                console.error(`Error executing exercise function "${targetFunctionName}":`, error);
            }
        } else {
            console.error(`Error: Target exercise function "${targetFunctionName}" not found or not a function.`);
        }
    } else {
        console.error(`Error: No target function name determined for category "${categoryName}".`);
    }
}

function startAutoAdvanceTimer(categoryName, currentExerciseFunctionNameAsString, allPracticeTypesObject, durationMs = 3000) { // Default duration 3s
    cancelAutoAdvanceTimer(); // Clear any existing timer
    activeExerciseTimers.autoAdvance = setTimeout(async () => { // Make sure the async nature of startRandomExerciseInCategory is handled
        await startRandomExerciseInCategory(categoryName, currentExerciseFunctionNameAsString, allPracticeTypesObject);
    }, durationMs);
}

function setupExerciseCompletionFeedbackObserver(feedbackElement, categoryName, currentExerciseFunctionNameAsString, allPracticeTypesObject, timerDurationMs = 3000) {
    if (!feedbackElement) {
        // console.warn("setupExerciseCompletionFeedbackObserver: feedbackElement is null.");
        return;
    }

    const observer = new MutationObserver((mutationsList, obs) => {
        let completionDetected = false;
        for (const mutation of mutationsList) {
            // Check for added nodes or character data changes that indicate feedback
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check if any added node contains typical feedback classes or text
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) { // Check if it's an element
                        if (node.classList.contains('correct') || node.classList.contains('incorrect') || (node.textContent && node.textContent.trim() !== '')) {
                            completionDetected = true;
                            break;
                        }
                    } else if (node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim() !== '') {
                        completionDetected = true;
                        break;
                    }
                }
            } else if (mutation.type === 'characterData') {
                 if (mutation.target.textContent && mutation.target.textContent.trim() !== '') {
                    completionDetected = true;
                 }
            }
            if (completionDetected) break;
        }

        if (completionDetected) {
            // console.log("Completion feedback detected, starting auto-advance timer.");
            startAutoAdvanceTimer(categoryName, currentExerciseFunctionNameAsString, allPracticeTypesObject, timerDurationMs);
            obs.disconnect(); // Stop observing once completion is detected and timer is set
        }
    });

    observer.observe(feedbackElement, { childList: true, characterData: true, subtree: true });
    // console.log("Feedback observer set up for:", feedbackElement);
}

function createStandardRandomizeButton(categoryName, currentExerciseFunctionNameAsString, allPracticeTypesObject) {
    const btn = document.createElement('button');
    btn.className = 'btn-randomize randomizer-button'; // Standardized class
    
    // Attempt to get translations, similar to addRandomizeButton in utils.js
    // This assumes `translations` is a global variable and `document.getElementById('language').value` is accessible
    let label = '🎲';
    let title = 'Randomize exercise';
    try {
        const language = document.getElementById('language')?.value || 'COSYenglish';
        const currentTranslations = window.translations[language] || window.translations.COSYenglish;
        label = currentTranslations.buttons?.randomize || '<span aria-label="Randomize">🎲</span>';
        title = currentTranslations.aria?.randomize || 'Randomize exercise';
    } catch (e) {
        // console.warn("Could not get translations for randomize button, using defaults.", e);
    }

    btn.innerHTML = label;
    btn.title = title;
    btn.setAttribute('aria-label', title); // Ensure aria-label is set, especially if innerHTML is an icon

    btn.onclick = async () => { // Make sure the async nature of startRandomExerciseInCategory is handled
        cancelAutoAdvanceTimer();
        await startRandomExerciseInCategory(categoryName, currentExerciseFunctionNameAsString, allPracticeTypesObject);
    };
    return btn;
}

export function getSelectedDays() {
    const daySelect = document.getElementById('day');
    const dayFromSelect = document.getElementById('day-from');
    const dayToSelect = document.getElementById('day-to');

    // Ensure elements exist before accessing their value property
    const day = daySelect ? daySelect.value : "";
    const dayFrom = dayFromSelect ? dayFromSelect.value : "";
    const dayTo = dayToSelect ? dayToSelect.value : "";

    // console.log("[utils.getSelectedDays] day:", day, "dayFrom:", dayFrom, "dayTo:", dayTo);

    if (day) {
        return [day];
    } else if (dayFrom && dayTo && Number(dayFrom) <= Number(dayTo)) {
        const from = Number(dayFrom);
        const to = Number(dayTo);
        const daysArray = []; // Renamed to avoid conflict
        for (let i = from; i <= to; i++) daysArray.push(String(i));
        return daysArray;
    } else {
        return [];
    }
}
