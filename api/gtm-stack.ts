// Vercel Serverless Function — backup copy of each Growth Stack 2026 survey answer
// Emails the full answer to the admin via Resend, so answers survive even when
// HubSpot can't create a contact (e.g. over the contact record limit).
//
// Frontend calls:
//   POST /api/gtm-stack
//   Body: { fields: Record<string,string>, answers: string[] }

import type { VercelRequest, VercelResponse } from '@vercel/node';

const ADMIN = 'danitbensimon@gmail.com';
const FROM = ['CMO Club Survey <survey@mycmoclub.com>', 'CMO Club Survey <survey@gf.danitbensimon.com>'];

const esc = (s: unknown) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing RESEND_API_KEY' });

  const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body) || {};
  const fields: Record<string, string> = body.fields || {};
  const answers: string[] = Array.isArray(body.answers) ? body.answers.map(String) : [];
  if (!fields.email) return res.status(400).json({ error: 'Missing email' });

  const row = (k: string, v: string) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top">${esc(k)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${esc(v)}</td></tr>`;
  const contactRows = Object.entries(fields).filter(([, v]) => v).map(([k, v]) => row(k, v));
  const answerRows = answers.map((a) => { const i = a.indexOf(': '); return i > 0 ? row(a.slice(0, i), a.slice(i + 2)) : row('', a); });
  const html = `<div style="font-family:-apple-system,system-ui,sans-serif;max-width:640px;font-size:16px">
    <h2 style="color:#111">New Growth Stack 2026 answer</h2>
    <table style="border-collapse:collapse;width:100%">${contactRows.join('')}${answerRows.join('')}</table>
    <p style="color:#111">Raw: ${esc(answers.join(' | '))}</p></div>`;
  const subject = `Growth Stack 2026: ${fields.firstname || ''} ${fields.lastname || ''}, ${fields.company || fields.email}`.replace(/\s+/g, ' ');

  let last = '';
  for (const from of FROM) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ from, to: ADMIN, reply_to: fields.email, subject, html }),
    });
    if (r.ok) return res.status(200).json({ success: true });
    last = await r.text();
  }
  return res.status(502).json({ error: 'Backup email failed', details: last });
}
