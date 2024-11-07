import React from "react";
import PageHeader from "../../contact/PageHeader";
import MainLayout from "../main";
import ContactInfo from "../../contact/contactInfo";
import ContactWithMap from "../../contact/contactWithMap";

const Contact = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Bize Ulaşın"
        fullPath={[
          { id: 1, name: "Anasayfa", url: "/" },
          { id: 2, name: "İletişim", url: "/contact" },
        ]}
        image="/assets/img/slid/contact/4.jpeg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </MainLayout>
  );
};

export default Contact;
