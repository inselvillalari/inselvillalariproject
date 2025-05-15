/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import { useTranslation } from "next-i18next";
import CapellaPage from "../../components/capella/CapellaPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

const Capella = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <WorkHeader
        title={{
          first: "VİLLA CAPELLA",
        }}
        content={t("capellaAciklama")}
      />
      <CapellaPage />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(Capella);
