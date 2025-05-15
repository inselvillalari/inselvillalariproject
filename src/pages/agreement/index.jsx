import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import withLoading from "../../common/withLoading";

const Agreement = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div
        style={{
          padding: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          {t("distanceContract.title")}
        </h1>

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.definitionsTitle")}
        </h2>

        <p>{t("distanceContract.definitionsIntro")}</p>
        <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          <li>{t("distanceContract.contract")}</li>
          <li>{t("distanceContract.tenant")}</li>
          <li>{t("distanceContract.landlord")}</li>
          <li>
            <span
              dangerouslySetInnerHTML={{
                __html: t("distanceContract.property"),
              }}
            />
          </li>
          <li>{t("distanceContract.rentalPeriod")}</li>
          <li>{t("distanceContract.rentalFee")}</li>
          <li>{t("distanceContract.tbk")}</li>
          <li>{t("distanceContract.kvkk")}</li>
        </ul>
        <p>{t("distanceContract.establishment")}</p>

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.startTitle")}
        </h2>
        <p>{t("distanceContract.startIntro")}</p>
        <p>{t("distanceContract.startDetails")}</p>

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.reservationTitle")}
        </h2>
        <p>{t("distanceContract.reservationIntro1")}</p>
        <p>{t("distanceContract.reservationIntro2")}</p>
        <p>{t("distanceContract.reservationIntro3")}</p>
        <p>{t("distanceContract.reservationIntro4")}</p>
        <p>{t("distanceContract.reservationIntro5")}</p>
        <p>{t("distanceContract.reservationIntro6")}</p>

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.deliveryTitle")}
        </h2>
        <p>{t("distanceContract.deliveryIntro1")}</p>
        <p>{t("distanceContract.deliveryIntro2")}</p>
        <p>{t("distanceContract.deliveryIntro3")}</p>
        <p>{t("distanceContract.deliveryIntro4")}</p>

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.tenantRightsTitle")}
        </h2>
        {[...Array(14)].map((_, i) => (
          <p key={i}>{t(`distanceContract.tenantIntro${i + 1}`)}</p>
        ))}

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.landlordRightsTitle")}
        </h2>
        {[...Array(7)].map((_, i) => (
          <p key={i}>{t(`distanceContract.landlordIntro${i + 1}`)}</p>
        ))}

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.terminationTitle")}
        </h2>
        {[...Array(6)].map((_, i) => (
          <p key={i}>{t(`distanceContract.terminationIntro${i + 1}`)}</p>
        ))}

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #C8A97E",
          }}
        >
          {t("distanceContract.generalTitle")}
        </h2>
        {[...Array(10)].map((_, i) => (
          <p key={i}>{t(`distanceContract.generalIntro${i + 1}`)}</p>
        ))}
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

export default withLoading(Agreement);
