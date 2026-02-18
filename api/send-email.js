const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // מאפשר גישה מהאתר של אנימה (CORS)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;
    
    await resend.emails.send({
      from: 'THE CMO CLUB <hello@mycmoclub.com>',
      to: 'danitbensimon@gmail.com',
      subject: `New ${type} Application: ${data.name || 'New Lead'}`,
      html: `<p>New submission from <b>${data.name}</b> (${data.email || data.workEmail})</p>`
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
