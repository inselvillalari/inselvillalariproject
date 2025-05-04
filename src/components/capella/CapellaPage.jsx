/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import CapellaFeatures from "./features";
import PropertyDetails from "./propertyDetails";
import BookingCalendar from "../BookingCalendar";
import initIsotope from "../../common/initIsotope";
import Skills from "../skills";
import { useTranslation } from "next-i18next";

const dateRangesData = [
  {
    start: "2024-11-01",
    end: "2025-05-15",
    color: "gray",
  },
  {
    start: "2025-05-26",
    end: "2025-05-31",
    color: "#ff851b",
  },
  {
    start: "2025-07-13",
    end: "2025-07-23",
    color: "#ff851b",
  },
  {
    start: "2025-11-01",
    end: "2026-04-01",
    color: "gray",
  },
];

const CapellaPage = () => {
  const { t } = useTranslation("common");
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <BookingCalendar dateRangesData={dateRangesData} />
          <div className="row gallery gallery-min-heigth">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>{t("mekanlar")}</h3>
              </div>
            </div>
            <Link href="/capella/insideViews">
              <div className="col-lg-6 items interior">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/capella/indoor/2.jpeg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>{t("icMekan")}</h5>
                    {/* <span>Architecture</span>
                    <span>Modern</span> */}
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/capella/dayViews">
              <div className="col-lg-6 items theaters">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/capella/dayViews/1.jpeg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>{t("gunduzGorunumleri")}</h5>
                    {/* <span>Architecture</span>
                    <span>Modern</span> */}
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link href="/capella/nightViews">
              <div className="col-lg-6 items residential interior">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/capella/nightViews/1.jpeg"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>Gece Görünümleri</h5>
                    <span>Architecture</span>
                    <span>Modern</span>
                  </div>
                </div>
              </div>
            </Link> */}
            <Link href="/capella/activities">
              <div className="col-lg-6 items residential">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/capella/activities/2.jpeg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>{t("aktiviteler")}</h5>
                    {/* <span>Architecture</span>
                    <span>Modern</span> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Skills />
        <CapellaFeatures />
        <PropertyDetails />
      </section>
    </>
  );
};

export default CapellaPage;
