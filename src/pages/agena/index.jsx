/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import AgenaPage from "../../agena/AgenaPage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Agena = () => {
  const { t } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA AGENA",
        }}
        content={t("agenaAciklama")}
      />
      <AgenaPage />
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

export default Agena;
