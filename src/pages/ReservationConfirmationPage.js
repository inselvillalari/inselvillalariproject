// pages/ReservationConfirmationPage.js
import React from "react";
import { useSelector } from "react-redux";
import LightLayout from "./layout/LightLayout";

export default function ReservationConfirmationPage() {
  const reservation = useSelector((state) => state.reservation);

  return (
    <LightLayout>
      <div
        style={{
          maxWidth: "900px",
          margin: "150px auto",
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#C8A97E",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Rezervasyon Başarıyla Oluşturuldu
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#444",
            marginBottom: "40px",
          }}
        >
          Aşağıda rezervasyon detaylarınızı bulabilirsiniz. Lütfen bilgileri kontrol ediniz.
        </p>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h3 style={{ color: "#C8A97E", fontSize: "20px" }}>Villa Bilgileri</h3>
            <p><strong>Villa:</strong> {reservation.villa}</p>
            <p><strong>Giriş Tarihi:</strong> {reservation.entryDate?.toString().slice(0, 10)}</p>
            <p><strong>Çıkış Tarihi:</strong> {reservation.exitDate?.toString().slice(0, 10)}</p>
            <p><strong>Toplam Gece:</strong> {reservation.totalNights}</p>
            <p><strong>Isıtmalı Havuz:</strong> {reservation.heatedPool ? "Evet" : "Hayır"}</p>
            <p><strong>Beşik İsteği:</strong> {reservation.wantsCrib ? "Evet" : "Hayır"}</p>
          </div>

          <div style={{ flex: "1 1 400px" }}>
            <h3 style={{ color: "#C8A97E", fontSize: "20px" }}>Kiralayan Bilgileri</h3>
            <p><strong>Ad Soyad:</strong> {reservation.hirerName}</p>
            <p><strong>Kimlik / Pasaport No:</strong> {reservation.hirerIdNumber}</p>
            <p><strong>Email:</strong> {reservation.email}</p>
            <p><strong>Telefon:</strong> {reservation.phone}</p>
            <p><strong>Yetişkin Sayısı:</strong> {reservation.adults}</p>
            <p><strong>Çocuk Sayısı:</strong> {reservation.children}</p>
          </div>
        </div>

        <hr style={{ margin: "40px 0" }} />

        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", color: "#C8A97E" }}>Özet</h3>
          <p><strong>Villa Fiyatı:</strong> {reservation.totalVillaPrice.toLocaleString("tr-TR")} TL</p>
          {reservation.heatedPool && (
            <p><strong>Isıtmalı Havuz Fiyatı:</strong> {reservation.totalHeatedPoolPrice.toLocaleString("tr-TR")} TL</p>
          )}
          <p style={{ fontSize: "20px", fontWeight: "700", marginTop: "20px" }}>
            Genel Toplam: {reservation.grandTotal.toLocaleString("tr-TR")} TL
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "14px", color: "#777" }}>
            Lütfen ödeme ve giriş işlemleri için size iletilen e-postayı kontrol ediniz.
          </p>
        </div>
      </div>
    </LightLayout>
  );
}