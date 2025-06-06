/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const MainLayout = ({ children, logoClassText }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        // logo.setAttribute("src", "/assets/img/logo-light.png");
      } else {
        navbar.classList.remove("nav-scroll");
        // logo.setAttribute("src", "/assets/img/logo-light.png");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Navbar
        navbarRef={navbarRef}
        logoRef={logoRef}
        logoClass={logoClassText}
      />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
