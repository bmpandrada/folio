// api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST requests allowed');
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your@gmail.com',
      pass: 'your-app-password', // ⚠️ Use App Password, not your real one
    },
  });

  const mailOptions = {
    from: email,
    to: 'your@gmail.com',
    subject: `Contact Form: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Email failed.');
  }
}
