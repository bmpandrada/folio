// server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bmpandrada@gmail.com',
    pass: 'jabuimlvmnboheid'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'bmpandrada@gmail.com',
    subject: `Contact Form: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    //   console.log('❌ Email failed:', error);
      res.status(500).send('Email failed.');
    } else {
    //   console.log('✅ Email sent:', info.response);
      res.send('Email sent!');
    }
  });
});

app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
});
