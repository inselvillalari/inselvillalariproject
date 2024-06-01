import React from "react";
import MainLayout from "../layout/MainLayout";
import PageHeader from "../../components/Page-header";
import Skills from "../agena/skills";
import Team from "./teams";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "Anasayfa", url: "/" },
          { id: 2, name: "İletişim", url: "/contact" },
        ]}
      />
      <Team />
      <Skills />
    </MainLayout>
  );
};

export default About;
