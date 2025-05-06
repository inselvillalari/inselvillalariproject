import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const PageLoading = () => {
  const { loading } = useSelector((state) => state.general);
  const { t } = useTranslation();

  if (!loading) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 13000,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "opacity 0.3s ease",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "6px",
          marginBottom: "32px",
          color: "#c5a47e",
          fontFamily: '"Teko", sans-serif',
          fontSize: "1.75rem",
          zIndex: 9999,
        }}
      >
        {t("loadingText")}
      </Typography>

      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: "#000000",
        }}
      />
    </Box>
  );
};

export default PageLoading;
