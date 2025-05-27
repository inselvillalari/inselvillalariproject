import React from "react";
import { useRouter } from "next/router";
import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

function ReservationFailed({ errorMessage }) {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 8,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 4,
          p: 5,
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <HighlightOff sx={{ fontSize: 60, color: "#C8A97E", mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {t("reservationFailed.basarisiz")}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          {t("reservationFailed.aciklama")}
        </Typography>

        {/* Buraya özel hata mesajı gelecek */}
        {errorMessage && (
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: "#b00020",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            {errorMessage}
          </Typography>
        )}

        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={() => router.push("/")}
            sx={{
              backgroundColor: "#C8A97E",
              "&:hover": { backgroundColor: "#b2906c" },
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.2,
            }}
          >
            {t("reservationFailed.anasayfa")}
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push("/reservation")}
            sx={{
              borderColor: "#C8A97E",
              color: "#C8A97E",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              "&:hover": {
                borderColor: "#b2906c",
                backgroundColor: "#f9f3ed",
              },
            }}
          >
            {t("reservationFailed.rezervasyonaDon")}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

// Eğer server-side veya getStaticProps'tan mesaj almayacaksan kaldırılabilir
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(ReservationFailed);
