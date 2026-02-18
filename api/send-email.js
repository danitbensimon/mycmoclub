export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Please use POST' });

  try {
    const { type, data } = req.body;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'THE CMO CLUB <hello@mycmoclub.com>',
        to: 'danitbensimon@gmail.com',
        subject: `New submission: ${type}`,
        html: `<p>New lead from: ${data.email || 'No email'}</p><pre>${JSON.stringify(data, null, 2)}</pre>`
      })
    });

    const result = await response.json();
    return res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
