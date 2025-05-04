// pages/ReservationSuccess.js
import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import LightLayout from "../layout/LightLayout";

export default function ReservationSuccess() {
  const reservation = useSelector((state) => state.reservation);

  return (
    <LightLayout>
      <Head>
        <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .container, .container * {
              visibility: visible;
            }
            .container {
              position: absolute;
              left: 0;
              top: 0;
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
            }
            button {
              display: none !important;
            }
          }
        `}</style>
      </Head>
      <div
        className="container"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "10px",
            padding: "40px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "10px",
              fontSize: "24px",
              fontWeight: "700",
              color: "#C8A97E",
              borderBottom: "2px solid #C8A97E",
              paddingBottom: "10px",
            }}
          >
            Rezervasyon Başarıyla Tamamlandı
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#444",
              marginBottom: "20px",
            }}
          >
            Rezervasyon Numaranız:{" "}
            <strong style={{ color: "#C8A97E" }}>RSV-2025-001</strong>
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "10px",
              borderBottom: "1px solid #eee",
              paddingBottom: "6px",
              color: "#C8A97E",
            }}
          >
            Villa Bilgileri
          </h3>
          <p>
            <strong>Villa:</strong> {reservation.villa}
          </p>
          <p>
            <strong>Giriş Tarihi:</strong>{" "}
            {new Date(reservation.entryDate).toLocaleDateString("tr-TR")}
          </p>
          <p>
            <strong>Çıkış Tarihi:</strong>{" "}
            {new Date(reservation.exitDate).toLocaleDateString("tr-TR")}
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
              marginTop: "30px",
              marginBottom: "10px",
              borderBottom: "1px solid #eee",
              paddingBottom: "6px",
              color: "#C8A97E",
            }}
          >
            Kiralayan Bilgileri
          </h3>
          <p>
            <strong>Ad Soyad:</strong> {reservation.hirerName}
          </p>
          <p>
            <strong>Kimlik / Pasaport No:</strong> {reservation.hirerIdNumber}
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
              marginTop: "30px",
              marginBottom: "10px",
              borderBottom: "1px solid #eee",
              paddingBottom: "6px",
              color: "#C8A97E",
            }}
          >
            Ödeme Özeti
          </h3>
          <p>
            <strong>Villa Ücreti:</strong>{" "}
            {reservation.totalVillaPrice.toLocaleString("tr-TR")} TL
          </p>
          {reservation.heatedPool && (
            <p>
              <strong>Isıtmalı Havuz:</strong>{" "}
              {reservation.totalHeatedPoolPrice.toLocaleString("tr-TR")} TL
            </p>
          )}
          <p
            style={{
              fontWeight: "700",
              fontSize: "18px",
              marginTop: "10px",
              color: "#C8A97E",
            }}
          >
            Genel Toplam: {reservation.grandTotal.toLocaleString("tr-TR")} TL
          </p>

          <p style={{ fontSize: "13px", color: "#777", marginTop: "20px" }}>
            Ödeme giriş sırasında tahsil edilecektir. Rezervasyon e-postanızı
            kontrol ediniz.
          </p>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={() => window.print()}
              style={{
                backgroundColor: "#C8A97E",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Sayfayı Yazdır
            </button>
          </div>
        </div>
      </div>
    </LightLayout>
  );
}
