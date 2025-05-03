import React from "react";
import Head from "next/head";
import LightLayout from "../layout/LightLayout";

export default function ReservationPage() {
  return (
    <LightLayout>
      <div
        className="container"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <>
          <Head>
            <title>Hakkımızda | IN-SEL Villaları</title>
          </Head>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "3rem 1rem",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
              IN-SEL Villaları
            </h1>
            <p className="section-description">
              IN-SEL Villaları, Akdeniz’in incisi Kalkan’da yer alan seçkin
              tatil villalarını misafirlerimizle buluşturan özel bir kiralama
              platformudur. Her biri doğayla iç içe, şık tasarıma ve özel
              imkanlara sahip villalarımız, huzurlu ve konforlu bir tatil
              arayanlara hitap etmektedir.
            </p>

            <p className="section-description">
              Şirket olarak önceliğimiz, misafir memnuniyetidir. Bu doğrultuda,
              rezervasyon sürecinden konaklamaya kadar tüm aşamalarda şeffaflık,
              güven ve destek ilkeleriyle hareket ediyoruz. Villalarımız, bizzat
              tarafımızca kontrol edilmekte ve en yüksek konaklama
              standartlarını sunacak şekilde özenle seçilmektedir.
            </p>

            <p className="section-description">
              Güvenli ödeme altyapımız, kullanıcı dostu web sitemiz ve her zaman
              ulaşılabilir destek hattımız ile misafirlerimize kusursuz bir
              deneyim yaşatmayı hedefliyoruz. IN-SEL Villaları ile tatiliniz
              sadece bir konaklama değil; keyif, huzur ve ayrıcalık dolu bir
              deneyim olacak.
            </p>

            <p className="section-description">
              Daha fazla bilgi ve rezervasyon için bizimle iletişime
              geçebilirsiniz: <strong>info@inselvillalari.com</strong> –{" "}
              <strong>+90 532 490 53 07</strong>
            </p>
          </div>
        </>
      </div>
    </LightLayout>
  );
}