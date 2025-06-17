import React from "react";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Geri Dön"
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        marginRight: "12px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        color: "#333",
      }}
    >
      <ArrowBackIcon fontSize="medium" />
    </button>
  );
};

export default BackButton;
