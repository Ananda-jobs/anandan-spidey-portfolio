import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    console.log('Using API Key starts with:', process.env.EMAIL_API_KEY ? process.env.EMAIL_API_KEY.substring(0, 8) : 'UNDEFINED');
    // Example using Resend API (or similar email provider)
    // Replace with your actual provider URL and JSON structure if different.
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.EMAIL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Or your verified domain
        to: [process.env.CONTACT_EMAIL || 'youremail@example.com'],
        reply_to: email,
        subject: `Portfolio Contact — ${subject}`,
        html: `
          <h3>New Contact from Portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Email API Error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Server error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
