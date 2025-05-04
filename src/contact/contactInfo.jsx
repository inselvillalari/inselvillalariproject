import React from "react";
import { useTranslation } from "next-i18next";

const ContactInfo = () => {
  const { t } = useTranslation("common");
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">{t("contact.arayin")}</h6>
                <p>+90 (532) 490 53 07</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">{t("contact.ulasin")}</h6>
                <p>info@inselvillalari.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">{t("contact.adres")}</h6>
                <p>Zakkum Sokak No:4 Kalkan, Kaş, ANTALYA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
