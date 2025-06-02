import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";
import { sendReservationMail } from "../../../utils/sendMail";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const newRes = await Reservation.create(req.body);

      // Detayları çek
      const {
        name,
        surname,
        identityNumber,
        email,
        gsmNumber,
        adults,
        children,
        heatedPool,
        wantsCrib,
        villa,
        entryDate,
        exitDate,
        totalNights,
        totalVillaPrice,
        totalHeatedPoolPrice,
        grandTotal,
        reservationNumber,
      } = newRes;

      // TL ve tarih formatlama
      const formatTL = (val) =>
        val != null ? `${val.toLocaleString("tr-TR")} TL` : "-";

      const formatDate = (val) =>
        val ? new Date(val).toLocaleDateString("tr-TR") : "-";

      // HTML mail şablonu
      const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #2a2a2a;">Rezervasyon Onayı</h2>
        <p>Sayın <strong>${name} ${surname}</strong>,</p>
        <p><strong>${villa}</strong> için <strong>${formatDate(
        entryDate
      )}</strong> - <strong>${formatDate(
        exitDate
      )}</strong> tarihleri arasında <strong>${totalNights}</strong> gece konaklamalı bir rezervasyon oluşturulmuştur.</p>
    
        <hr style="margin: 20px 0;" />
    
        <h3>📌 Rezervasyon Kodu</h3>
        <p style="font-size: 16px; font-weight: bold; color: #C8A97E;">${reservationNumber}</p>
    
        <h3 style="margin-top: 30px;">👤 Kiralayan Kişi Bilgileri</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Ad Soyad:</strong> ${name} ${surname}</li>
          <li><strong>Kimlik/Pasaport No:</strong> ${identityNumber}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefon:</strong> ${gsmNumber}</li>
          <li><strong>Yetişkin Sayısı:</strong> ${adults}</li>
          <li><strong>Çocuk Sayısı:</strong> ${children}</li>
          <li><strong>Beşik Talebi:</strong> ${
            wantsCrib ? "Evet" : "Hayır"
          }</li>
        </ul>
    
        <h3 style="margin-top: 30px;">💳 Ödeme Özeti</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Villa Ücreti:</strong> ${formatTL(totalVillaPrice)}</li>
          ${
            heatedPool
              ? `<li><strong>Isıtmalı Havuz Ücreti:</strong> ${formatTL(
                  totalHeatedPoolPrice
                )}</li>`
              : ""
          }
          <li><strong>Genel Toplam:</strong> <span style="font-weight:bold; color: #C8A97E;">${formatTL(
            grandTotal
          )}</span></li>
        </ul>
    
        <hr style="margin: 30px 0;" />
        <p style="font-size: 14px; color: #555;">Bu e-posta, <strong>inselvillalari.com</strong> üzerinden oluşturulan rezervasyona dair otomatik bir bilgilendirmedir.</p>
        <p style="font-size: 13px; color: #999;">© 2025 İnsel Villaları</p>
      </div>
    `;

      await sendReservationMail({
        to: email,
        subject: "İnsel Villaları Rezervasyon Onayı",
        html,
      });

      return res.status(201).json({ status: "created", data: newRes });
    } catch (error) {
      console.error("HATA:", error);
      return res.status(400).json({ status: "error", error: error.message });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
