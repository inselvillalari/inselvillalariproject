/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const LightLayout = ({ children, footerClass }) => {
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
        // logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        // logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer classText={footerClass} />
    </>
  );
};

export default LightLayout;
