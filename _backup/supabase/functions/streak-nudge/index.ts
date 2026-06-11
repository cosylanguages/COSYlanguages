import { serve }        from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase  = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
const SEND_TG   = Deno.env.get('SUPABASE_URL') + '/functions/v1/send-telegram'
const SVC_KEY   = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''

serve(async (req) => {
  // Called by pg_cron every day at 20:00 UTC
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

  const { data: atRisk } = await supabase
    .from('progress')
    .select('streak_days, students(telegram_chat_id)')
    .gte('streak_days', 3)
    .eq('last_active', yesterday)

  let sent = 0
  for (const p of atRisk || []) {
    const chatId = p.students?.telegram_chat_id
    if (!chatId) continue

    await fetch(SEND_TG, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${SVC_KEY}` },
      body: JSON.stringify({
        chat_id: chatId,
        message: `🔥 Your ${p.streak_days}-day streak is at risk! Practice for 5 minutes to keep it alive → https://cosylanguages.github.io/COSYlanguages/practice/`
      })
    })
    sent++
  }

  return new Response(JSON.stringify({ sent }), { status: 200 })
})
