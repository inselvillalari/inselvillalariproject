/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head"; // ✅ SEO için
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
      {/* ✅ SEO Head */}
      <Head>
        <title>Villa Rigel - İnsel Villaları</title>
        <meta
          name="description"
          content="Villa Rigel, Kalkan’da konforu ve şıklığı bir araya getiren, özel havuzlu lüks bir tatil villasıdır. Hemen rezervasyon yapın!"
        />
        <meta
          name="keywords"
          content="Villa Rigel, Kalkan tatil evi, özel havuzlu villa, şık villa, İnsel Villaları"
        />
        <meta
          property="og:title"
          content="Villa Rigel - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          property="og:description"
          content="Villa Rigel, özel havuzlu, ferah ve konforlu bir Kalkan tatil villasıdır."
        />
        <meta
          property="og:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/rigelHomePage.webp"
        />
        <meta property="og:url" content="https://inselvillalari.com/rigel" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Villa Rigel - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          name="twitter:description"
          content="Kalkan’da özel havuzlu, konforlu, ferah kiralık villa: Villa Rigel."
        />
        <meta
          name="twitter:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/rigelHomePage.webp"
        />
      </Head>

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
