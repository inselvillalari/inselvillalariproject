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

  const formattedEntryDate = new Date(entryDate).toLocaleDateString("tr-TR");
  const formattedExitDate = new Date(exitDate).toLocaleDateString("tr-TR");
  const formattedTotal = grandTotal.toLocaleString("tr-TR");
  const formattedVillaPrice = totalVillaPrice.toLocaleString("tr-TR");
  const formattedPoolPrice = totalHeatedPoolPrice?.toLocaleString("tr-TR");

  const whatsappLink = `https://wa.me/905324905307?text=Merhaba%2C%20${reservationNumber}%20kodlu%20rezervasyonumla%20ilgili%20bilgi%20almak%20istiyorum.`;

  return `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 640px; margin: auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
    <div style="padding: 32px;">
      <h2 style="color: #222; font-size: 22px; margin-bottom: 12px;">Rezervasyon Onayınız</h2>
      <p style="font-size: 16px; color: #444;">Sayın <strong>${name} ${surname}</strong>,</p>
      <p style="font-size: 16px; color: #444;">
        <strong>${villa}</strong> için <strong>${formattedEntryDate}</strong> - <strong>${formattedExitDate}</strong> tarihleri arasında, <strong>${totalNights}</strong> gece konaklamalı rezervasyonunuz başarıyla alınmıştır.
      </p>

      <div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-radius: 8px;">
        <p style="font-size: 14px; color: #222; margin: 0;">Rezervasyon Kodu</p>
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
        <li><strong>Villa Ücreti:</strong> ${formattedVillaPrice} TL</li>
        ${
          heatedPool
            ? `<li><strong>Isıtmalı Havuz Ücreti:</strong> ${formattedPoolPrice} TL</li>`
            : ""
        }
        <li style="margin-top: 8px;"><strong style="color:#C8A97E;">Genel Toplam:</strong> <span style="font-weight: bold;">${formattedTotal} TL</span></li>
        ${
          wantsCrib
            ? `<li><strong>Ekstra Hizmet:</strong> Beşik talep edildi</li>`
            : ""
        }
      </ul>

      <p style="font-size: 15px; color: #444; margin-top: 32px;">
        Rezervasyon detaylarınızı web sitemizden <a href="https://inselvillalari.com/reservation-lookup" style="color: #C8A97E; text-decoration: none;">buradan</a> görüntüleyebilirsiniz.
      </p>

      <p style="font-size: 16px; margin-top: 36px;">İyi tatiller dileriz! 🌴</p>

      <a href="${whatsappLink}" target="_blank" style="display: inline-block; margin-top: 12px; background-color: #25D366; color: #fff; padding: 10px 16px; border-radius: 6px; font-weight: bold; text-decoration: none;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="20" style="vertical-align: middle; margin-right: 8px;" />
        WhatsApp ile iletişime geçin
      </a>

      <p style="font-size: 14px; color: #999; margin-top: 40px;">İnsel Villaları © 2025</p>
    </div>
  </div>
  `;
}
