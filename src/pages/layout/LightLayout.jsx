import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

const LightLayout = ({ children, footerClass }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const onScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        {/* 🔥 Yalnızca LightLayout'ta bu stil yüklenecek */}
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer classText={footerClass} />
    </>
  );
};

export default LightLayout;
