/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import AgenaPage from "../../agena/AgenaPage";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../utils/withTranslation";

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

export const getStaticProps = withTranslationProps();

export default Agena;
