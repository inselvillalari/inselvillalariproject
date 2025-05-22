/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import getSiblings from "../../common/getSiblings";
import LanguageSwitcher from "../../components/languageSwitcher";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;
  const isHome = router.pathname === "/";
  const [isDesktop, setIsDesktop] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        // Close mobile menu
        const collapseEl = document.getElementById("navbarSupportedContent");
        if (collapseEl?.classList.contains("show-with-trans")) {
          collapseEl.classList.remove("show-with-trans");
        }
        // Close dropdowns
        const openItems = navbarRef.current.querySelectorAll(".nav-item.show");
        openItems.forEach((item) => {
          item.classList.remove("show");
          const toggleBtn = item.querySelector("[aria-expanded]");
          const menu = item.querySelector(".dropdown-menu");
          if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
          if (menu) menu.classList.remove("show");
        });
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [navbarRef]);

  useEffect(() => {
    const handleRouteComplete = () => {
      const collapseEl = document.getElementById("navbarSupportedContent");
      if (collapseEl?.classList.contains("show-with-trans")) {
        collapseEl.classList.remove("show-with-trans");
      }
    };
    router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = {
    color: isHome && isDesktop ? "#fff" : "#000",
  };

  return (
    <>
      <nav
        className="navbar change navbar-expand-lg"
        ref={navbarRef}
        style={{
          color: !isDesktop
            ? "#b19777"
            : router.pathname === "/"
            ? "white"
            : "black",
        }}
      >
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
                <i
                  className="fas fa-bars"
                  style={{
                    color: "#b19777",
                  }}
                ></i>
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
                  <a style={linkStyle} className="nav-link">
                    Agena
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/capella" locale={currentLocale} legacyBehavior>
                  <a style={linkStyle} className="nav-link">
                    Capella
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gredi" locale={currentLocale} legacyBehavior>
                  <a style={linkStyle} className="nav-link">
                    Gredi
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/rigel" locale={currentLocale} legacyBehavior>
                  <a style={linkStyle} className="nav-link">
                    Rigel
                  </a>
                </Link>
              </li>
              <li className="nav-item md-ml0" style={{ marginLeft: "60px" }}>
                <Link href="/" locale={currentLocale} legacyBehavior>
                  <a style={linkStyle} className="nav-link">
                    {t("navbar.anasayfa")}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" locale={currentLocale} legacyBehavior>
                  <a style={linkStyle} className="nav-link">
                    {t("navbar.hakkimizda")}
                  </a>
                </Link>
              </li>
              {/* Masaüstü dropdown (sadece büyük ekranlarda görünsün) */}
              <li className="nav-item dropdown desktop-only">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={handleDropdown}
                  aria-expanded="false"
                  style={linkStyle}
                >
                  {t("navbar.rezervasyon")}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      href="/reservation"
                      locale={currentLocale}
                      legacyBehavior
                    >
                      <a className="dropdown-item">
                        {t("navbar.rezervasyonYap")}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reservation-lookup"
                      locale={currentLocale}
                      legacyBehavior
                    >
                      <a className="dropdown-item">
                        {t("navbar.rezervasyonSorgula")}
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mobil görünüm için iki ayrı menü (dropdown değil) */}
              <li className="nav-item mobile-only">
                <Link href="/reservation" locale={currentLocale} legacyBehavior>
                  <a className="nav-link">{t("navbar.rezervasyonYap")}</a>
                </Link>
              </li>
              <li className="nav-item mobile-only">
                <Link
                  href="/reservation-lookup"
                  locale={currentLocale}
                  legacyBehavior
                >
                  <a className="nav-link">{t("navbar.rezervasyonSorgula")}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" locale={currentLocale} legacyBehavior>
                  <a className="nav-link" style={linkStyle}>
                    {t("navbar.iletisim")}
                  </a>
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
