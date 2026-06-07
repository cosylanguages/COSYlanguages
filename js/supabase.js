import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = window.COSY_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = window.COSY_SUPABASE_ANON_KEY || '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
