import React from "react";
import introData from "./index.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";

import SplitComponent from "../split";
import Link from "next/link";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";
import { useTranslation } from "next-i18next";

const IntroWithVertical = () => {
  const { t } = useTranslation("common");
  const widthRef = React.useRef(null);
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      removeSlashFromPagination();
    }, 1000);

    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  const sliderRef = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <header className="slid-half">
        <div
          id="js-cta-slider"
          className="cta__slider-wrapper nofull swiper-container"
          ref={widthRef}
        >
          {!load ? (
            <Swiper
              ref={sliderRef}
              speed={800}
              parallax={true}
              pagination={{
                type: "fraction",
                clickable: true,
                el: paginationRef.current,
              }}
              slidesPerView={1}
              direction="horizontal"
              loop={true}
              grabCursor={true}
              watchSlidesProgress={true}
              breakpoints={{
                1100: { direction: "vertical" },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  for (let i = 0; i < swiper?.slides?.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute(
                      "data-swiper-parallax",
                      0.75 * swiper.height
                    );
                  }

                  if (swiper.params) {
                    swiper.params.pagination.el = paginationRef.current;
                    swiper.navigation?.destroy();
                    swiper.navigation?.init();
                    swiper.navigation?.update();
                    swiper.pagination?.destroy();
                    swiper.pagination?.init();
                    swiper.pagination?.update();
                  }
                }, 500);
              }}
              className="swiper-wrapper cta__slider"
            >
              {introData?.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="cta__slider-item swiper-slide"
                >
                  <div className="media-wrapper slide-inner valign">
                    <div
                      className="bg-img"
                      style={{ backgroundImage: `url(${slide.image})` }}
                      data-overlay-dark="5"
                    ></div>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                          <div className="caption">
                            <span className="top-corn"></span>
                            <span className="bottom-corn"></span>
                            <div className="custom-font">
                              <h5 className="thin custom-font">
                                {slide.title.first}
                              </h5>
                              <SplitComponent>
                                <h1
                                  data-splitting
                                  className="words chars splitting"
                                >
                                  <Link href="#">{slide.title.second}</Link>
                                </h1>
                              </SplitComponent>
                            </div>
                            {slide?.content && (
                              <p className="mt-10">
                                {slide.content.first} <br />
                                {slide.content.second}
                              </p>
                            )}
                            <Link
                              href={slide?.pageLink}
                              className="btn-curve btn-color mt-30"
                            >
                              <span>{t("detayaGit")}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}

          <div className="cta__slider-arrows">
            <i
              id="js-cta-slider-next"
              ref={navigationNextRef}
              className="cta__slider-arrow cta__slider-arrow--next"
              onClick={handleNext}
            >
              {widthRef?.current?.offsetWidth > 1100 ? (
                <i className="fas fa-chevron-down"></i>
              ) : (
                <i className="fas fa-chevron-right"></i>
              )}
            </i>
            <i
              id="js-cta-slider-previous"
              ref={navigationPrevRef}
              className="cta__slider-arrow cta__slider-arrow--previous"
              onClick={handlePrev}
              style={{ marginBottom: "130px" }}
            >
              {widthRef?.current?.offsetWidth > 1100 ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-left"></i>
              )}
            </i>
          </div>
        </div>

        <div
          ref={paginationRef}
          className="swiper-pagination top custom-font"
        ></div>

        <div
          className="social-icon"
          style={{
            position: "absolute",
            left: "40px",
            bottom: "100px",
            zIndex: 100,
          }}
        >
          <a
            href="https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              width: "40px",
              height: "40px",
              lineHeight: "40px",
              textAlign: "center",
              borderRadius: "20%",
              fontSize: "20px",
              cursor: "pointer",
              color: "#C13584",
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              width: "40px",
              height: "40px",
              lineHeight: "40px",
              textAlign: "center",
              borderRadius: "50%",
              color: "rgb(37,211,102)",
              fontSize: "20px",
              cursor: "pointer !important",
            }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="/contact"
            style={{
              width: "40px",
              height: "40px",
              lineHeight: "40px",
              textAlign: "center",
              borderRadius: "50%",
              color: "rgb(234, 67, 53)",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            <i className="fab fa-google"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default IntroWithVertical;
