/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head"; // ✅ SEO için
import WorkHeader from "../../components/Work-header";
import AgenaPage from "../../components/agena/AgenaPage";
import { useTranslation } from "next-i18next";
import { withTranslationProps } from "../../utils/withTranslation";
import withLoading from "../../common/withLoading";

const Agena = () => {
  const { t } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
  }, []);

  return (
    <>
      {/* ✅ SEO Head */}
      <Head>
        <title>
          Villa Agena
        </title>
        <meta
          name="description"
          content="Villa Agena, doğa ile iç içe, özel havuzlu tatil villası. Agena, İnsel, İnsel Villaları, inselvillalari."
        />
        <meta
          name="keywords"
          content="Villa Agena, Agena, İnsel, İnsel Villaları, inselvillalari"
        />
      </Head>

      <WorkHeader
        title={{
          first: "VİLLA AGENA",
        }}
        content={t("agenaAciklama")}
      />
      <AgenaPage />
    </>
  );
};

export const getStaticProps = withTranslationProps();

export default withLoading(Agena);
