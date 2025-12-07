document.addEventListener('DOMContentLoaded', () => {
    // --- Code for all pages ---

    // Toggle functionality for events page
    const setupToggleButton = (btnId, contentId, showKey, hideKey) => {
        const toggleBtn = document.getElementById(btnId);
        const contentDiv = document.getElementById(contentId);

        if (toggleBtn && contentDiv) { // This check makes it safe to run on all pages
            toggleBtn.addEventListener('click', () => {
                // Use getComputedStyle for a more reliable visibility check
                const isHidden = window.getComputedStyle(contentDiv).display === 'none';
                contentDiv.style.display = isHidden ? 'block' : 'none';
                toggleBtn.setAttribute('data-translate-key', isHidden ? hideKey : showKey);
                setLanguage(localStorage.getItem('language') || 'en');
            });
        }
    };

    // Setup for event page buttons
    setupToggleButton('toggle-topics-btn', 'speaking-club-topics', 'toggle_topics_show', 'toggle_topics_hide');
    setupToggleButton('toggle-games-btn', 'game-nights-topics', 'toggle_games_show', 'toggle_games_hide');


    // --- Page-specific code for index.html ---
    const priceCalculator = document.getElementById('price-calculator');
    if (priceCalculator) {
        const languageSelect = document.getElementById('language');
        const durationSelect = document.getElementById('duration');
        const courseTypeContainer = document.getElementById('course-type-container');
        const lessonPackSelect = document.getElementById('lesson-pack');
        const currencySelect = document.getElementById('currency');
        const priceResultDiv = document.getElementById('price-result');

        const otherLanguagesPricing = {
            15: 10,
            30: 15,
            60: 25,
            90: 35,
            120: 45,
        };

        const pricing = {
            english: {
                15: 5,
                30: 10,
                60: 20,
                90: 30,
                120: 40,
            },
            french: otherLanguagesPricing,
            italian: otherLanguagesPricing,
            russian: otherLanguagesPricing,
            georgian: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            spanish: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            greek: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            portuguese: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            german: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            tatar: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            bashkir: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            breton: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
            armenian: { 15: 0, 30: 0, 60: 0, 90: 0, 120: 0 },
        };

        const courseTypes = {
            15: ['Spoken course'],
            30: ['Spoken course'],
            60: ['General Course'],
            90: ['General Course', 'Exam preparation'],
            120: ['Exam preparation'],
        };

        const lessonPacks = {
            1: { lessons: 1, discount: 0 },
            8: { lessons: 8, discount: 0.05 },
            16: { lessons: 16, discount: 0.10 },
            32: { lessons: 32, discount: 0.15 },
        };

        const exchangeRates = {
            eur: { rate: 1, symbol: '€' },
            usd: { rate: 1.1, symbol: '$' },
            rub: { rate: 100, symbol: '₽' },
        };

        function updateCourseType() {
            const duration = parseInt(durationSelect.value, 10);
            const availableCourses = courseTypes[duration] || [];

            courseTypeContainer.innerHTML = ''; // Clear previous content

            let courseElement;
            const descriptionElement = document.createElement('p');
            descriptionElement.className = 'course-description'; // For styling

            const updateDescription = (courseName) => {
                if (courseName) {
                    const descKey = `course_${courseName.split(' ')[0].toLowerCase()}_desc`;
                    descriptionElement.setAttribute('data-translate-key', descKey);
                } else {
                    descriptionElement.removeAttribute('data-translate-key');
                    descriptionElement.textContent = '';
                }
            };

            if (availableCourses.length > 1) {
                const select = document.createElement('select');
                select.id = 'course-type';
                availableCourses.forEach(course => {
                    const option = document.createElement('option');
                    option.value = course;
                    option.textContent = course;
                    const courseKey = `course_${course.split(' ')[0].toLowerCase()}`;
                    option.setAttribute('data-translate-key', courseKey);
                    select.appendChild(option);
                });
                courseElement = select;

                // Add event listener to update description on change
                select.addEventListener('change', () => {
                    updateDescription(select.value);
                    // Re-run translation for the updated element
                    setLanguage(localStorage.getItem('language') || 'en');
                });
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.id = 'course-type';
                const courseName = availableCourses[0] || '';
                input.value = courseName;
                input.disabled = true;
                if(courseName) {
                    const courseKey = `course_${courseName.split(' ')[0].toLowerCase()}`;
                    input.setAttribute('data-translate-key', courseKey);
                }
                courseElement = input;
            }

            courseTypeContainer.appendChild(courseElement);

            // Add and set initial description
            if (availableCourses.length > 0) {
                courseTypeContainer.appendChild(descriptionElement);
                updateDescription(courseElement.value);
            }

            updateCalculator();
            setLanguage(localStorage.getItem('language') || 'en');
        }

        function updateCalculator() {
            const duration = parseInt(durationSelect.value, 10);
            const language = languageSelect.value;
            const pack = lessonPacks[lessonPackSelect.value];
            const currency = currencySelect.value;
            const numLessons = pack ? pack.lessons : 0;
            const discount = pack ? pack.discount : 0;

            priceResultDiv.innerHTML = ''; // Clear previous results

            if (language && duration && numLessons > 0) {
                const basePricePerLesson = pricing[language][duration];
                if (basePricePerLesson !== undefined) {
                    const totalCostEUR = basePricePerLesson * numLessons;
                    const discountedCostEUR = totalCostEUR * (1 - discount);

                    const { rate, symbol } = exchangeRates[currency];
                    const totalCost = totalCostEUR * rate;
                    const discountedCost = discountedCostEUR * rate;
                    
                    if (discount > 0) {
                        priceResultDiv.innerHTML = `
                            <span class="original-price">${symbol}${totalCost.toFixed(2)}</span>
                            <span class="discounted-price">${symbol}${discountedCost.toFixed(2)}</span>
                        `;
                    } else {
                        const priceTextSpan = document.createElement('span');
                        priceTextSpan.setAttribute('data-translate-key', 'total_price');
                        priceTextSpan.textContent = 'Total Price: '; // Default text

                        priceResultDiv.appendChild(priceTextSpan);
                        priceResultDiv.innerHTML += `${symbol}${totalCost.toFixed(2)}`;
                    }
                } else {
                    const errorSpan = document.createElement('span');
                    errorSpan.setAttribute('data-translate-key', 'invalid_selection');
                    errorSpan.textContent = 'Invalid selection'; // Default text
                    priceResultDiv.appendChild(errorSpan);
                }
            }
            // Re-apply translation to the newly created elements
            setLanguage(localStorage.getItem('language') || 'en');
        }

        languageSelect.addEventListener('change', updateCalculator);
        durationSelect.addEventListener('change', updateCourseType);
        lessonPackSelect.addEventListener('change', updateCalculator);
        currencySelect.addEventListener('change', updateCalculator);

        // Initial setup
        updateCourseType();
    }

    // --- Page-specific code for index.html ---
    const priceCalculator = document.getElementById('price-calculator');
    if (priceCalculator) {
        // ... (calculator logic remains the same)
    }

    // --- Word of the Day Feature ---
    const wordOfTheDayElement = document.getElementById('word-of-the-day');
    if (wordOfTheDayElement) {
        const words = {
            en: ["Hello", "Love", "Life", "Dream", "Freedom", "Joy", "Happiness", "Hope", "Star", "Light"],
            fr: ["Bonjour", "Amour", "Vie", "Rêve", "Liberté", "Joie", "Bonheur", "Espoir", "Étoile", "Lumière"],
            it: ["Ciao", "Amore", "Vita", "Sogno", "Libertà", "Gioia", "Felicità", "Speranza", "Stella", "Luce"],
            ru: ["Привет", "Любовь", "Жизнь", "Мечта", "Свобода", "Радость", "Счастье", "Надежда", "Звезда", "Свет"],
            el: ["Γειά", "Αγάπη", "Ζωή", "Όνειρο", "Ελευθερία", "Χαρά", "Ευτυχία", "Ελπίδα", "Αστέρι", "Φως"]
        };

        const pageLang = localStorage.getItem('language') || 'en';
        const wordList = words[pageLang] || words.en;
        const randomIndex = Math.floor(Math.random() * wordList.length);
        wordOfTheDayElement.textContent = wordList[randomIndex];
    }

    // --- Student of the Month Feature ---
    const studentOfTheMonthElement = document.getElementById('student-of-the-month');
    if (studentOfTheMonthElement) {
        const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
        const randomStudentIndex = Math.floor(Math.random() * students.length);
        studentOfTheMonthElement.textContent = students[randomStudentIndex];
    }
});