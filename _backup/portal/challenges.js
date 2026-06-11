import { supabase } from '../js/supabase.js';

// Load challenges available for a given language (active in last 30 days)
export async function loadActiveChallenges(language) {
  const { data } = await supabase
    .from('challenges')
    .select('*')
    .eq('language', (language || 'en').toLowerCase())
    .gte('starts_at', new Date(Date.now() - 30 * 86400000).toISOString())
    .order('starts_at', { ascending: false });
  return data || [];
}

// Enrol a student in a challenge (unique constraint prevents double enrolment)
export async function enrolInChallenge(studentId, challengeId) {
  const { error } = await supabase.from('challenge_enrolments').insert({
    student_id:   studentId,
    challenge_id: challengeId
  });
  return !error;
}

// Get a student's enrolment for a specific challenge
export async function getEnrolment(studentId, challengeId) {
  const { data } = await supabase
    .from('challenge_enrolments')
    .select('*')
    .eq('student_id', studentId)
    .eq('challenge_id', challengeId)
    .single();
  return data;
}

// Mark today's task as done
export async function markDayComplete(enrolmentId, currentDaysCompleted) {
  const newDays = currentDaysCompleted + 1;
  await supabase.from('challenge_enrolments').update({
    days_completed: newDays,
    completed:      newDays >= 30
  }).eq('id', enrolmentId);
  return newDays;
}

// Teacher: create a new challenge
export async function createChallenge(title, language, durationDays, startsAt, dailyTasks) {
  const { data, error } = await supabase.from('challenges').insert({
    title,
    language,
    duration_days: durationDays,
    starts_at:     startsAt,
    daily_tasks:   dailyTasks
  }).select().single();
  return { data, error };
}
