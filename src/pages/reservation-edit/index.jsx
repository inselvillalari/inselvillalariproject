import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import withLoading from "../../common/withLoading";

function ReservationEdit() {
  const { t } = useTranslation("common");
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>{t("reservationEdit.calisma")}</h2>
        <p>{t("reservationEdit.aktifOlacak")}</p>
        <p>
          {t("reservationEdit.sorulariniz")}{" "}
          <a
            href="https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </a>{" "}
          {t("reservationEdit.ulasabilirsiniz")}
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default withLoading(ReservationEdit);
