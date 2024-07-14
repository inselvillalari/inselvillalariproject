/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import AgenaPage from "../../agena/AgenaPage";

const Agena = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA AGENA",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ana ebeveyn odamızda yer alan jakuzide manzaraya karşı keyif yapabileceksiniz. 
        4 adet Suit Aile ve 1 adet Suit Genç yatak odamız bulunmaktadır. Aile odalarımızın her birinde Çift kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Klima, Jakuzi, Banyo, TV ve balkon bulunmaktadır. 
        Genç odamızda ise 2 Adet tek kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Bebek yatağı, Klima, Banyo, TV ve balkon bulunmaktadır.
        Tripleks villamızın 1. katında 2 aile odası ve 1 genç odası bulunmaktadır. Aile odalarımızın iki tanesi teras katındadır. 
        Villamızın Havuz Ebatları; En: 4,35 m Boy: 8,95 m Derinlik: 1,55-1,95 cm"
      />
      <AgenaPage />
    </MainLayout>
  );
};

export default Agena;
