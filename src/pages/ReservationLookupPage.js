// pages/ReservationLookupPage.js
import React, { useState } from "react";
import LightLayout from "./layout/LightLayout";

export default function ReservationLookupPage() {
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
    hirerName: "Ahmet Yılmaz",
    hirerIdNumber: "12345678901",
    email: "ahmet@example.com",
    phone: "05551234567",
    adults: 2,
    children: 1,
    totalPrice: 34500,
  };

  const handleSearch = () => {
    if (code === dummyReservation.code) {
      setReservation(dummyReservation);
      setNotFound(false);
    } else {
      setReservation(null);
      setNotFound(true);
    }
  };

  return (
    <LightLayout>
      <div
        className="container"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <div
          style={{
            maxWidth: "600px",
            border: "2px solid #C8A97E",
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
              fontSize: "22px",
              fontWeight: "700",
              color: "#C8A97E",
              borderBottom: "2px solid #C8A97E",
              paddingBottom: "10px",
            }}
          >
            Rezervasyon Sorgulama
          </h2>

          <div style={{ marginBottom: "20px" }}>
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
              placeholder="Örnek: RSV-2025-001"
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
            <div style={{ marginTop: "30px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#C8A97E",
                  marginBottom: "10px",
                }}
              >
                Rezervasyon Detayları
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
              <p>
                <strong>Toplam Ücret:</strong>{" "}
                {reservation.totalPrice.toLocaleString("tr-TR")} TL
              </p>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  style={{
                    backgroundColor: "#000000",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  onClick={() =>
                    alert("Rezervasyon iptal isteği alındı (demo aşaması)")
                  }
                >
                  Rezervasyonu İptal Et
                </button>
              </div>
            </div>
          )}

          {notFound && (
            <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
              Rezervasyon bulunamadı. Lütfen numarayı kontrol ediniz.
            </p>
          )}
        </div>
      </div>
    </LightLayout>
  );
}
