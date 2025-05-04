/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const AboutUs = () => {
  const { t } = useTranslation("common");

  const titleFirst = t("aboutUsHomePage.kalkan");
  const titleSecond = t("aboutUsHomePage.kiziltas");
  const content = t("aboutUsHomePage.aboutUsYazi");
  const villaNames = ["Agena", "Capella", "Gredi", "Rigel"];

  return (
    <section
      className="about section-padding"
      style={{ backgroundColor: "#EFFAFA" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title">{t("aboutUsHomePage.konum")}</h6>
              <h2 className="mb-20 playfont">
                {titleFirst} <br /> {titleSecond}
              </h2>
              <p>{content}</p>
              <ul>
                {villaNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4 mb-20">
                  <div
                    className="pattern bg-img bg-repeat"
                    style={{
                      backgroundImage: `url(/assets/img/line-pattern.png)`,
                    }}
                  ></div>
                </div>
                <div className="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img mb-20 wow imago">
                    <img src="/assets/img/slid/aboutUs/1.jpeg" alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img src="/assets/img/slid/aboutUs/2.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
