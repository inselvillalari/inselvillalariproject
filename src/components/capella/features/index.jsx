import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const featureList = [
  "onKisilik",
  "ozelHavuz",
  "besBir",
  "wifi",
  "bilardo",
  "bbq",
  "jakuzi",
  "otopark",
  "tv",
  "ps5",
  "gorevli",
  "kamera",
  "masaTenisi",
  "mobilyali",
  "bebekYatagi",
  "teras",
  "havuzBakim",
  "oyunAlani",
  "alarm",
  "sarj",
];

const beyazEsyaItems = [
  "buzdolabi",
  "camasirMakinesi",
  "bulasikMakinesi",
  "ankastreOcak",
  "firin",
  "mikrodalga",
  "klima",
];

const kucukEvAletleriItems = [
  "kapsulKahve",
  "turkKahvesi",
  "cayMakinesi",
  "kettle",
  "utu",
  "sarikSupurge",
  "tostMakinesi",
  "sacKurutma",
];

const boxStyle = {
  padding: "16px 20px",
  background: "#fbf9f6",
  borderRadius: "10px",
  borderLeft: "8px solid #d4c3ac",
  fontSize: "16px",
  fontFamily: "Jost, sans-serif",
  color: "#111",
  flex: "1 1 calc(25% - 20px)",
  minWidth: "220px",
  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
};

const accordionBoxStyle = {
  ...boxStyle,
  flex: "1 1 calc(50% - 20px)",
  padding: 0,
  overflow: "hidden",
};

const CapellaFeatures = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(null); // "beyaz" | "kucuk" | null

  return (
    <section style={{ padding: "80px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "Jost, sans-serif",
            fontSize: "50px",
            letterSpacing: "4px",
            marginBottom: "30px",
            fontWeight: "600",
          }}
        >
          {t("features.ozellikler")}
          <span
            style={{
              display: "block",
              width: "60px",
              height: "3px",
              background: "#d4c3ac",
              margin: "12px auto 0",
              borderRadius: "2px",
            }}
          />
        </h3>

        {/* İlk 12 */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {featureList.slice(0, 12).map((key) => (
            <div key={key} style={boxStyle}>
              {t(`features.${key}`)}
            </div>
          ))}
        </div>

        {/* Accordionlar alt alta sıralı */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // ⬅️ Değişiklik burada
            gap: "20px",
            margin: "30px 0",
          }}
        >
          {/* Beyaz Eşyalar */}
          <Accordion
            expanded={open === "beyaz"}
            disableGutters
            square
            elevation={0}
            style={{ ...accordionBoxStyle, flex: "unset" }} // ⬅️ Genişlik kısıtlaması kaldırıldı
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={() => setOpen(open === "beyaz" ? null : "beyaz")}
              style={{
                outline: "none",
                boxShadow: "none",
              }}
            >
              <strong>{t("features.beyazEsyaDetay")}</strong>
            </AccordionSummary>
            {open === "beyaz" && (
              <AccordionDetails>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {beyazEsyaItems.map((key, i) => (
                    <li
                      key={key}
                      style={{
                        padding: "6px 0",
                        borderBottom:
                          i < beyazEsyaItems.length - 1
                            ? "1px solid #e0ddd7"
                            : "none",
                      }}
                    >
                      {t(`features.${key}`)}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            )}
          </Accordion>

          {/* Küçük Ev Aletleri */}
          <Accordion
            expanded={open === "kucuk"}
            disableGutters
            square
            elevation={0}
            style={{ ...accordionBoxStyle, flex: "unset" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={() => setOpen(open === "kucuk" ? null : "kucuk")}
              style={{
                outline: "none",
                boxShadow: "none",
              }}
            >
              <strong>{t("features.kucukEvAletleriDetay")}</strong>
            </AccordionSummary>
            {open === "kucuk" && (
              <AccordionDetails>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {kucukEvAletleriItems.map((key, i) => (
                    <li
                      key={key}
                      style={{
                        padding: "6px 0",
                        borderBottom:
                          i < kucukEvAletleriItems.length - 1
                            ? "1px solid #e0ddd7"
                            : "none",
                      }}
                    >
                      {t(`features.${key}`)}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            )}
          </Accordion>
        </div>

        {/* Son 8 */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {featureList.slice(12).map((key) => (
            <div key={key} style={boxStyle}>
              {t(`features.${key}`)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapellaFeatures;
