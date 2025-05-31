import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { CheckCircleOutline, Print } from "@mui/icons-material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import withLoading from "../../common/withLoading";
import { resetReservationDetail } from "../../store/reservation/reducer";
import PageLoadingForRequest from "../../components/pageloadingForRequest";

function ReservationSuccess() {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const { reservationDetail, loading } = useSelector(
    (state) => state.reservation
  );
  const componentRef = useRef();

  useEffect(() => {
    const channel = new BroadcastChannel("calendar-update");
    channel.postMessage("refresh");
    channel.close();
  }, []);

  const formatTL = (value) =>
    value != null ? `${value.toLocaleString("tr-TR")} TL` : "-";

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("tr-TR") : "-";

  const formattedEntryDate = formatDate(reservationDetail?.entryDate);
  const formattedExitDate = formatDate(reservationDetail?.exitDate);

  if (!reservationDetail || Object.keys(reservationDetail).length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h6">{t("reservationSuccess.bilgiYok")}</Typography>
      </Box>
    );
  }

  if (loading) {
    return <PageLoadingForRequest />;
  }

  return (
    <>
      <Box
        sx={{ py: 10, px: 2, backgroundColor: "#f7f7f7", minHeight: "100vh" }}
      >
        <Box
          ref={componentRef}
          sx={{
            maxWidth: 800,
            mx: "auto",
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
          }}
        >
          <Box textAlign="center" mb={4}>
            <CheckCircleOutline sx={{ fontSize: 48, color: "#C8A97E" }} />
            <Typography variant="h5" fontWeight="bold" mt={2}>
              {t("reservationSuccess.basarili")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("reservationSuccess.kodunuz")}{" "}
              <strong style={{ color: "#C8A97E" }}>
                {reservationDetail?.reservationNumber || "RSV-XXXX-XXX"}
              </strong>
            </Typography>
          </Box>

          <Section title={t("reservationSuccess.villaBilgileri")}>
            <Info
              label={t("reservationSuccess.villa")}
              value={reservationDetail?.villa}
            />
            <Info
              label={t("reservationSuccess.girisTarihi")}
              value={formattedEntryDate}
            />
            <Info
              label={t("reservationSuccess.cikisTarihi")}
              value={formattedExitDate}
            />
            <Info
              label={t("reservationSuccess.toplamGece")}
              value={reservationDetail?.totalNights}
            />
            <Info
              label={t("reservationSuccess.isitmaliHavuz")}
              value={
                reservationDetail?.heatedPool
                  ? t("reservationSuccess.evet")
                  : t("reservationSuccess.hayir")
              }
            />
            <Info
              label={t("reservationSuccess.besikTalebi")}
              value={
                reservationDetail?.wantsCrib
                  ? t("reservationSuccess.evet")
                  : t("reservationSuccess.hayir")
              }
            />
          </Section>

          <Section title={t("reservationSuccess.kiralayanBilgileri")}>
            <Info
              label={t("reservationSuccess.ad")}
              value={reservationDetail?.name}
            />
            <Info
              label={t("reservationSuccess.soyad")}
              value={reservationDetail?.surname}
            />
            <Info
              label={t("reservationSuccess.kimlik")}
              value={reservationDetail?.identityNumber}
            />
            <Info
              label={t("reservationSuccess.email")}
              value={reservationDetail?.email}
            />
            <Info
              label={t("reservationSuccess.telefon")}
              value={reservationDetail?.gsmNumber}
            />
            <Info
              label={t("reservationSuccess.yetiskin")}
              value={reservationDetail?.adults}
            />
            <Info
              label={t("reservationSuccess.cocuk")}
              value={reservationDetail?.children}
            />
          </Section>

          {/* {Array.isArray(reservation?.extraAdults) &&
          reservation.extraAdults.length > 0 && (
            <Section title={t("reservationSuccess.ekYetiskin")}>
              {reservation.extraAdults.map((adult, index) => (
                <Info
                  key={index}
                  label={`${t("reservationSuccess.yetiskin")} ${index + 1}`}
                  value={`${adult.name || "-"}${
                    adult.age
                      ? ` (${adult.age} ${t("reservationSuccess.yasinda")})`
                      : ""
                  }`}
                />
              ))}
            </Section>
          )} */}
          {/* 
        {Array.isArray(reservation?.extraChildren) &&
          reservation.extraChildren.length > 0 && (
            <Section title={t("reservationSuccess.cocukBilgisi")}>
              {reservation.extraChildren.map((child, index) => (
                <Info
                  key={index}
                  label={`${t("reservationSuccess.cocuk")} ${index + 1}`}
                  value={`${child.name || "-"}${
                    child.age
                      ? ` (${child.age} ${t("reservationSuccess.yasinda")})`
                      : ""
                  }`}
                />
              ))}
            </Section>
          )} */}

          <Section title={t("reservationSuccess.odemeOzeti")}>
            <Info
              label={t("reservationSuccess.villaUcreti")}
              value={formatTL(reservationDetail?.totalVillaPrice)}
            />
            {reservationDetail?.heatedPool && (
              <Info
                label={t("reservationSuccess.havuzUcreti")}
                value={formatTL(reservationDetail?.totalHeatedPoolPrice)}
              />
            )}

            <Typography
              variant="h6"
              fontWeight="bold"
              color="#C8A97E"
              mt={2}
              mb={1}
            >
              {t("reservationSuccess.genelToplam")}:{" "}
              {formatTL(reservationDetail?.grandTotal)}
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={2}>
              {t("reservationSuccess.odemeAciklama")}
            </Typography>

            {reservationDetail?.heatedPool && (
              <Typography variant="body2" color="text.secondary" mt={1}>
                {t("reservationSuccess.havuzBilgisi")}
              </Typography>
            )}
          </Section>
        </Box>

        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            startIcon={<Print />}
            onClick={() => window.print()}
            sx={{
              backgroundColor: "#C8A97E",
              "&:hover": { backgroundColor: "#b2906c" },
              color: "#fff",
              px: 4,
              py: 1.5,
              fontWeight: "600",
            }}
          >
            {t("reservationSuccess.yazdir")}
          </Button>
        </Box>
      </Box>
    </>
  );
}

const Section = ({ title, children }) => (
  <Card variant="outlined" sx={{ mb: 3 }}>
    <CardContent>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const Info = ({ label, value }) => (
  <Grid container spacing={1} mb={0.5}>
    <Grid item xs={5} md={4}>
      <Typography variant="body2" fontWeight="500">
        {label}:
      </Typography>
    </Grid>
    <Grid item xs={7} md={8}>
      <Typography variant="body2">{value || "-"}</Typography>
    </Grid>
  </Grid>
);


export default withLoading(ReservationSuccess);
