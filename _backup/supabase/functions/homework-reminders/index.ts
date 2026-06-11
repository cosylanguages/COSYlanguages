import { serve }        from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
const SEND_TG  = Deno.env.get('SUPABASE_URL') + '/functions/v1/send-telegram'
const SVC_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''

serve(async (req) => {
  // Called by pg_cron every day at 09:00 UTC
  const tomorrow    = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0]

  const { data: due } = await supabase
    .from('homework')
    .select('task_description, students(telegram_chat_id, access_code)')
    .eq('status', 'pending')
    .eq('due_date', tomorrowStr)

  let sent = 0
  for (const hw of due || []) {
    const chatId = hw.students?.telegram_chat_id
    if (!chatId) continue

    await fetch(SEND_TG, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${SVC_KEY}` },
      body: JSON.stringify({
        chat_id: chatId,
        message: `📚 Reminder: your homework "${hw.task_description}" is due tomorrow!`
      })
    })
    sent++
  }

  return new Response(JSON.stringify({ sent }), { status: 200 })
})
