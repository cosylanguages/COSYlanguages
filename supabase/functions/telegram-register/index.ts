import { serve }        from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase   = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
const BOT_TOKEN  = Deno.env.get('TELEGRAM_BOT_TOKEN') || ''
const TELEGRAM   = `https://api.telegram.org/bot${BOT_TOKEN}`

// This function is the Telegram bot webhook endpoint.
// Telegram calls it whenever a user sends a message to the bot.
serve(async (req) => {
  if (req.method !== 'POST') return new Response('ok', { status: 200 })

  let update: { message?: { chat: { id: number }; text?: string } }
  try { update = await req.json() }
  catch { return new Response('bad json', { status: 400 }) }

  const msg     = update.message
  const chatId  = msg?.chat?.id
  const text    = msg?.text?.trim().toUpperCase() || ''

  if (!chatId) return new Response('ok', { status: 200 })

  // Student sends their access code to the bot to register
  // e.g. they type: MARIE-FR-2024
  const { data: student } = await supabase
    .from('students')
    .select('id, access_code')
    .eq('access_code', text)
    .single()

  if (!student) {
    // Unknown code — ask them to try again
    await fetch(`${TELEGRAM}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `I don't recognise that code. Please send your COSYlanguages access code exactly as James gave it to you.`
      })
    })
    return new Response('ok', { status: 200 })
  }

  // Save the chat_id to the student record
  await supabase.from('students')
    .update({ telegram_chat_id: String(chatId) })
    .eq('id', student.id)

  await fetch(`${TELEGRAM}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: `✅ You're registered! You'll now receive homework reminders and streak nudges here. Good luck with your studies! 🎉`
    })
  })

  return new Response('ok', { status: 200 })
})
