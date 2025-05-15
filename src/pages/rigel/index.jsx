/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import RigelPage from "../../components/rigel/RigelPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import withLoading from "../../common/withLoading";
const Rigel = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <WorkHeader
        title={{
          first: "VİLLA RİGEL",
        }}
        content={t("rigelAciklama")}
      />
      <RigelPage />
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

export default withLoading(Rigel);
