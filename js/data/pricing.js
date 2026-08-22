/**
 * js/data/pricing.js
 * Price calculator logic and constants for COSYlanguages.
 */

(function() {
    const BASE_DUR = { 15: 5, 30: 10, 60: 20, 90: 30, 120: 40 };
    const LANG_ADD = { en: 0, fr: 5, it: 5, ru: 10, el: 10 };
    const COURSE_DURS = {
        spoken: [15, 30],
        general: [60, 90],
        professional: [60, 90],
        relocation: [60, 90],
        travelling: [60, 90],
        exam: [120]
    };
    const DISC = { 1: 0, 8: .05, 16: .10, 32: .15 };
    const CUR_R = { EUR: 1, USD: 1.08, RUB: 92 };
    const CUR_S = { EUR: '€', USD: '$', RUB: '₽' };
    const GRP_LG = { en: 'English 🇬🇧', fr: 'Français 🇫🇷', it: 'Italiano 🇮🇹', ru: 'Русский 🇷🇺', el: 'Ελληνικά 🇬🇷' };

    window.calcPrice = function() {
        const langSelect = document.getElementById('calc-lang');
        const typeSelect = document.getElementById('calc-type');
        const durSelect = document.getElementById('calc-dur');
        if (!langSelect || !typeSelect || !durSelect) return;

        const lang = langSelect.value;
        const type = typeSelect.value;

        // Constraint enforcement: Update allowed durations based on course type
        if (type !== 'group' && COURSE_DURS[type]) {
            const allowed = COURSE_DURS[type];
            let currentDur = parseInt(durSelect.value);

            // Sync UI options
            Array.from(durSelect.options).forEach(opt => {
                const v = parseInt(opt.value);
                const isAllowed = allowed.includes(v);
                opt.disabled = !isAllowed;
                opt.style.display = isAllowed ? '' : 'none';
            });

            // Auto-adjust if invalid
            if (!allowed.includes(currentDur)) {
                durSelect.value = allowed[0];
            }
        }

        const dur = parseInt(durSelect.value);
        const pack = parseInt(document.getElementById('calc-pack').value);
        const cur = document.getElementById('calc-cur').value;
        const el = id => document.getElementById(id);
        const durField = document.getElementById('dur-field');
        const packField = document.getElementById('pack-field');

        if (durField && packField) {
            durField.style.opacity = type === 'group' ? '.4' : '';
            packField.style.opacity = type === 'group' ? '.4' : '';
            durField.style.pointerEvents = type === 'group' ? 'none' : '';
            packField.style.pointerEvents = type === 'group' ? 'none' : '';
        }

        if (type === 'group') {
            const avail = GRP_LG[lang];
            if (avail) {
                el('calc-total').textContent = window.t('calc_contact_us');
                el('calc-detail').textContent = window.t('calc_group_pricing_desc');
                el('calc-note').textContent = avail + window.t('calc_group_avail_suffix');
            } else {
                el('calc-total').textContent = window.t('calc_not_yet_avail');
                el('calc-detail').textContent = window.t('calc_group_avail_langs');
                el('calc-note').textContent = '';
            }
            el('calc-cta').textContent = window.t('calc_ask_groups');
            el('calc-cta').href = `https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20group%20lessons%20in%20${encodeURIComponent(avail || 'this language')}.`;
            return;
        }

        const baseVal = (BASE_DUR[dur] || 20);
        const discount = DISC[pack];
        const sym = CUR_S[cur], rate = CUR_R[cur];

        const origBase = baseVal + (LANG_ADD[lang] || 0);
        const origTotal = (origBase * rate * pack).toFixed(cur === 'RUB' ? 0 : 2);
        const discountedBase = origBase * (1 - discount);
        const discountedSingle = (discountedBase * rate).toFixed(cur === 'RUB' ? 0 : 2);
        const discountedTotal = (discountedBase * rate * pack).toFixed(cur === 'RUB' ? 0 : 2);

        if (discount > 0) {
            el('calc-total').innerHTML = `
                <span class="original-price">${sym}${origTotal}</span>
                <span class="discounted-price">${sym}${discountedTotal}</span>
            `;
        } else {
            el('calc-total').textContent = `${sym}${discountedTotal}`;
        }

        if (pack === 1) {
            el('calc-detail').textContent = window.t('calc_per_session').replace('{0}', dur);
        } else {
            const packLabelMap = { 8: 'pack_starter', 16: 'pack_progress', 32: 'pack_maestro' };
            const packName = window.t(packLabelMap[pack]);
            const separator = window.t('calc_pack_separator') || ' · ';
            const perSessionSuffix = window.t('calc_per_session_suffix') || '/session';
            el('calc-detail').textContent = `${packName}${separator}${sym}${discountedSingle}${perSessionSuffix}`;
        }
        el('calc-note').textContent = discount > 0 ? window.t('calc_discount_applied').replace('{0}', (discount * 100).toFixed(0)) : '';
        el('calc-cta').textContent = window.t('calc_cta_book');
        el('calc-cta').href = 'https://wa.me/330766784195?text=Hi!%20I%27d%20like%20to%20book%20a%20lesson.';
    };

    let activeCategory = 'calc-type';

    const CATEGORY_ICONS = {
        'calc-lang': '🌍',
        'calc-type': '🎓',
        'calc-dur': '⏱️',
        'calc-pack': '📦',
        'calc-cur': '💵'
    };

    const CATEGORY_LABELS = {
        'calc-lang': 'calc_label_language',
        'calc-type': 'calc_label_course',
        'calc-dur': 'calc_label_duration',
        'calc-pack': 'calc_label_pack',
        'calc-cur': 'calc_label_currency'
    };

    const SHORT_LABELS = {
        'calc-lang': 'Language',
        'calc-type': 'Course',
        'calc-dur': 'Duration',
        'calc-pack': 'Pack',
        'calc-cur': 'Currency'
    };

    function renderExtendableCalculator() {
        const chipsBar = document.getElementById('calc-chips-bar');
        const optionsPanel = document.getElementById('calc-options-panel');
        if (!chipsBar || !optionsPanel) return;

        const categories = ['calc-lang', 'calc-type', 'calc-dur', 'calc-pack', 'calc-cur'];

        // Build Chips Bar
        chipsBar.innerHTML = '';
        categories.forEach(catId => {
            const selectEl = document.getElementById(catId);
            if (!selectEl) return;

            const selectedOpt = selectEl.options[selectEl.selectedIndex];
            const chipBtn = document.createElement('button');
            chipBtn.type = 'button';
            chipBtn.className = 'calc-chip-btn' + (activeCategory === catId ? ' active' : '');
            chipBtn.setAttribute('role', 'tab');
            chipBtn.setAttribute('aria-selected', activeCategory === catId ? 'true' : 'false');

            const icon = CATEGORY_ICONS[catId] || '';
            const shortLbl = SHORT_LABELS[catId] || '';
            let valText = selectedOpt ? selectedOpt.textContent : '';

            chipBtn.innerHTML = `<span class="chip-lbl">${shortLbl}:</span> <span class="chip-val">${valText}</span> <span class="chip-arrow">▾</span>`;

            chipBtn.addEventListener('click', () => {
                if (activeCategory === catId) {
                    activeCategory = activeCategory ? null : catId;
                } else {
                    activeCategory = catId;
                }
                renderExtendableCalculator();
            });

            chipsBar.appendChild(chipBtn);
        });

        // Build Options Drawer Panel
        optionsPanel.innerHTML = '';
        if (!activeCategory) {
            optionsPanel.classList.remove('open');
            return;
        }

        optionsPanel.classList.add('open');
        const targetSelect = document.getElementById(activeCategory);
        if (!targetSelect) return;

        const headerDiv = document.createElement('div');
        headerDiv.className = 'calc-options-header';
        const labelKey = CATEGORY_LABELS[activeCategory];
        const labelText = window.t ? window.t(labelKey) : 'Select Option';
        headerDiv.textContent = labelText;
        optionsPanel.appendChild(headerDiv);

        const gridDiv = document.createElement('div');
        gridDiv.className = 'calc-options-grid';

        Array.from(targetSelect.options).forEach(opt => {
            if (opt.style.display === 'none') return;

            const pillBtn = document.createElement('button');
            pillBtn.type = 'button';
            pillBtn.className = 'calc-option-pill' + (opt.value === targetSelect.value ? ' active' : '');
            if (opt.disabled) {
                pillBtn.disabled = true;
                pillBtn.classList.add('disabled');
            }

            pillBtn.textContent = opt.textContent;
            if (opt.hasAttribute('data-translate-key')) {
                pillBtn.setAttribute('data-translate-key', opt.getAttribute('data-translate-key'));
            }

            pillBtn.addEventListener('click', () => {
                if (opt.disabled) return;
                targetSelect.value = opt.value;
                targetSelect.dispatchEvent(new Event('change'));

                // Auto-advance to next natural category for rapid configuration flow
                const categories = ['calc-lang', 'calc-type', 'calc-dur', 'calc-pack', 'calc-cur'];
                const idx = categories.indexOf(activeCategory);
                if (idx !== -1 && idx < categories.length - 1) {
                    activeCategory = categories[idx + 1];
                }
                renderExtendableCalculator();
            });

            gridDiv.appendChild(pillBtn);
        });

        optionsPanel.appendChild(gridDiv);
    }

    // Auto-init if on a page with a calculator
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('calc-lang')) {
            window.calcPrice();
            renderExtendableCalculator();

            ['calc-lang', 'calc-type', 'calc-dur', 'calc-pack', 'calc-cur'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener('change', () => {
                        window.calcPrice();
                        renderExtendableCalculator();
                    });
                }
            });
        }
    });
})();
