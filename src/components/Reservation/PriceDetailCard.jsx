// ✅ PriceDetailCard.js (Formik yerine sadece Redux kullanır, hatasız ve kontrollü)
import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setReservationData } from "../../store/reservation";
import dayjs from "dayjs";
import villaPrices from "./villaPrices";
import { useTranslation } from "next-i18next";
import { setReservationData } from "../../store/reservation/reducer";

export default function PriceDetailCard() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { reservationData } = useSelector((state) => state.reservation);

  const { villa, entryDate, exitDate, heatedPool } = reservationData;

  const result = useMemo(() => {
    if (!villa || !entryDate || !exitDate) return null;

    const start = dayjs(new Date(entryDate));
    const end = dayjs(new Date(exitDate));
    const dayDiff = end.diff(start, "day");

    if (dayDiff <= 0) return null;

    let totalVillaPrice = 0;
    let totalHeatedPoolPrice = 0;

    if (villa !== "Villa Gredi" && villa !== "Villa Agena" && heatedPool) {
      totalHeatedPoolPrice = dayDiff * 1800;
    }

    const pricePeriods = villaPrices?.[villa] || [];

    for (let d = 0; d < dayDiff; d++) {
      const currentDay = start?.add(d, "day");
      const currentDate = currentDay?.format("YYYY-MM-DD");

      const period = pricePeriods.find(
        (p) => currentDate >= p?.start && currentDate <= p.end
      );
      if (period) {
        totalVillaPrice += period?.price;
      }
    }

    const grandTotal = totalVillaPrice + totalHeatedPoolPrice;
    const upfront = Math?.round(grandTotal * 0.4);
    const remaining = grandTotal - upfront;

    return {
      dayCount: dayDiff,
      villaPrice: totalVillaPrice,
      heatedPoolPrice: totalHeatedPoolPrice,
      grandTotal,
      upfront,
      remaining,
    };
  }, [villa, entryDate, exitDate, heatedPool]);

  useEffect(() => {
    if (result) {
      dispatch(
        setReservationData({
          ...reservationData,
          totalVillaPrice: result?.villaPrice,
          totalHeatedPoolPrice: result?.heatedPoolPrice,
          grandTotal: result?.grandTotal,
          totalNights: result?.dayCount,
          price: result?.upfront,
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
        minHeight: "400px",
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
        {t("reservationPriceCard.fiyatDetayi")}
      </h3>

      {!result ? (
        <div style={{ fontSize: "14px", textAlign: "center", color: "#999" }}>
          {t("reservationPriceCard.secin")}
        </div>
      ) : (
        <>
          <div style={{ fontSize: "14px", marginBottom: "12px" }}>
            <strong> {t("reservationPriceCard.secilen")}</strong> {villa}
          </div>
          <div style={{ fontSize: "14px", marginBottom: "12px" }}>
            <strong> {t("reservationPriceCard.gece")}</strong> {result.dayCount}{" "}
            {t("reservationPriceCard.geceSayisi")}
          </div>
          <div style={{ fontSize: "14px", marginBottom: "12px" }}>
            <strong> {t("reservationPriceCard.ucret")}</strong>{" "}
            {result?.villaPrice?.toLocaleString("tr-TR")} TL
          </div>
          {heatedPool && result.heatedPoolPrice !== 0 && (
            <div style={{ fontSize: "14px", marginBottom: "12px" }}>
              <strong>{t("reservationPriceCard.isitmali")}</strong>{" "}
              {result?.heatedPoolPrice?.toLocaleString("tr-TR")} TL
            </div>
          )}
          <hr style={{ margin: "20px 0", borderTop: "1px solid #ddd" }} />
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "center",
              color: "#C8A97E",
              marginBottom: "12px",
            }}
          >
            {t("reservationPriceCard.toplam")}{" "}
            {result?.grandTotal?.toLocaleString("tr-TR")} TL
          </div>

          <div
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginBottom: "4px",
              color: "#444",
            }}
          >
            %40 {t("reservationPriceCard.siteUzerinden")}:{" "}
            <strong>{result?.upfront?.toLocaleString("tr-TR")} TL</strong>
          </div>
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "#777",
              marginBottom: "12px",
            }}
          >
            {t("reservationPriceCard.siteUzerindenAciklama")}
          </p>

          <div
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginBottom: "12px",
              color: "#444",
            }}
          >
            %60 {t("reservationPriceCard.giristeOdeme")}:{" "}
            <strong>{result?.remaining?.toLocaleString("tr-TR")} TL</strong>
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
              {t("reservationPriceCard.depozito")}
            </p>
            <p style={{ fontSize: "12px", color: "#777" }}>
              {t("reservationPriceCard.depozitoTahsili")}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
