import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../utils/withTranslation";
import withLoading from "../../common/withLoading";

function About() {
  const { t } = useTranslation("common");
  return (
    <div
      className="container"
      style={{ marginTop: "150px", marginBottom: "150px" }}
    >
      <>
        <Head>
          <title>Hakkımızda | IN-SEL Villaları</title>
        </Head>
        <div className="d-flex justify-content-center align-items-center">
          <img
            alt=""
            src="/assets/img/favicon.png"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
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
            <br />
            <strong>info@inselvillalari.com</strong> –{" "}
            <strong>+90 532 490 53 07</strong>
          </p>
        </div>
      </>
    </div>
  );
}
export const getStaticProps = withTranslationProps(["common"]);

export default withLoading(About);
