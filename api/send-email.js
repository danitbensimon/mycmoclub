const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // בדיקה שהמפתח קיים
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'API Key is missing in Vercel settings' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;

  try {
    // 1. התראה לדנית
    await resend.emails.send({
      from: 'THE CMO CLUB <hello@mycmoclub.com>',
      to: 'danitbensimon@gmail.com',
      subject: `New ${type} Application: ${data.name || 'New Member'}`,
      html: `<p>New ${type} submission!</p><pre>${JSON.stringify(data, null, 2)}</pre>`
    });

    // 2. אישור לנרשם
    if (data.email || data.workEmail) {
      await resend.emails.send({
        from: 'THE CMO CLUB <hello@mycmoclub.com>',
        to: data.email || data.workEmail,
        subject: 'Welcome to THE CMO CLUB',
        html: `<h3>Hi ${data.name || 'there'},</h3><p>Thank you for applying to be a ${type}. We will review your application and get back to you soon!</p>`
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message });
  }
};
