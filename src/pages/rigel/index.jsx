/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import RigelPage from "../../components/rigel/RigelPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Rigel = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA RIGEL",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content={t("rigelAciklama")}
      />
      <RigelPage />
    </MainLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Rigel;
