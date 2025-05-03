import React from "react";
import LightLayout from "../layout/LightLayout";

export default function ReservationEdit() {
  return (
    <LightLayout>
      <div className="container" style={{ marginTop: "50px" }}>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Rezervasyon Sistemi Yakında Açılacaktır</h2>
          <p>
            Şu anda yalnızca bilgi amaçlı yayın yapıyoruz. Online rezervasyon ve
            ödeme adımları kısa süre içinde aktif edilecektir.
          </p>
          <p>
            Sorularınız için bize{" "}
            <a
              href="https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>{" "}
            üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </LightLayout>
  );
}
