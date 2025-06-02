export function generateReservationMail(reservation) {
  const {
    name,
    surname,
    villa,
    entryDate,
    exitDate,
    totalNights,
    email,
    gsmNumber,
    identityNumber,
    totalVillaPrice,
    totalHeatedPoolPrice,
    grandTotal,
    heatedPool,
    wantsCrib,
    reservationNumber,
  } = reservation;

  return `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 640px; margin: auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
    <div style="padding: 32px;">
      <h2 style="color: #222; font-size: 22px; margin-bottom: 12px;">Rezervasyon Onayınız</h2>
      <p style="font-size: 16px; color: #444;">Sayın <strong>${name} ${surname}</strong>,</p>
      <p style="font-size: 16px; color: #444;">
        <strong>${villa}</strong> için <strong>${entryDate}</strong> - <strong>${exitDate}</strong> tarihleri arasında, <strong>${totalNights}</strong> gece konaklamalı rezervasyonunuz başarıyla alınmıştır.
      </p>

      <div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-radius: 8px;">
        <p style="font-size: 14px; color: #888; margin: 0;">Rezervasyon Kodu</p>
        <p style="font-size: 18px; font-weight: bold; color: #C8A97E; margin: 4px 0;">${reservationNumber}</p>
      </div>

      <h3 style="margin-top: 32px; font-size: 18px; color: #222;">Kiralayan Kişi Bilgileri</h3>
      <ul style="list-style: none; padding: 0; font-size: 15px; color: #444;">
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Telefon:</strong> ${gsmNumber}</li>
        <li><strong>Kimlik No:</strong> ${identityNumber}</li>
      </ul>

      <h3 style="margin-top: 32px; font-size: 18px; color: #222;">Ödeme Özeti</h3>
      <ul style="list-style: none; padding: 0; font-size: 15px; color: #444;">
        <li><strong>Villa Ücreti:</strong> ${totalVillaPrice.toLocaleString(
          "tr-TR"
        )} TL</li>
        ${
          heatedPool
            ? `<li><strong>Isıtmalı Havuz Ücreti:</strong> ${totalHeatedPoolPrice.toLocaleString(
                "tr-TR"
              )} TL</li>`
            : ""
        }
        <li style="margin-top: 8px;"><strong style="color:#C8A97E;">Genel Toplam:</strong> <span style="font-weight: bold;">${grandTotal.toLocaleString(
          "tr-TR"
        )} TL</span></li>
        ${
          wantsCrib
            ? `<li><strong>Ekstra Hizmet:</strong> Beşik talep edildi</li>`
            : ""
        }
      </ul>

      <p style="font-size: 15px; color: #444; margin-top: 32px;">
        Rezervasyon detaylarınızı web sitemizden <a href="https://inselvillalari.com/reservation-lookup" style="color: #C8A97E; text-decoration: none;">buradan</a> görüntüleyebilirsiniz.
      </p>

      <p style="font-size: 14px; color: #999; margin-top: 32px;">İnsel Villaları © 2025</p>
    </div>
  </div>
  `;
}
