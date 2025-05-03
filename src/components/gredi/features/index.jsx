import React from "react";
import TenPeople from "../../../icons/TenPeople";
import FivePlusOne from "../../../icons/FivePlusOne";
import Bilardo from "../../../icons/Bilardo";
import Check from "../../../icons/Check";
import PrivatePool from "../../../icons/PrivatePool";
import BBQ from "../../../icons/BBQ";
import Jacuzzy from "../../../icons/Jacuzzy";

const GrediFeatures = () => {
  return (
    <section className="services section-padding p-0">
      <div className="container">
        <div className="section-head">
          <h3>Özellikler</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 sm-mb30 sm-pl50">
            <div className="row">
              <div className="col-4">
                <div className="item">
                  <TenPeople title="10 Kişilik" />
                </div>
              </div>
              <div className="col-4">
                <div className="item">
                  <PrivatePool title="Havuz" />
                </div>
              </div>
              <div className="col-4">
                <div className="item">
                  <FivePlusOne title="5+1" />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="item">
                  <Bilardo title="Bilardo" />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="item">
                  <BBQ title="BBQ" />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="item">
                  <Jacuzzy title="Jakuzi" />
                </div>
              </div>
              {/* <div className="col-4 mt-4">
                <div className="item">
                  <PingPong title="Masa Tenisi" />
                </div>
              </div> */}
              {/* <div className="col-4 mt-4">
                <div className="item">
                  <CarPark title="Otopark" />
                </div>
              </div> */}
              {/* <div className="col-4 mt-4">
                <div className="item">
                  <PoolHeating title="Havuz Isıtma" />
                </div>
              </div> */}
              {/* <div className="col-4 mt-4">
                <div className="item">
                  <Terrace title="Teras" />
                </div>
              </div> */}
              {/* <div className="col-4 mt-4">
                <div className="item">
                  <BabyBed title="Bebek Yatağı" />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="item">
                  <IndoorPool title="Kapalı Havuz" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row pl-5">
              <div className="col-sm-12 col-md-6 sm-mb30 sm-pl50">
                <div
                  className="row"
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <div className="item">
                    <Check title="Otopark" />
                  </div>
                  <div className="item">
                    <Check title="Elektrikli Araç Şarj İstasyonu" />
                  </div>
                  <div className="item">
                    <Check title="Smart TV - Uydu" />
                  </div>
                  <div className="item">
                    <Check title="Playstation 5" />
                  </div>
                  <div className="item ">
                    <Check title="Güvenlik Görevlisi" />
                  </div>
                  <div className="item ">
                    <Check title="Güvenlik Kamerası" />
                  </div>
                  <div className="item">
                    <Check title="Klima" />
                  </div>
                  <div className="item">
                    <Check title="Masa Tenisi" />
                  </div>
                  <div className="item ">
                    <Check title="Full Mobilyalı" />
                  </div>
                  <div className="item ">
                    <Check title="Beyaz Eşyalı" />
                  </div>
                  <div className="item">
                    <Check title="Saç Kurutma Makinesi" />
                  </div>
                  <div className="item">
                    <Check title="Ütü" />
                  </div>
                  <div className="item ">
                    <Check title="Deniz Manzaralı" />
                  </div>
                  <div className="item ">
                    <Check title="Ebeveyn Banyosu" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 sm-pl50">
                <div
                  className="row "
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <div className="item ">
                    <Check title="İnternet Bağlantısı" />
                  </div>
                  <div className="item ">
                    <Check title="Kapalı Havuz" />
                  </div>
                  <div className="item ">
                    <Check title="Çamaşır Makinesi" />
                  </div>
                  <div className="item ">
                    <Check title="Bebek Yatağı" />
                  </div>
                  <div className="item ">
                    <Check title="Teras" />
                  </div>
                  <div className="item ">
                    <Check title="Havuz - Bahçe Bakımı" />
                  </div>
                  <div className="item ">
                    <Check title="Oyun Alanı" />
                  </div>
                  <div className="item ">
                    <Check title="Duşakabin" />
                  </div>
                  <div className="item ">
                    <Check title="Alarm" />
                  </div>
                  <div className="item ">
                    <Check title="Bahçeli" />
                  </div>
                  <div className="item ">
                    <Check title="Çocuk Havuzu" />
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

export default GrediFeatures;
