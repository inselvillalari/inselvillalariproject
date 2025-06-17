import React from "react";
import { useTranslation } from "next-i18next";
import BackButton from "../backButton";

const Activities = () => {
  const { t } = useTranslation("common");

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          {/* Başlık ve buton aynı hizada */}
          <div className="col-lg-6 col-md-8 col-sm-12 mb-4 d-flex align-items-center">
            <BackButton />
            <h4 style={{ fontWeight: "700", fontSize: "26px", margin: 0 }}>
              {t("aktiviteler")}
            </h4>
          </div>

          {/* İçerik */}
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="text">
              <p>{t("features.masaTenisi")}</p>
              <p>{t("features.bilardo")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
