/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import RigelFeatures from "./features";
import PropertyDetails from "./propertyDetails";
import BookingCalendar from "../BookingCalendar";
import Skills from "../skills";
import { useTranslation } from "next-i18next";
import { getCalendarRanges } from "../../store/reservation/thunk";
import { useDispatch, useSelector } from "react-redux";

const dateRangesData = [
  {
    start: "2024-11-01",
    end: "2025-05-21",
    color: "gray",
  },
  {
    start: "2025-05-26",
    end: "2025-05-31",
    color: "#ff851b",
  },
  {
    start: "2025-06-05",
    end: "2025-06-09",
    color: "#ff851b",
  },
  {
    start: "2025-11-01",
    end: "2026-04-01",
    color: "gray",
  },
];

const RigelPage = () => {
  const { calendarRanges } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
    dispatch(getCalendarRanges("Villa Rigel"));
    const channel = new BroadcastChannel("calendar-update");
    channel.onmessage = (e) => {
      if (e.data === "refresh") {
        dispatch(getCalendarRanges("Villa Rigel"));
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
                query: { villa: "Villa Rigel" },
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
                {t("villaRigelIcinRezervasyonOlustur")}
              </button>
            </Link>
          </div>
          <BookingCalendar dateRangesData={calendarRanges?.rigel || []} />
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
            <Link href="/rigel/nightInsideViews">
              <div
                className="col-lg-6 items residential"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/nightInsideViews/1.webp"
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
            <Link href="/rigel/nightViews">
              <div
                className="col-lg-6 items interior"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/nightViews/1.webp"
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
            <Link href="/rigel/insideViews">
              <div
                className="col-lg-6 items interior"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/indoor/3.webp"
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
            <Link href="/rigel/dayViews">
              <div
                className="col-lg-6 items theaters"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/dayViews/1.webp"
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
            <Link href="/rigel/activities">
              <div
                className="col-lg-6 items residential"
                style={{ marginBottom: "50px" }}
              >
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/activities/1.webp"
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
        <RigelFeatures />
        <PropertyDetails />
      </section>
    </>
  );
};

export default RigelPage;
