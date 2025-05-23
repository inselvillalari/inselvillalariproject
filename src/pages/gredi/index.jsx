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
        <title>
          Villa Gredi
        </title>
        <meta
          name="description"
          content="Villa Gredi, modern ve konforlu, özel havuzlu tatil villası. Gredi, İnsel, İnsel Villaları, inselvillalari."
        />
        <meta
          name="keywords"
          content="Villa Gredi, Gredi, İnsel, İnsel Villaları, inselvillalari"
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
