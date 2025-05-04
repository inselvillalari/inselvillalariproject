import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";
import { useTranslation } from "next-i18next";

const LoadingScreen = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader">
          <div className="loading-text">{t("loadingText")}</div>
        </div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/assets/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
