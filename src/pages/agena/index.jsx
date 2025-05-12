/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import AgenaPage from "../../components/agena/AgenaPage";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../utils/withTranslation";
import withLoading from "../../common/withLoading";

const Agena = () => {
  const { t } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
  }, []);

  return (
    <>
      <WorkHeader
        title={{
          first: "VİLLA AGENA",
        }}
        content={t("agenaAciklama")}
      />
      <AgenaPage />
    </>
  );
};

export const getStaticProps = withTranslationProps();

export default withLoading(Agena);
