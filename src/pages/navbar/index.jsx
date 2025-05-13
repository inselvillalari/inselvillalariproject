/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import getSiblings from "../../common/getSiblings";
import LanguageSwitcher from "../../components/languageSwitcher";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;

  const { pathname } = router;

  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <a className={`logo ${logoClass && logoClass}`} href="/"></a>
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              onClick={handleMobileDropdown}
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar">
                <i className="fas fa-bars" style={{ color: "#000" }}></i>
              </span>
            </button>
            <div className="d-block d-md-none">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/agena" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">Agena</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/capella" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">Capella</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gredi" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">Gredi</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/rigel" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">Rigel</a>
                </Link>
              </li>
              <li className="nav-item md-ml0" style={{ marginLeft: "60px" }}>
                <Link href="/" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">{t("navbar.anasayfa")}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">{t("navbar.hakkimizda")}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/reservation" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">{t("navbar.rezervasyon")}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">{t("navbar.iletisim")}</a>
                </Link>
              </li>
              <li className="nav-item ml-5 d-none d-md-block">
                <div className="d-flex h-100 align-items-center">
                  <LanguageSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
