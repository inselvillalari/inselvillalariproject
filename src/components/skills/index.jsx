import React from "react";
import skillsProgress from "./skillsProgress";
import { useTranslation } from "next-i18next";

const Skills = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div
      className="skills-sec section-padding pt-100"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="container">
        <div className="section-head">
          <h3>{t("skills.konum")}</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 valign  md-mb50">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>{t("skills.merkez")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="65%"
                    data-name="1 km"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>{t("skills.miniMarket")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="45%"
                    data-name="300 m"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>{t("skills.otobusDuraklari")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="55%"
                    data-name="700 m"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>{t("skills.dalamanHavalimani")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="80%"
                    data-name="120 km"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>{t("skills.hastane")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="65%"
                    data-name="1 km"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>{t("skills.deniz")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="65%"
                    data-name="1 km"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>{t("skills.restoran")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="45%"
                    data-name="300 m"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>{t("skills.antalyaHavalimani")}</h6>
                <div className="skill-progress">
                  <div
                    className="progres custom-font"
                    data-value="100%"
                    data-name="220 km"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
