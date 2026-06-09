import { supabase } from '../js/supabase.js';

export async function getCurriculumLinks(language, courseType, level) {
  const { data } = await supabase
    .from('curriculum_links')
    .select('unit_ref, unit_title, progressme_url')
    .eq('language', language)
    .eq('course_type', courseType)
    .eq('level', level)
    .order('unit_ref', { ascending: true });
  return data || [];
}

export async function upsertCurriculumLink(language, courseType, level, unitRef, unitTitle, progressmeUrl) {
  const { error } = await supabase
    .from('curriculum_links')
    .upsert({
      language,
      course_type:     courseType,
      level,
      unit_ref:        unitRef,
      unit_title:      unitTitle,
      progressme_url:  progressmeUrl
    }, { onConflict: 'language,course_type,level,unit_ref' });
  return !error;
}
