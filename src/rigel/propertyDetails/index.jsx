import React from "react";

const PropertyDetails = () => {
  return (
    <section className=" section-padding">
      <div className="container">
        <div className="section-head">
          <h3>Detaylar</h3>
        </div>
        <div className="property-detail-info-list">
          <ul>
            <li>
              <label>Kat Sayısı:</label> <span>5</span>
            </li>
            <li>
              <label>Oda Sayısı:</label> <span>5 + 1</span>
            </li>
            <li>
              <label>Suit Aile Odası:</label> <span>3</span>
            </li>
            <li>
              <label>Suit Genç Odası:</label> <span>2</span>
            </li>
            <li>
              <label>Banyo Sayısı:</label> <span>6</span>
            </li>
          </ul>
          <ul>
            <li>
              <label>Suit Aile Odası:</label>
              <span>
                Çift Kişilik Yatak - Banyo - TV - Klima - Balkon - Elbise Dolabı
              </span>
            </li>
            <li>
              <label>Suit Genç Odası:</label>
              <span>
                2 Adet Tek Kişilik Yatak - Banyo - TV - Klima - Balkon - Elbise
                Dolabı
              </span>
            </li>
            <li>
              <label>Açık Yüzme Havuz Ölçüleri:</label>
              <span> En: 4,50 m Boy: 6,30 m Derinlik: 155-160 cm</span>
            </li>
            <li>
              <label>Kapalı Yüzme Havuz Ölçüleri:</label>
              <span> En: 4,50 m Boy: 6,30 m Derinlik: 155-160 cm</span>
            </li>
            <li>
              <label>Bodrum Kat:</label>
              <span>
                Kapalı Yüzme Havuzu - Bilardo - Masa Tenisi - Spor Salonu
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
