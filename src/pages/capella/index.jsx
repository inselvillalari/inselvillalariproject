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
        <title>Villa Capella - İnsel Villaları</title>
        <meta
          name="description"
          content="Villa Capella, Kalkan’da deniz manzaralı, özel havuzlu ve jakuzili lüks bir tatil villasıdır. Hemen rezervasyon yapın!"
        />
        <meta
          name="keywords"
          content="Villa Capella, Kalkan lüks villa, deniz manzaralı villa, jakuzili villa, İnsel Villaları"
        />
        <meta
          property="og:title"
          content="Villa Capella - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          property="og:description"
          content="Villa Capella, deniz manzaralı, özel havuzlu ve jakuzili lüks bir tatil villasıdır."
        />
        <meta
          property="og:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/capellaHomePage.jpg"
        />
        <meta property="og:url" content="https://inselvillalari.com/capella" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Villa Capella - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          name="twitter:description"
          content="Kalkan'da jakuzili, özel havuzlu ve deniz manzaralı lüks villa: Villa Capella."
        />
        <meta
          name="twitter:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/capellaHomePage.jpg"
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
