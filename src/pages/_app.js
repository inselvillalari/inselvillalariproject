import "../styles/globals.css";
import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider } from "react-redux";
import store from "../store/store"; // doğru path
import { appWithTranslation } from "next-i18next";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>IN-SEL</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>

        <Cursor />
        <LoadingScreen />
        <Component {...pageProps} />
        <SpeedInsights />
        <ScrollToTop />

        <Script id="wow" src="/assets/js/wow.min.js"></Script>
        <Script
          id="splitting"
          strategy="beforeInteractive"
          src="/assets/js/splitting.min.js"
        ></Script>
        <Script
          id="simpleParallax"
          src="/assets/js/simpleParallax.min.js"
        ></Script>
        <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>
        <Script
          src="/assets/js/main.js"
          id="init"
          strategy="lazyOnload"
        ></Script>
      </>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
