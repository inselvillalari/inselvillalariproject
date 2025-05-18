/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head"; // ✅ SEO için eklenen satır
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
      {/* ✅ SEO bilgileri */}
      <Head>
        <title>
          Villa Capella | Capella | İnsel | İnsel Villaları | inselvillalari
        </title>
        <meta
          name="description"
          content="Villa Capella, lüks, özel havuzlu tatil villası. Capella, İnsel, İnsel Villaları, inselvillalari."
        />
        <meta
          name="keywords"
          content="Villa Capella, Capella, İnsel, İnsel Villaları, inselvillalari"
        />
      </Head>

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
