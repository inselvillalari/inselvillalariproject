/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import GrediFeatures from "./features";
import PropertyDetails from "./propertyDetails";
import BookingCalendar from "../BookingCalendar";
import Skills from "../skills";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarRanges } from "../../store/reservation/thunk";
import { getDailyPriceList } from "../../utils/getDailyPriceList";

const GrediPage = () => {
  const { calendarRanges } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const priceList = getDailyPriceList("Villa Gredi");
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
    dispatch(getCalendarRanges("Villa Gredi"));
    const channel = new BroadcastChannel("calendar-update");
    channel.onmessage = (e) => {
      if (e.data === "refresh") {
        dispatch(getCalendarRanges("Villa Gredi"));
      }
    };

    return () => channel.close();
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "20px 0",
            }}
          >
            <Link
              href={{
                pathname: "/reservation",
                query: { villa: "Villa Gredi" },
              }}
            >
              <button
                style={{
                  backgroundColor: "#111", // varsayılan siyah
                  color: "#fff",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(200, 169, 126)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(200, 169, 126)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#111";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                {t("villaGrediIcinRezervasyonOlustur")}
              </button>
            </Link>
          </div>
          <BookingCalendar
            dateRangesData={calendarRanges?.gredi || []}
            priceList={priceList}
          />
          <div className="row gallery gallery-min-heigth">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3
                  style={{
                    letterSpacing: "4px",
                    marginBottom: "30px",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "50px",
                  }}
                >
                  {t("mekanlar")}
                </h3>
              </div>
            </div>
            <Link href="/gredi/nightInsideViews">
              <div
                className="col-lg-6 items residential"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/gredi/nightInsideViews/1.jpg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#fff",
                      color: "#111",
                      padding: "10px 16px",
                      fontWeight: "bold",
                      borderTopRightRadius: "6px",
                      zIndex: 2,
                    }}
                  >
                    <h6>{t("geceIcMekanGorunumu")}</h6>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/gredi/nightViews">
              <div
                className="col-lg-6 items interior"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/gredi/nightViews/1.jpg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#fff",
                      color: "#111",
                      padding: "10px 16px",
                      fontWeight: "bold",
                      borderTopRightRadius: "6px",
                      zIndex: 2,
                    }}
                  >
                    <h6>{t("geceGorunumleri")}</h6>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/gredi/insideViews">
              <div
                className="col-lg-6 items interior"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/gredi/indoor/1.jpg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#fff",
                      color: "#111",
                      padding: "10px 16px",
                      fontWeight: "bold",
                      borderTopRightRadius: "6px",
                      zIndex: 2,
                    }}
                  >
                    <h6>{t("icMekan")}</h6>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/gredi/dayViews">
              <div
                className="col-lg-6 items theaters"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/gredi/dayViews/1.webp"
                      className="gallery-img-class"
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#fff",
                      color: "#111",
                      padding: "10px 16px",
                      fontWeight: "bold",
                      borderTopRightRadius: "6px",
                      zIndex: 2,
                    }}
                  >
                    <h6>{t("gunduzGorunumleri")}</h6>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/gredi/activities">
              <div
                className="col-lg-6 items residential"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/gredi/activities/1.jpg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#fff",
                      color: "#111",
                      padding: "10px 16px",
                      fontWeight: "bold",
                      borderTopRightRadius: "6px",
                      zIndex: 2,
                    }}
                  >
                    <h6>{t("aktiviteler")}</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Skills />
        <GrediFeatures />
        <PropertyDetails />
      </section>
    </>
  );
};

export default GrediPage;
