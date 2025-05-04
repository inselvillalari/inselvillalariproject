import "../styles/globals.css";
import React, { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import PageLoading from "../components/pageLoading";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider, useDispatch } from "react-redux";
import store from "../store/store";
import { appWithTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setLoading } from "../store/generalSlice";
import "../components/pageLoading/index.css";

const AppContent = ({ Component, pageProps }) => {
  const { loading } = useSelector((state) => state.general);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;
  
    const handleStart = () => {
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

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>IN-SEL</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Cursor />
      <PageLoading />
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
      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
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
