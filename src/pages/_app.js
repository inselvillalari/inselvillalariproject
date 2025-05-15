import "../styles/style-light.css";
import "../styles/globals.css";
import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setLoading } from "../store/generalSlice";
import store from "../store/store";
import { appWithTranslation } from "next-i18next";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import PageLoading from "../components/pageLoading";
import LightLayout from "./layout/LightLayout";

const AppContent = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    let timeoutId;

    const handleStart = (url) => {
      if (url === router.asPath) return;
      dispatch(setLoading(true));
    };

    const handleComplete = () => {
      timeoutId = setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      clearTimeout(timeoutId);
    };
  }, [router]);

  // const checkWOW = () => {
  //   if (typeof window !== "undefined" && window.WOW) {
  //     new window.WOW().init();
  //   } else {
  //     let retries = 0;
  //     const interval = setInterval(() => {
  //       if (window.WOW) {
  //         new window.WOW().init();
  //         clearInterval(interval);
  //       } else if (++retries > 10) {
  //         clearInterval(interval);
  //       }
  //     }, 100);
  //   }
  // };

  // checkWOW();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>İnsel Villaları</title>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>

      <LightLayout>
        <Component {...pageProps} />
      </LightLayout>

      <PageLoading />
      <Cursor />
      <ScrollToTop />

      {/* JS dosyaları */}
      <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/splitting.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/simpleParallax.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
};

function MyApp(props) {
  return (
    <Provider store={store}>
      <AppContent {...props} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
