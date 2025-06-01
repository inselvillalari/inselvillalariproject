import React, { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getReservationById } from "../../store/reservation/thunk";
import { resetReservationDetail } from "../../store/reservation/reducer";
import dayjs from "dayjs";
import LoadingButton from "@mui/lab/LoadingButton";

function ReservationLookupPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const { reservationDetail, loading } = useSelector(
    (state) => state.reservation
  );

  const [notFound, setNotFound] = useState(false);

  const [code, setCode] = useState("");

  const handleSearch = async () => {
    await dispatch(resetReservationDetail());
    await dispatch(getReservationById({ id: code, from: "lookup" })).then(
      (res) => {
        if (res?.meta?.requestStatus == "fulfilled") {
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      }
    );
  };

  useEffect(() => {
    return () => dispatch(resetReservationDetail());
  }, []);

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
          {t("reservationLookup.rezervasyonSorgulama")}
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
            {t("reservationLookup.rezervasyonKodu")}
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={t("reservationLookup.rezervasyonOrnek")}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
        </div>
        <LoadingButton
          onClick={() => code && handleSearch()}
          loading={loading}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#C8A97E",
            color: "white",
            fontWeight: 600,
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            padding: "10px",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: "#b2906c",
            },
          }}
        >
          {t("reservationLookup.sorgula")}
        </LoadingButton>

        {/* <button
          onClick={() => code && handleSearch()}
          type="submit"
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
          {t("reservationLookup.sorgula")}
        </button> */}

        {reservationDetail && (
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
              {t("reservationLookup.rezervasyonBilgileri")}
            </h3>
            <p>
              <strong>{t("reservationLookup.kod")}:</strong>{" "}
              {reservationDetail?.reservationNumber || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.villa")}:</strong>{" "}
              {reservationDetail?.villa || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.girisTarihi")}:</strong>{" "}
              {dayjs(reservationDetail?.entryDate, { utc: true }).format(
                "DD/MM/YYYY"
              ) || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.cikisTarihi")}:</strong>{" "}
              {dayjs(reservationDetail?.exitDate, { utc: true }).format(
                "DD/MM/YYYY"
              ) || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.toplamGece")}:</strong>{" "}
              {reservationDetail?.totalNights || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.isitmaliHavuz")}:</strong>{" "}
              {reservationDetail?.totalHeatedPoolPrice
                ? t("reservationLookup.evet")
                : t("reservationLookup.hayir")}
            </p>
            <p>
              <strong>{t("reservationLookup.besik")}:</strong>{" "}
              {reservationDetail?.wantsCrib
                ? t("reservationLookup.evet")
                : t("reservationLookup.hayir")}
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
              {t("reservationLookup.kiralayanBilgileri")}
            </h3>
            {/* <p>
              <strong>{t("reservationLookup.adSoyad")}:</strong>{" "}
              {reservationDetail?.name || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.kimlik")}:</strong>{" "}
              {reservationDetail?.identityNumber || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.email")}:</strong>{" "}
              {reservationDetail?.email || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.telefon")}:</strong>{" "}
              {reservationDetail?.gsmNumber || "-"}
            </p> */}
            <p>
              <strong>{t("reservationLookup.yetiskin")}:</strong>{" "}
              {reservationDetail?.adults || "-"}
            </p>
            <p>
              <strong>{t("reservationLookup.cocuk")}:</strong>{" "}
              {reservationDetail?.children || "-"}
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
              {t("reservationLookup.odeme")}
            </h3>
            <p>
              <strong>{t("reservationLookup.toplamUcret")}:</strong>{" "}
              {reservationDetail?.price.toLocaleString("tr-TR")} TL
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
                }}
              >
                {t("reservationLookup.iptalEt")}
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
                }}
              >
                {t("reservationLookup.degistir")}
              </a>
            </div>
          </div>
        )}

        {notFound && (
          <p style={{ color: "red", marginTop: "24px", textAlign: "center" }}>
            {t("reservationLookup.bulunamadi")}
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
