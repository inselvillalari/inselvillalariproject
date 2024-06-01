import React from "react";
import TenPeople from "../../icons/TenPeople";
import FivePlusOne from "../../icons/FivePlusOne";
import Bilardo from "../../icons/Bilardo";
import Check from "../../icons/Check";
import PrivatePool from "../../icons/PrivatePool";
import BBQ from "../../icons/BBQ";
import Jacuzzy from "../../icons/Jacuzzy";
import Wifi from "../../icons/Wifi";
import PingPong from "../../icons/PingPong";
import CarPark from "../../icons/CarPark";
import Guard from "../../icons/Guard";
import PoolHeating from "../../icons/PoolHeating";
import IndoorPool from "../../icons/IndoorPool";
import BabyBed from "../../icons/BabyBed";
import Terrace from "../../icons/Terrace";
const GrediFeatures = () => {
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
                paddingLeft: "150px",
              }}
            >
              <div className="item">
                <TenPeople title="10 Kişilik" />
              </div>
              <div className="item">
                <FivePlusOne title="5+1" />
              </div>
              <div className="item">
                <PrivatePool title="Özel Havuzlu" />
              </div>
              <div className="item">
                <Bilardo title="Bilardo" />
              </div>
              <div className="item">
                <BBQ title="BBQ - Mangal" />
              </div>
              <div className="item">
                <Jacuzzy title="Jakuzi" />
              </div>
              <div className="item">
                <Wifi title="İnternet Bağlantısı" />
              </div>
              <div className="item">
                <PingPong title="Masa Tenisi" />
              </div>
              <div className="item">
                <CarPark title="Otopark" />
              </div>
              <div className="item">
                <Guard title="Güvenlik Görevlisi" />
              </div>
              <div className="item">
                <PoolHeating title="Havuz Isıtma" />
              </div>
              <div className="item">
                <IndoorPool title="Kapalı Havuz" />
              </div>
              <div className="item">
                <BabyBed title="Bebek Yatağı" />
              </div>
              <div className="item">
                <Terrace title="Teras" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div
              className="row"
              style={{
                flexDirection: "column",
                paddingLeft: "50px",
              }}
            >
              <div className="item">
                <Check title="Smart TV - Uydu" />
              </div>
              <div className="item">
                <Check title="Klima" />
              </div>
              <div className="item ">
                <Check title="Full Mobilyalı" />
              </div>
              <div className="item ">
                <Check title="Beyaz Eşyalı" />
              </div>
              <div>
                <div className="item">
                  <Check title="Saç Kurutma Makinesi" />
                </div>
                <div className="item">
                  <Check title="Ütü" />
                </div>
                <div className="item ">
                  <Check title="Deniz Manzaralı" />
                </div>
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
              <div className="item ">
                <Check title="Ebeveyn Banyosu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrediFeatures;
