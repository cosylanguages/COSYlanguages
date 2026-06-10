/**
 * js/portal/curriculum-links.js
 * Data access for ProgressMe curriculum links stored in Supabase.
 */

(function() {
    'use strict';

    async function getCurriculumLinks(lang, courseType, level) {
        if (!window.supabase) return [];

        // Normalize level (A1 -> Starter, etc.) if needed,
        // but for now we query based on the normalized CEFR code.
        const normalizedLevel = (window.levelIdToShort ? window.levelIdToShort(level) : level).toUpperCase();

        const { data, error } = await window.supabase
            .from('curriculum_links')
            .select('unit_index, progressme_url')
            .eq('language', lang.toLowerCase())
            .eq('course_type', courseType.toLowerCase())
            .eq('level', normalizedLevel);

        if (error) {
            console.error('[COSY] Error fetching curriculum links:', error);
            return [];
        }

        return data || [];
    }

    async function upsertCurriculumLink(lang, courseType, level, unitIndex, url) {
        if (!window.supabase) return false;

        const normalizedLevel = (window.levelIdToShort ? window.levelIdToShort(level) : level).toUpperCase();

        const { error } = await window.supabase
            .from('curriculum_links')
            .upsert({
                language: lang.toLowerCase(),
                course_type: courseType.toLowerCase(),
                level: normalizedLevel,
                unit_index: unitIndex,
                progressme_url: url
            }, { onConflict: 'language,course_type,level,unit_index' });

        if (error) {
            console.error('[COSY] Error upserting curriculum link:', error);
            return false;
        }

        return true;
    }

    window.COSY_LINKS = {
        getLinks: getCurriculumLinks,
        upsertLink: upsertCurriculumLink
    };

})();
