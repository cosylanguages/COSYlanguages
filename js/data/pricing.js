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

        if (type === 'group') {
            durField.style.opacity = '.4';
            packField.style.opacity = '.4';
            durField.style.pointerEvents = 'none';
            packField.style.pointerEvents = 'none';
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

        durField.style.opacity = '';
        packField.style.opacity = '';
        durField.style.pointerEvents = '';
        packField.style.pointerEvents = '';

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

    // Auto-init if on a page with a calculator
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('calc-lang')) {
            window.calcPrice();
            ['calc-lang', 'calc-type', 'calc-dur', 'calc-pack', 'calc-cur'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', window.calcPrice);
            });
        }
    });
})();
