/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../common/initIsotope";
import RigelFeatures from "./features";
import RigelSkills from "./skills";
import PropertyDetails from "./propertyDetails";
import BookingCalendar from "../components/BookingCalendar";

const dateRangesData = [
  {
    start: "2024-11-01",
    end: "2025-04-01",
    color: "gray",
  },
  {
    start: "2025-04-01",
    end: "2025-05-15",
    color: "gray",
  },
  // {
  //   start: "2025-04-01",
  //   end: "2025-04-26",
  //   color: "#ff851b",
  // },
  // {
  //   start: "2025-05-07",
  //   end: "2025-05-14",
  //   color: "#ff851b",
  // },
];

const RigelPage = () => {
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
                <h3>Mekanlar</h3>
              </div>
            </div>
            <Link href="/rigel/insideViews">
              <div className="col-lg-6 items interior">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/indoor/2.jpeg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>İç Mekan</h5>
                    {/* <span>Architecture</span>
                    <span>Modern</span> */}
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/rigel/dayViews">
              <div className="col-lg-6 items theaters">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/dayViews/1.jpeg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>Gündüz Görünümleri</h5>
                    {/* <span>Architecture</span>
                    <span>Modern</span> */}
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/rigel/nightViews">
              <div className="col-lg-6 items residential interior">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/nightViews/1.jpeg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>Gece Görünümleri</h5>
                    {/* <span>Architecture</span>
                    <span>Modern</span> */}
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/rigel/activities">
              <div className="col-lg-6 items residential">
                <div className="item">
                  <div className="img">
                    <img
                      alt=""
                      src="/assets/img/slid/rigel/activities/2.jpeg"
                      className="gallery-img-class"
                    />
                  </div>
                  <div className="cont vis">
                    <h5>Aktiviteler</h5>
                    {/* <span>Architecture</span>
                    <span>Modern</span> */}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <RigelSkills />
        <RigelFeatures />
        <PropertyDetails />
      </section>
    </>
  );
};

export default RigelPage;
