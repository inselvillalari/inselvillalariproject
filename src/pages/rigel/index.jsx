/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import RigelPage from "../../rigel/RigelPage";

const Rigel = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA RIGEL",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarımızdan ikisinde yer alan jakuzide manzaraya karşı keyif yapabileceksiniz. 
        Hayallerinizin ötesinde bir tatil imkanı sunmakta olan villamız, bodrum katta spor salonu (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve ısıtmalı kapalı havuz ile bütün bir yılın yorgunluğunu üzerinizden atmanız için, kusursuz bir şekilde tasarlanmıştır. 
        4 adet Suit Aile ve 1 adet Suit Genç yatak odamız bulunmaktadır. Aile odalarımızın her birinde Çift kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Klima, Jakuzi, Banyo, TV ve balkon bulunmaktadır. 
        Genç odamızda ise 2 Adet tek kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Bebek yatağı, Klima, Banyo, TV ve balkon bulunmaktadır.
        Villamızın 1. katında 1 aile odası ve 1 genç odası bulunmaktadır. 2. katında ise 1 aile odası ve 1 genç odası bulunmaktadır. Aile odalarımızın bir tanesi de teras katındadır.  
        Villanın zemin katında spor odası (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve oturma alanı bulunmaktadır. Banyo mevcuttur.
        Villamızın Havuz Ebatları; En: 4,50 m Boy: 6,30 m Derinlik: 155-160 cm"
      />
      <RigelPage />
    </MainLayout>
  );
};

export default Rigel;
