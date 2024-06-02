/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUsData from "./about-us.json";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title">Konumumuz</h6>
              <h2 className="mb-20 playfont">
                {aboutUsData.title.first} <br /> {aboutUsData.title.second}
              </h2>
              <p>{aboutUsData.content}</p>
              <ul>
                {aboutUsData.textList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              {/* <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>Daha Fazlası</span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4 mb-20">
                  <div
                    className="pattern bg-img bg-repeat"
                    style={{
                      backgroundImage: `url(/assets/img/line-pattern.png)`,
                    }}
                  ></div>
                </div>
                <div className="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img mb-20 wow imago">
                    <img src={aboutUsData.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img src={aboutUsData.image2} alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="years-exp">
                    <div className="exp-text">
                      <h2 className="custom-font">{aboutUsData.exp}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
