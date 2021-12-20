import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

//post api/mail
router.post("/", async (req, res) => {
  const { email, textMsg } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "noreply.techsrijan@gmail.com",
      pass: "MMMUT@987",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Tech Srijan" <noreply.techsrijan@gmail.com>',
    to: email,
    subject: "TESTING",
    text: textMsg,
    html: `<b>${textMsg}</b>`,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.send("Sent");
});

export default router;
