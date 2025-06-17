import React from "react";
import { useTranslation } from "next-i18next";
import BackButton from "../backButton";

const NightInsideViews = () => {
  const { t } = useTranslation("common");

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          {/* Ok ikonlu buton + başlık hizalı */}
          <div className="col-lg-6 col-md-8 col-sm-12 mb-4 d-flex align-items-center">
            <BackButton />
            <h4 style={{ fontWeight: "700", fontSize: "26px", margin: 0 }}>
              {t("geceIcMekanGorunumu")}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NightInsideViews;
