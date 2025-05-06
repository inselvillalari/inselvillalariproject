import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const PageLoading = () => {
  const { loading } = useSelector((state) => state.general);
  const [visible, setVisible] = useState(false);
  const [internalLoading, setInternalLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let delayTimeout;
    let cleanupTimeout;

    if (loading) {
      setInternalLoading(true);
      setVisible(true);
    } else {
      delayTimeout = setTimeout(() => {
        setVisible(false);
        cleanupTimeout = setTimeout(() => {
          setInternalLoading(false);
        }, 300);
      }, 500);
    }

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(cleanupTimeout);
    };
  }, [loading]);

  if (!internalLoading) return null;

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
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: visible ? "all" : "none",
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
