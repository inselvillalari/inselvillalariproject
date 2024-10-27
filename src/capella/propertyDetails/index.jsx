import React from "react";
import "./style.scss";
import Link from "next/link";

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
              <label>Kat Sayısı:</label> <span>4</span>
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
              <label>Havuz Ölçüleri:</label>
              <span>En: 3,90 m Boy: 7,55 m Derinlik: 145-160 cm</span>
            </li>
            <li>
              <label>Bodrum Kat:</label>
              <span>Bilardo - Masa Tenisi - Dart - Spor Salonu</span>
            </li>
            <li>
              <label>Kiralama için:</label>
              <span>
                <Link
                  href="https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ color: "rgb(37, 211, 102)" }}
                  ></i>
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
