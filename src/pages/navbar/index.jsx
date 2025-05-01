/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "./app.json";
import getSiblings from "../../common/getSiblings";
import LanguageSwitcher from "../../components/languageSwitcher";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
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
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="d-block d-md-none">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/agena">
                  Agena
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/capella">
                  Capella
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gredi">
                  Gredi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/rigel">
                  Rigel
                </a>
              </li>
              <li className="nav-item md-ml0" style={{ marginLeft: "60px" }}>
                <a className="nav-link" href="/">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Hakkımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reservation">
                  Rezervasyon
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  İletişim
                </a>
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
