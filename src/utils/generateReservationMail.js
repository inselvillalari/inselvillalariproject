export function generateReservationMail(reservation) {
  const {
    name,
    surname,
    villa,
    entryDate,
    exitDate,
    totalNights,
    price,
    totalHeatedPoolPrice,
    grandTotal,
    heatedPool,
    wantsCrib,
    reservationNumber,
  } = reservation;

  const formattedEntryDate = new Date(entryDate).toLocaleDateString("tr-TR");
  const formattedExitDate = new Date(exitDate).toLocaleDateString("tr-TR");
  const formattedTotal = grandTotal.toLocaleString("tr-TR");
  const formattedPrice = price.toLocaleString("tr-TR");
  const formattedPoolPrice = totalHeatedPoolPrice?.toLocaleString("tr-TR");

  const whatsappLink = `https://wa.me/905324905307?text=Merhaba%2C%20${reservationNumber}%20kodlu%20rezervasyonumla%20ilgili%20bilgi%20almak%20istiyorum.`;

  return `
  <div style="font-family: 'Arial', sans-serif; max-width: 640px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; background-color: #fff;">
    <div style="padding: 32px;">

      <h2 style="font-size: 20px; color: #1d1d1f; margin-bottom: 16px;">Rezervasyon Onayınız</h2>

      <p style="font-size: 15px; color: #333;">
        Sayın <strong>${name} ${surname}</strong>,
      </p>

      <p style="font-size: 15px; color: #333;">
        <strong>${villa}</strong> için <strong>${formattedEntryDate}</strong> - <strong>${formattedExitDate}</strong> tarihleri arasında, <strong>${totalNights}</strong> gece konaklamalı rezervasyonunuz başarıyla alınmıştır.
      </p>

      <div style="margin-top: 24px; background-color: #f7f7f7; border-radius: 8px; padding: 16px;">
        <p style="font-size: 14px; color: #222; margin: 0;">Rezervasyon Kodu</p>
        <p style="font-size: 16px; font-weight: bold; color: #C8A97E; margin: 4px 0;">${reservationNumber}</p>
      </div>

      <h3 style="margin-top: 28px; font-size: 16px; color: #1d1d1f;">Ödeme Özeti</h3>
      <ul style="font-size: 14px; color: #333; padding-left: 0; list-style: none;">
        <li><strong>Ödenen Tutar:</strong> ${formattedPrice} TL</li>
        ${
          heatedPool
            ? `<li><strong>Isıtmalı Havuz Ücreti:</strong> ${formattedPoolPrice} TL</li>`
            : ""
        }
        <li><strong>Genel Toplam:</strong> ${formattedTotal} TL</li>
        ${
          wantsCrib
            ? `<li><strong>Ekstra Hizmet:</strong> Beşik talep edildi</li>`
            : ""
        }
      </ul>

      <p style="font-size: 14px; color: #333; margin-top: 24px;">
        Rezervasyon detaylarınızı web sitemizden <a href="https://inselvillalari.com/reservation-lookup" style="color: #C8A97E; text-decoration: underline;">buradan</a> görüntüleyebilirsiniz.
      </p>

      <p style="font-size: 15px; color: #222; margin-top: 32px;">İyi tatiller dileriz! 🌴</p>

      <a href="${whatsappLink}" target="_blank" style="display: inline-block; margin-top: 12px; text-decoration: none;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" style="vertical-align: middle; margin-right: 8px;" />
        <span style="font-size: 14px; color: #25D366; font-weight: bold;">WhatsApp ile iletişime geçin</span>
      </a>

      <p style="font-size: 12px; color: #999; margin-top: 40px;">İnsel Villaları © 2025</p>
    </div>
  </div>
  `;
}
