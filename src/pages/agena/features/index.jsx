import React from "react";
import Check from "./Check";
const AgenaFeatures = () => {
  return (
    <section className="services section-padding p-0">
      <div className="container">
        <div className="section-head">
          <h3>Özellikler</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div
              className="row"
              style={{
                flexDirection: "column",
                paddingLeft: "50px",
              }}
            >
              <div>
                <div className="item ">
                  <Check title="Beyaz Eşyalı" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Beyaz Eşyalı" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Deniz Manzaralı" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Havuz - Bahçe Bakımı" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Oyun Alanı" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Duşakabin" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Alarm" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Bahçeli" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Çocuk Havuzu" />
                </div>
              </div>
              <div>
                <div className="item ">
                  <Check title="Ebeveyn Banyosu" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default AgenaFeatures;
