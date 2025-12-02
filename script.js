document.addEventListener('DOMContentLoaded', () => {
    // Refactored toggle functionality for events page
    const setupToggleButton = (btnId, contentId, showKey, hideKey) => {
        const toggleBtn = document.getElementById(btnId);
        const contentDiv = document.getElementById(contentId);

        if (toggleBtn && contentDiv) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = contentDiv.style.display === 'none';
                contentDiv.style.display = isHidden ? 'block' : 'none';
                toggleBtn.setAttribute('data-translate-key', isHidden ? hideKey : showKey);
                setLanguage(localStorage.getItem('language') || 'en');
            });
        }
    };

    setupToggleButton('toggle-topics-btn', 'speaking-club-topics', 'toggle_topics_show', 'toggle_topics_hide');
    setupToggleButton('toggle-games-btn', 'game-nights-topics', 'toggle_games_show', 'toggle_games_hide');

    if (document.getElementById('toggle-games-btn')) {
        const toggleBtn = document.getElementById('toggle-games-btn');
        const topicsDiv = document.getElementById('game-nights-topics');

        toggleBtn.addEventListener('click', () => {
            if (topicsDiv.style.display === 'none') {
                topicsDiv.style.display = 'block';
                toggleBtn.setAttribute('data-translate-key', 'toggle_games_hide');
                setLanguage(localStorage.getItem('language') || 'en');
            } else {
                topicsDiv.style.display = 'none';
                toggleBtn.setAttribute('data-translate-key', 'toggle_games_show');
                setLanguage(localStorage.getItem('language') || 'en');
            }
        });
    }

    // Check if the current page is index.html
    if (document.getElementById('price-calculator')) {
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
            } else {
                const input = document.createElement('input');
                input.type = 'text';
                input.id = 'course-type';
                input.value = availableCourses[0] || '';
                input.disabled = true;
                const courseKey = `course_${input.value.split(' ')[0].toLowerCase()}`;
                input.setAttribute('data-translate-key', courseKey);
                courseElement = input;
            }
            courseTypeContainer.appendChild(courseElement);
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
                        priceResultDiv.innerHTML = `Total Price: ${symbol}${totalCost.toFixed(2)}`;
                    }
                } else {
                    priceResultDiv.innerHTML = 'Invalid selection';
                }
            } else {
                priceResultDiv.innerHTML = '';
            }
        }

        languageSelect.addEventListener('change', updateCalculator);
        durationSelect.addEventListener('change', updateCourseType);
        lessonPackSelect.addEventListener('change', updateCalculator);
        currencySelect.addEventListener('change', updateCalculator);

        // Initial setup
        updateCourseType();
    }
});
