/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import GrediPage from "../../gredi/GrediPage";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../utils/withTranslation";

const Gredi = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA GREDI",
        }}
        content={t("grediAciklama")}
      />
      <GrediPage />
    </MainLayout>
  );
};
export const getStaticProps = withTranslationProps();
export default Gredi;
