import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const PropertyDetails = () => {
  const { t } = useTranslation("common");
  return (
    <section className=" section-padding">
      <div className="container">
        <div className="section-head">
          <h3>{t("propertyDetails.detay")}</h3>
        </div>
        <div className="property-detail-info-list">
          <ul>
            <li>
              <label>{t("propertyDetails.kat")}</label> <span>5</span>
            </li>
            <li>
              <label>{t("propertyDetails.oda")}</label> <span>5 + 1</span>
            </li>
            <li>
              <label>{t("propertyDetails.suitAile")}</label> <span>3</span>
            </li>
            <li>
              <label>{t("propertyDetails.suitGenc")}</label> <span>2</span>
            </li>
            <li>
              <label>{t("propertyDetails.banyo")}</label> <span>6</span>
            </li>
          </ul>
          <ul>
            <li>
              <label>{t("propertyDetails.suitAile")}</label>
              <span>{t("propertyDetails.suitAileIcerik")}</span>
            </li>
            <li>
              <label>{t("propertyDetails.suitGenc")}</label>
              <span>{t("propertyDetails.suitGencIcerik")}</span>
            </li>
            <li>
              <label>{t("propertyDetails.havuz")}</label>
              <span>{t("propertyDetails.rigelAcikHavuz")}</span>
            </li>
            <li>
              <label>{t("propertyDetails.kapaliHavuz")}</label>
              <span>{t("propertyDetails.rigelKapaliHavuz")}</span>
            </li>
            <li>
              <label>{t("propertyDetails.bodrum")}</label>
              <span>{t("propertyDetails.rigelBodrum")}</span>
            </li>
            <li>
              <label>{t("propertyDetails.kiralamaIcin")}</label>
              <span>
                <Link
                  href="https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ color: "rgb(37, 211, 102)" }}
                  ></i>
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
