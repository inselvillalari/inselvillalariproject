/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../layout/MainLayout";
import GrediPage from "../../gredi/GrediPage";

const Gredi = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "VİLLA GREDI",
          // second: "and the building speak for themeselves",
        }}
        // title = "text"
        content="Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarımızdan ikisinde yer alan jakuzide manzaraya karşı keyif yapabileceksiniz.
        Hayallerinizin ötesinde bir tatil imkanı sunmakta olan villamız, bodrum katta spor salonu (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve kapalı havuz ile bütün bir yılın yorgunluğunu üzerinizden atmanız için, kusursuz bir şekilde tasarlanmıştır. 
        3 adet Suit Aile ve 2 adet Suit Genç yatak odamız bulunmaktadır. Aile odalarımızın her birinde Çift kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Klima, Jakuzi, Banyo, TV ve balkon bulunmaktadır. 
        Genç odamızda ise 2 Adet tek kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Bebek yatağı, Klima, Banyo, TV ve balkon bulunmaktadır.
        Villamızın giriş katında 1 aile odası bulunmaktadır. 1. katında ise 1 aile odası ve 1 genç odası bulunmaktadır. Aile odalarımızın iki tanesi teras katındadır. 
        Villamızın Havuz Ebatları; En: 4,40 m Boy: 8,00 m Derinlik: 145-150 cm
        Kapalı Havuz Ebatları; En: 4,00 m Boy: 6,00 m Derinlik: 155-165 cm"
      />
      <GrediPage />
    </MainLayout>
  );
};

export default Gredi;
