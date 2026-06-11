import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN') || ''
const TELEGRAM  = `https://api.telegram.org/bot${BOT_TOKEN}`

serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  let body: { chat_id: string; message: string }
  try { body = await req.json() }
  catch { return new Response('Invalid JSON', { status: 400 }) }

  if (!body.chat_id || !body.message) {
    return new Response('Missing chat_id or message', { status: 422 })
  }

  const res = await fetch(`${TELEGRAM}/sendMessage`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: body.chat_id, text: body.message })
  })

  const data = await res.json()
  return new Response(JSON.stringify(data), { status: res.ok ? 200 : 500 })
})
