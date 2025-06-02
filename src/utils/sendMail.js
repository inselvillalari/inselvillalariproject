import nodemailer from "nodemailer";

export async function sendReservationMail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"İnsel Villaları" <${process.env.MAIL_USER}>`,
    to, // kullanıcıya gönder
    bcc: "info@inselvillalari.com", // kendine de gönder (kullanıcı görmez)
    subject,
    html,
  };

  return await transporter.sendMail(mailOptions);
}
