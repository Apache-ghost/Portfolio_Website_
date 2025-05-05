// server.js using ES modules
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const email_sender = "guegouo.guiddel@ictuniversity.edu.cm";
const email_password = "flbp rfpq supp qarv";

app.post('/send-email', async (req, res) => {
  const { username, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email_sender,
      pass: email_password
    },
  });

  const mailOptions = {
    from: email_sender,
    to: email,
    subject: `Reply to: ${subject}`,
    text: `Hello ${username},\n\nThank you for your message:\n"${message}"\n\nWe will get back to you shortly.\n\nRegards,\nTeam`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
