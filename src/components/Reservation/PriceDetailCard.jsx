// ✅ PriceDetailCard.js (Formik yerine sadece Redux kullanır, hatasız ve kontrollü)
import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReservationData } from "../../store/reservationSlice";
import dayjs from "dayjs";
import villaPrices from "./villaPrices";

export default function PriceDetailCard() {
  const dispatch = useDispatch();
  const { villa, entryDate, exitDate, heatedPool } = useSelector(
    (state) => state.reservation
  );

  const result = useMemo(() => {
    if (!villa || !entryDate || !exitDate) return null;

    const start = dayjs(new Date(entryDate));
    const end = dayjs(new Date(exitDate));
    const dayDiff = end.diff(start, "day");

    if (dayDiff <= 0) return null;

    let totalVillaPrice = 0;
    let totalHeatedPoolPrice = heatedPool ? dayDiff * 1800 : 0;

    const pricePeriods = villaPrices?.[villa] || [];

    for (let d = 0; d < dayDiff; d++) {
      const currentDay = start.add(d, "day");
      const currentDate = currentDay.format("YYYY-MM-DD");

      const period = pricePeriods.find(
        (p) => currentDate >= p.start && currentDate <= p.end
      );
      if (period) {
        totalVillaPrice += period.price;
      }
    }

    return {
      dayCount: dayDiff,
      villaPrice: totalVillaPrice,
      heatedPoolPrice: totalHeatedPoolPrice,
      grandTotal: totalVillaPrice + totalHeatedPoolPrice,
    };
  }, [villa, entryDate, exitDate, heatedPool]);

  useEffect(() => {
    if (result) {
      dispatch(
        setReservationData({
          totalVillaPrice: result.villaPrice,
          totalHeatedPoolPrice: result.heatedPoolPrice,
          grandTotal: result.grandTotal,
          totalNights: result.dayCount,
        })
      );
    }
  }, [result]);

  return (
    <div
      style={{
        background: "#fafafa",
        borderRadius: "10px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        minHeight: "320px",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        lineHeight: "1.7",
      }}
    >
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "20px",
          textAlign: "center",
          borderBottom: "2px solid #C8A97E",
          paddingBottom: "10px",
        }}
      >
        Fiyat Detayı
      </h3>

      {!result ? (
        <div style={{ fontSize: "14px", textAlign: "center", color: "#999" }}>
          Lütfen villa ve tarih seçiniz.
        </div>
      ) : (
        <>
          <div style={{ fontSize: "14px", marginBottom: "12px" }}>
            <strong>Seçilen Villa:</strong> {villa}
          </div>
          <div style={{ fontSize: "14px", marginBottom: "12px" }}>
            <strong>Toplam Gece:</strong> {result.dayCount} gece
          </div>
          <div style={{ fontSize: "14px", marginBottom: "12px" }}>
            <strong>Villa Toplam Ücreti:</strong>{" "}
            {result.villaPrice.toLocaleString("tr-TR")} TL
          </div>
          {heatedPool && (
            <div style={{ fontSize: "14px", marginBottom: "12px" }}>
              <strong>Isıtmalı Havuz Ücreti:</strong>{" "}
              {result.heatedPoolPrice.toLocaleString("tr-TR")} TL
            </div>
          )}
          <hr style={{ margin: "20px 0", borderTop: "1px solid #ddd" }} />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "center",
              color: "#C8A97E",
              marginBottom: "20px",
            }}
          >
            Genel Toplam: {result.grandTotal.toLocaleString("tr-TR")} TL
          </div>

          <div
            style={{
              marginTop: "10px",
              padding: "12px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              textAlign: "center",
              border: "1px dashed #C8A97E",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#C8A97E",
                marginBottom: "6px",
              }}
            >
              Depozito: 15.000 TL
            </p>
            <p style={{ fontSize: "12px", color: "#777" }}>
              Depozito giriş sırasında ayrıca tahsil edilecektir.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
