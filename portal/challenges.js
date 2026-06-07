import { supabase } from '../js/supabase.js';

export async function loadActiveChallenges(language) {
  const { data } = await supabase
    .from('challenges')
    .select('*')
    .eq('language', language)
    .gte('starts_at', new Date(Date.now() - 30 * 86400000).toISOString())
    .order('starts_at', { ascending: false });
  return data || [];
}

export async function enrolInChallenge(studentId, challengeId) {
  const { error } = await supabase.from('challenge_enrolments').insert({
    student_id: studentId,
    challenge_id: challengeId
  });
  return !error;
}

export async function getEnrolment(studentId, challengeId) {
  const { data } = await supabase
    .from('challenge_enrolments')
    .select('*')
    .eq('student_id', studentId)
    .eq('challenge_id', challengeId)
    .single();
  return data;
}

export async function markDayComplete(enrolmentId, daysCompleted) {
  await supabase.from('challenge_enrolments').update({
    days_completed: daysCompleted,
    completed: daysCompleted >= 30
  }).eq('id', enrolmentId);
}
