/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head"; // ✅ SEO için eklendi
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
      {/* ✅ SEO Head */}
      <Head>
        <title>Villa Gredi - İnsel Villaları</title>
        <meta
          name="description"
          content="Villa Gredi, modern mimarisi ve özel havuzu ile Kalkan'da unutulmaz bir tatil sunar. Hemen rezervasyon yapın!"
        />
        <meta
          name="keywords"
          content="Villa Gredi, Kalkan modern villa, özel havuzlu villa, tatil evi, İnsel Villaları"
        />
        <meta
          property="og:title"
          content="Villa Gredi - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          property="og:description"
          content="Villa Gredi, modern tasarımı ve özel havuzuyla Kalkan’da mükemmel bir tatil villasıdır."
        />
        <meta
          property="og:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/grediHomePage.webp"
        />
        <meta property="og:url" content="https://inselvillalari.com/gredi" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Villa Gredi - Kalkan’da Lüks Tatil Villası"
        />
        <meta
          name="twitter:description"
          content="Modern tasarımlı, özel havuzlu, lüks kiralık villa: Villa Gredi."
        />
        <meta
          name="twitter:image"
          content="https://inselvillalari.com/assets/img/slid/homePage/grediHomePage.webp"
        />
      </Head>

      <WorkHeader
        title={{
          first: "VİLLA GREDİ",
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
