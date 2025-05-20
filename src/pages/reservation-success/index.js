import React, { useRef } from "react";
import { useSelector } from "react-redux";
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
import withLoading from "../../common/withLoading";

function ReservationSuccess() {
  const reservation = useSelector((state) => state.reservation);
  const componentRef = useRef();

  if (!reservation || Object.keys(reservation).length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h6">Rezervasyon bilgisi bulunamadı.</Typography>
      </Box>
    );
  }

  const formatTL = (value) =>
    value != null ? `${value.toLocaleString("tr-TR")} TL` : "-";

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("tr-TR") : "-";

  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
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
            Rezervasyon Başarılı
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rezervasyon Numaranız:{" "}
            <strong style={{ color: "#C8A97E" }}>
              {reservation?.code || "RSV-XXXX-XXX"}
            </strong>
          </Typography>
        </Box>

        <Section title="Villa Bilgileri">
          <Info label="Villa" value={reservation?.villa} />
          <Info
            label="Giriş Tarihi"
            value={formatDate(reservation?.entryDate)}
          />
          <Info
            label="Çıkış Tarihi"
            value={formatDate(reservation?.exitDate)}
          />
          <Info label="Toplam Gece" value={reservation?.totalNights} />
          <Info
            label="Isıtmalı Havuz"
            value={reservation?.heatedPool ? "Evet" : "Hayır"}
          />
          <Info
            label="Beşik Talebi"
            value={reservation?.wantsCrib ? "Evet" : "Hayır"}
          />
        </Section>

        <Section title="Kiralayan Bilgileri">
          <Info label="Ad Soyad" value={reservation?.hirerName} />
          <Info
            label="Kimlik / Pasaport No"
            value={reservation?.hirerIdNumber}
          />
          <Info label="Email" value={reservation?.email} />
          <Info label="Telefon" value={reservation?.phone} />
          <Info label="Yetişkin" value={reservation?.adults} />
          <Info label="Çocuk" value={reservation?.children} />
        </Section>

        {Array.isArray(reservation?.extraAdults) &&
          reservation.extraAdults.length > 0 && (
            <Section title="Ek Yetişkin Bilgileri">
              {reservation.extraAdults.map((adult, index) => (
                <Info
                  key={index}
                  label={`Yetişkin ${index + 1}`}
                  value={`${adult.name || "-"}${
                    adult.age ? ` (${adult.age} yaşında)` : ""
                  }`}
                />
              ))}
            </Section>
          )}

        {Array.isArray(reservation?.extraChildren) &&
          reservation.extraChildren.length > 0 && (
            <Section title="Çocuk Bilgileri">
              {reservation.extraChildren.map((child, index) => (
                <Info
                  key={index}
                  label={`Çocuk ${index + 1}`}
                  value={`${child.name || "-"}${
                    child.age ? ` (${child.age} yaşında)` : ""
                  }`}
                />
              ))}
            </Section>
          )}

        <Section title="Ödeme Özeti">
          <Info
            label="Villa Ücreti"
            value={formatTL(reservation?.totalVillaPrice)}
          />
          {reservation?.heatedPool && (
            <Info
              label="Isıtmalı Havuz Ücreti"
              value={formatTL(reservation?.totalHeatedPoolPrice)}
            />
          )}
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#C8A97E"
            mt={2}
            mb={1}
          >
            Genel Toplam: {formatTL(reservation?.grandTotal)}
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={2}>
            Toplam tutarın <strong>%30'u</strong> online ödeme olarak
            alınmıştır. Kalan bakiye, giriş esnasında banka aracılığıyla tahsil
            edilecektir. Depozito girişte banka yoluyla ödenecek. Çıkışta
            kontroller yapıldıktan sonra banka aracılığıyla iade edilecektir.
          </Typography>
          {reservation?.heatedPool && (
            <Typography variant="body2" color="text.secondary" mt={1}>
              Isıtmalı havuz tercihiniz doğrultusunda <strong>ek ücret</strong>{" "}
              fiyata dahil edilmiştir.
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
          Sayfayı Yazdır
        </Button>
      </Box>
    </Box>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(ReservationSuccess);
