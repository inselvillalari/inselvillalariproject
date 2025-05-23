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
        <title>
          Villa Rigel
        </title>
        <meta
          name="description"
          content="Villa Rigel, panoramik manzaralı, özel havuzlu tatil villası. Rigel, İnsel, İnsel Villaları, inselvillalari."
        />
        <meta
          name="keywords"
          content="Villa Rigel, Rigel, İnsel, İnsel Villaları, inselvillalari"
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
