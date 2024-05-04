import React from "react";
import Hero from "./Hero";
import Footer from "../components/Footer/Footer";
import Occupation from "./Occupation";
import OccupationArea from "./OccupationArea";
import Help from "./Help";
import Articles from "./Articles";

const Home = () => {
  return (
    <div>
      <Hero />
      <Occupation />
      {/* <OccupationArea /> */}
      <Help />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
