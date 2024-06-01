import React from "react";
import servicesData from "./services.json";

const Services = () => {
  return (
    <section className="services">
      <div className="feat-top">
        <div className="notfull bg-gray wow"></div>
        <div className="container-fluid">
          <div className="row">
            {servicesData.map((item, index) => (
              <div className="col-lg-4" key={item.id}>
                <div
                  className="item-sm wow fadeInUp"
                  data-wow-delay={
                    index == 0 ? "1s" : index == 1 ? "1.1s" : "1.2s"
                  }
                >
                  {/* <div className="box">
                    <h6 className="mb-20">
                      <span className="custom-font numb">{item.id}</span>
                      {item.title}
                    </h6>
                    <p>{item.content}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
