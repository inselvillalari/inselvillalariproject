/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import CapellaPage from "../../capella/CapellaPage";

const Capella = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA CAPELLA",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarımızdan ikisinde yer alan jakuzide manzaraya karşı keyif yapabileceksiniz. 
        4 adet Suit Aile ve 1 adet Suit Genç yatak odamız bulunmaktadır. Aile odalarımızın her birinde Çift kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Klima, Jakuzi, Banyo, TV ve balkon bulunmaktadır. 
        Genç odamızda ise 2 Adet tek kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Bebek yatağı, Klima, Banyo, TV ve balkon bulunmaktadır.
        Tripleks villamızın 1. katında 2 aile odası ve 1 genç odası bulunmaktadır. Aile odalarımızın iki tanesi teras katındadır. 
        Villanın zemin katında spor odası (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve oturma alanı bulunmaktadır. Banyo mevcuttur.
        Villamızın Havuz Ebatları; En: 3,90 m Boy: 7,55 m Derinlik: 145-160 cm"
      />
      <CapellaPage />
    </MainLayout>
  );
};

export default Capella;
