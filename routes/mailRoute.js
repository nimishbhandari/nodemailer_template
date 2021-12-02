import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.get("/", async (req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "noreply.techsrijan@gmail.com", // generated ethereal user
      pass: "MMMUT@987", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Tech Srijan" <noreply.techsrijan@gmail.com>', // sender address
    to: "nimishbhandari727521@gmail.com, bhandarinimish1@gmail.com", // list of receivers
    subject: "TESTING", // Subject line
    text: "Test mail by the developers ASPN........", // plain text body
    html: "<b>Test mail by the developers ASPN</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.send("Sent");
});

export default router;
