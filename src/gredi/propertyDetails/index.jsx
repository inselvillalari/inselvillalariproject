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
              <label>Kat Sayısı:</label> <span>6</span>
            </li>
            <li>
              <label>Oda Sayısı:</label> <span>5 + 1</span>
            </li>
            <li>
              <label>Suit Aile Odası:</label> <span>4</span>
            </li>
            <li>
              <label>Suit Genç Odası:</label> <span>1</span>
            </li>
            <li>
              <label>Banyo Sayısı:</label> <span>7</span>
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
              <span>En: 4,40 m Boy: 8,00 m Derinlik: 145-150 cm</span>
            </li>
            <li>
              <label>Kapalı Yüzme Havuz Ölçüleri:</label>
              <span>En: 4,00 m Boy: 6,00 m Derinlik: 155-165 cm</span>
            </li>
            <li>
              <label>Bodrum Kat:</label>
              <span>
                Kapalı Yüzme Havuzu - Bilardo - Masa Tenisi - Dart - Spor Salonu
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
