import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import withLoading from "../../common/withLoading";

const LegalInfo = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div
        style={{
          padding: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "15px",
          lineHeight: "1.8",
          color: "#333",
        }}
      >
        <Head>
          <title>{`${t("legalInfo.title")} | IN-SEL Villaları`}</title>
        </Head>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
          <h2
            className="custom-font text-uppercase mb-30"
            style={{ fontSize: "28px", fontWeight: "600" }}
          >
            {t("legalInfo.title")}
          </h2>
          <p className="mb-40">{t("legalInfo.intro")}</p>

          <h5 className="mb-20" style={{ fontWeight: "600" }}>
            {t("legalInfo.companyTitle")}
          </h5>
          <p>
            <strong>{t("legalInfo.tradeName")}: </strong>İN-SEL İNŞAAT MİMARLIK
            TURİZM NAKLİYAT TİCARET LİMİTED ŞİRKETİ
          </p>
          <p>
            <strong>{t("legalInfo.mersisNo")}: </strong>0474006793500016
          </p>
          <p>
            <strong>{t("legalInfo.headOffice")}: </strong>Soğuksu Mah. 308 Sk.
            Adabel Sitesi No: 42 İç Kapı No: 38, Muratpaşa / Antalya
          </p>
          <p>
            <strong>{t("legalInfo.taxOffice")}: </strong>Antalya Kurumlar –
            4740067935
          </p>
          <p>
            <strong>{t("legalInfo.kep")}: </strong>info@ilba.com.tr
          </p>

          <h5 className="mt-40 mb-20" style={{ fontWeight: "600" }}>
            {t("legalInfo.ethicsTitle")}
          </h5>
          <p>
            <strong>{t("legalInfo.chamber")}</strong>
          </p>
          <p>
            <strong>{t("legalInfo.rules")}: </strong>
            {t("legalInfo.rulesNote")}
          </p>

          <h5 className="mt-40 mb-20" style={{ fontWeight: "600" }}>
            {t("legalInfo.contactTitle")}
          </h5>
          <p>{t("legalInfo.contactNote")}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(LegalInfo);
