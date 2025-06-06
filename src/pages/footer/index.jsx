/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Footer = ({ classText }) => {
  const { t } = useTranslation("common");
  return (
    <footer
      className={`${classText ? classText : ""}`}
      style={{ backgroundColor: "#2A2A38" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>{t("footer.ulasin")}</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>{t("footer.adres")}</h6>
                    <p>Zakkum Sk Kalkan, Kaş, ANTALYA</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>{t("footer.yazin")}</h6>
                    <p>info@inselvillalari.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>{t("footer.arayin")}</h6>
                    <p>+90 532 490 53 07</p>
                  </div>
                </li>
              </ul>

              {/* ➕ Yasal Sayfa Linkleri */}
              <div style={{ marginTop: "1.5rem" }}>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li>
                    <Link href="/privacy-policy">{t("footer.politika")}</Link>
                  </li>
                  <li>
                    <Link href="/agreement">{t("footer.sozlesme")}</Link>
                  </li>
                  <li>
                    <Link href="/legal-info">{t("footer.yasal")}</Link>
                  </li>
                  <li>
                    <Link href="/sitemap">{t("siteHaritasi")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                {/* <img src="/assets/img/logo-light.png" alt="" /> */}
              </div>
              <div className="social">
                <Link
                  href="https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="/contact">
                  <i className="fab fa-google"></i>
                </Link>
              </div>

              {/* ➕ Ödeme Logoları */}
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <img
                  src="/assets/img/payment/visa.png"
                  alt="Visa"
                  style={{ height: "32px", width: "auto" }}
                />
                <img
                  src="/assets/img/payment/mastercard.png"
                  alt="MasterCard"
                  style={{ height: "32px", width: "auto" }}
                />
                <img
                  src="/assets/img/payment/iyzico.png"
                  alt="iyzico ile Öde"
                  style={{ height: "90px", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
