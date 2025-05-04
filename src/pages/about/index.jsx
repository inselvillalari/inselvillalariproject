import React from "react";
import Head from "next/head";
import LightLayout from "../layout/LightLayout";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../utils/withTranslation";

export default function About() {
  const { t } = useTranslation("common");
  return (
    <LightLayout>
      <div
        className="container"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <>
          <Head>
            <title>Hakkımızda | IN-SEL Villaları</title>
          </Head>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "3rem 1rem",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
              {t("about.aciklama1")}
            </h1>
            <p className="section-description">{t("about.aciklama2")}</p>

            <p className="section-description">{t("about.aciklama3")}</p>

            <p className="section-description">{t("about.aciklama4")}</p>

            <p className="section-description">
              {t("about.aciklama5")}
              <strong>info@inselvillalari.com</strong> –{" "}
              <strong>+90 532 490 53 07</strong>
            </p>
          </div>
        </>
      </div>
    </LightLayout>
  );
}
export const getStaticProps = withTranslationProps(["common"]);
