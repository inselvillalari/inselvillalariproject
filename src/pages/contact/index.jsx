import React from "react";
import { useEffect } from "react";
import PageHeader from "../../contact/PageHeader";
import ContactInfo from "../../contact/contactInfo";
import ContactWithMap from "../../contact/contactWithMap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import withLoading from "../../common/withLoading";

const Contact = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <PageHeader
        title={t("contact.ulasin")}
        fullPath={[
          { id: 1, name: t("navbar.anasayfa"), url: "/" },
          { id: 2, name: t("navbar.iletisim"), url: "/contact" },
        ]}
        image="/assets/img/slid/contact/4.jpeg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
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
export default withLoading(Contact);
