/**
 * js/core/analytics.js
 * Lightweight, privacy-respecting, local-first analytics for COSYlanguages.
 * Stores events strictly in LocalStorage under 'cosy_analytics_events' (no cookies, no third-party trackers).
 */
(function() {
    'use strict';

    window.cosyTrackEvent = function(category, action, label) {
        try {
            const events = JSON.parse(localStorage.getItem('cosy_analytics_events') || '[]');
            const newEvent = {
                timestamp: new Date().toISOString(),
                category: category,
                action: action,
                label: label || '',
                url: window.location.pathname
            };
            events.push(newEvent);

            // Limit to last 500 events to prevent localStorage bloat
            if (events.length > 500) {
                events.shift();
            }

            localStorage.setItem('cosy_analytics_events', JSON.stringify(events));
            console.log(`[COSY Analytics] Local Event Tracked:`, newEvent);
        } catch (e) {
            console.warn('[COSY Analytics] Failed to record event:', e);
        }
    };

    // Auto-bind click analytics for key funnels on DOMContentLoaded
    const setupAnalyticsBindings = () => {
        document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href') || '';
            const text = (anchor.textContent || '').trim();
            const isKaraokePage = window.location.pathname.includes('karaoke-club.html');

            // 1. Specific Karaoke page interactions
            if (isKaraokePage && (anchor.classList.contains('join-btn') || text.includes('Register Interest'))) {
                window.cosyTrackEvent('Karaoke Funnel', 'Register Interest', text);
                return;
            }
            if (isKaraokePage && anchor.classList.contains('btn-primary') && text.includes('Enter Challenge')) {
                const cardTitle = anchor.closest('.history-session')?.querySelector('h4')?.textContent || 'Challenge';
                window.cosyTrackEvent('Karaoke Funnel', 'Enter Challenge', cardTitle);
                return;
            }

            // 2. Generic Contact clicks
            if (href.includes('wa.me') || href.includes('whatsapp.com')) {
                window.cosyTrackEvent('Homepage Funnel', 'Click WhatsApp', text || href);
            } else if (href.includes('t.me') || href.includes('telegram.org')) {
                window.cosyTrackEvent('Homepage Funnel', 'Click Telegram', text || href);
            }
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupAnalyticsBindings);
    } else {
        setupAnalyticsBindings();
    }
})();
