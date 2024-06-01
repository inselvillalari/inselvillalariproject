import React from "react";
import PageHeader from "./pageHeader";
import MainLayout from "../main";
import ContactInfo from "./contactInfo";
import ContactWithMap from "./contactWithMap";

const Contact = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Contact Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "contact us", url: "/contact" },
        ]}
        image="/assets/img/pg2.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </MainLayout>
  );
};

export default Contact;
