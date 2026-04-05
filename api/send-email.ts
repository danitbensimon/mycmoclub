// Vercel Serverless Function — sends email notifications via Resend
// Docs: https://resend.com/docs
//
// Required env var (set in Vercel dashboard):
//   RESEND_API_KEY = re_xxx...
//
// Frontend calls:
//   POST /api/send-email
//   Body: { type: 'membership'|'ambassador'|'expert', applicant: {...}, adminEmail?: string }

import type { VercelRequest, VercelResponse } from '@vercel/node';

const FROM_EMAIL = 'The CMO Club <noreply@mycmoclub.com>';
const DEFAULT_ADMIN = 'danitbensimon@gmail.com';

type SendEmailBody = {
  type: 'membership' | 'ambassador' | 'expert';
  applicant: Record<string, string | boolean | undefined>;
  adminEmail?: string;
};

const buildAdminEmail = (type: string, applicant: Record<string, unknown>) => {
  const rows = Object.entries(applicant)
    .filter(([, v]) => v !== undefined && v !== '' && v !== null)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${String(v)}</td></tr>`)
    .join('');
  return `
    <div style="font-family:-apple-system,system-ui,sans-serif;max-width:600px">
      <h2 style="color:#111">New ${type} application</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
    </div>
  `;
};

const buildApplicantEmail = (firstName: string) => `
  <div style="font-family:-apple-system,system-ui,sans-serif;max-width:600px">
    <h2 style="color:#111">Thanks${firstName ? ', ' + firstName : ''}!</h2>
    <p>We received your application to The CMO Club. Our team reviews every application personally — expect to hear from us within a few business days.</p>
    <p style="color:#666;font-size:14px">— The CMO Club team</p>
  </div>
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Email service not configured (missing RESEND_API_KEY)' });

  const body = req.body as SendEmailBody;
  if (!body || !body.type || !body.applicant) {
    return res.status(400).json({ error: 'Missing required fields: type, applicant' });
  }

  const applicantEmail = body.applicant.email || body.applicant.workEmail;
  const firstName = (body.applicant.fullName || body.applicant.name || '').toString().split(' ')[0] || '';
  const adminTo = body.adminEmail || DEFAULT_ADMIN;

  const sendOne = (to: string, subject: string, html: string) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
    });

  try {
    const adminRes = await sendOne(
      adminTo,
      `New ${body.type} application`,
      buildAdminEmail(body.type, body.applicant as Record<string, unknown>)
    );

    let applicantOk = true;
    if (applicantEmail) {
      const applicantRes = await sendOne(
        String(applicantEmail),
        'Thanks for applying to The CMO Club',
        buildApplicantEmail(firstName)
      );
      applicantOk = applicantRes.ok;
    }

    if (!adminRes.ok) {
      const errText = await adminRes.text();
      return res.status(502).json({ error: 'Resend admin email failed', details: errText });
    }

    return res.status(200).json({ success: true, applicantEmailSent: applicantOk });
  } catch (err) {
    return res.status(500).json({ error: 'Send failed', details: String(err) });
  }
}
