import React from "react";
import OccupationArea from "../Home/OccupationArea";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Footer from "../components/Footer/Footer";
import Help from "../Home/Help";

const page = () => {
  return (
    <>
      <SectionTitle
        title="Áreas de atuação"
        subtitle="Conheças as áreas onde somos especialistas"
      />
      <OccupationArea />
      <Help />
      <Footer />
    </>
  );
};

export default page;
