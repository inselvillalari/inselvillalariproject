import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

function ReservationLookupPage() {
  const [code, setCode] = useState("");
  const [reservation, setReservation] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const dummyReservation = {
    code: "RSV-2025-001",
    villa: "Villa Capella",
    entryDate: "2025-06-15",
    exitDate: "2025-06-20",
    totalNights: 5,
    heatedPool: true,
    wantsCrib: false,
    hirerName: "Yakışıklı Tolga Kaya",
    hirerIdNumber: "12345678901",
    email: "tolga3461@example.com",
    phone: "05551234567",
    adults: 2,
    children: 1,
    totalPrice: 34500,
  };

  const handleSearch = () => {
    if (code.trim() === dummyReservation.code) {
      setReservation(dummyReservation);
      setNotFound(false);
    } else {
      setReservation(null);
      setNotFound(true);
    }
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        padding: "0 16px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: "12px",
          padding: "36px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "700",
            color: "#C8A97E",
            borderBottom: "2px solid #C8A97E",
            paddingBottom: "10px",
            marginBottom: "30px",
          }}
        >
          Rezervasyon Sorgulama
        </h2>

        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "6px",
              display: "block",
            }}
          >
            Rezervasyon Numarası
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Örnek: RSV-2024-001"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
        </div>

        <button
          onClick={handleSearch}
          style={{
            backgroundColor: "#C8A97E",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            width: "100%",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Sorgula
        </button>

        {reservation && (
          <div style={{ marginTop: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#C8A97E",
                marginBottom: "16px",
                borderBottom: "1px solid #eee",
                paddingBottom: "8px",
              }}
            >
              Rezervasyon Bilgileri
            </h3>
            <p>
              <strong>Rezervasyon Kodu:</strong> {reservation.code}
            </p>
            <p>
              <strong>Villa:</strong> {reservation.villa}
            </p>
            <p>
              <strong>Giriş Tarihi:</strong> {reservation.entryDate}
            </p>
            <p>
              <strong>Çıkış Tarihi:</strong> {reservation.exitDate}
            </p>
            <p>
              <strong>Toplam Gece:</strong> {reservation.totalNights}
            </p>
            <p>
              <strong>Isıtmalı Havuz:</strong>{" "}
              {reservation.heatedPool ? "Evet" : "Hayır"}
            </p>
            <p>
              <strong>Beşik Talebi:</strong>{" "}
              {reservation.wantsCrib ? "Evet" : "Hayır"}
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#C8A97E",
                marginTop: "30px",
                marginBottom: "16px",
                borderBottom: "1px solid #eee",
                paddingBottom: "8px",
              }}
            >
              Kiralayan Bilgileri
            </h3>
            <p>
              <strong>Ad Soyad:</strong> {reservation.hirerName}
            </p>
            <p>
              <strong>Kimlik / Pasaport:</strong> {reservation.hirerIdNumber}
            </p>
            <p>
              <strong>Email:</strong> {reservation.email}
            </p>
            <p>
              <strong>Telefon:</strong> {reservation.phone}
            </p>
            <p>
              <strong>Yetişkin:</strong> {reservation.adults}
            </p>
            <p>
              <strong>Çocuk:</strong> {reservation.children}
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#C8A97E",
                marginTop: "30px",
                marginBottom: "16px",
                borderBottom: "1px solid #eee",
                paddingBottom: "8px",
              }}
            >
              Ödeme
            </h3>
            <p>
              <strong>Toplam Ücret:</strong>{" "}
              {reservation.totalPrice.toLocaleString("tr-TR")} TL
            </p>

            <div
              style={{
                textAlign: "center",
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <a
                href="https://wa.me/905324905307?text=Merhaba,%20rezervasyonumu%20iptal%20etmek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#000",
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 24px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "14px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Rezervasyonu İptal Et
              </a>

              <a
                href="https://wa.me/905324905307?text=Merhaba,%20rezervasyonumda%20değişiklik%20yapmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#C8A97E",
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 24px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "14px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Rezervasyon Değişikliği
              </a>
            </div>
          </div>
        )}

        {notFound && (
          <p style={{ color: "red", marginTop: "24px", textAlign: "center" }}>
            Rezervasyon bulunamadı. Lütfen numarayı kontrol ediniz.
          </p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(ReservationLookupPage);
