/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GrediPage from "../../components/gredi/GrediPage";
import withLoading from "../../common/withLoading";

const Gredi = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <WorkHeader
        title={{
          first: "VİLLA GREDI",
        }}
        content={t("grediAciklama")}
      />
      <GrediPage />
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
export default withLoading(Gredi);
