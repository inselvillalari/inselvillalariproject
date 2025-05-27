/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Head from "next/head";
import WorkHeader from "../../components/Work-header";
import AgenaPage from "../../components/agena/AgenaPage";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../utils/withTranslation";
import withLoading from "../../common/withLoading";

const Agena = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
  }, []);

  return (
    <>
      {/* ✅ SEO Head */}
      <Head>
        <title>Villa Agena - İnsel Villaları</title>
        <meta
          name="description"
          content="Villa Agena, Kalkan'da yer alan, özel havuzlu, doğayla iç içe ve oyun odalı lüks tatil villasıdır. Hemen rezervasyon yapın!"
        />
        <meta
          name="keywords"
          content="Villa Agena, Kalkan villa kiralama, özel havuzlu villa, lüks tatil villası, İnsel Villaları"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Villa Agena - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          property="og:description"
          content="Villa Agena, özel havuzu ve doğayla iç içe konumuyla Kalkan'da unutulmaz bir tatil deneyimi sunuyor."
        />
        <meta
          property="og:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/agenaHomePage.webp"
        />
        <meta property="og:url" content="https://inselvillalari.com/agena" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Villa Agena - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          name="twitter:description"
          content="Kalkan'da özel havuzlu ve doğa manzaralı lüks tatil villası: Villa Agena. Detaylı bilgi ve rezervasyon için tıklayın."
        />
        <meta
          name="twitter:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/agenaHomePage.webp"
        />
      </Head>

      <WorkHeader
        title={{ first: "VİLLA AGENA" }}
        content={t("agenaAciklama")}
      />
      <AgenaPage />
    </>
  );
};

export const getStaticProps = withTranslationProps();

export default withLoading(Agena);
