import nodemailer from "nodemailer";

export async function sendReservationMail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // ya da kendi SMTP sunucun
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"İnsel Villaları" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html,
  };

  return await transporter.sendMail(mailOptions);
}
