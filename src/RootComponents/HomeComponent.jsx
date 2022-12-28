import React from "react";
import CardSlider from "../Components/CardSlider";
import Navbar from "../Components/Navbar";
import OpenAccountInfo from "../Components/OpenAccountInfo";
import ProductSlider from "../Components/ProductSlider";

const HomeComponent = () => {
  return (
    <>
      <Navbar />
      <ProductSlider />
      <CardSlider />
      <OpenAccountInfo />
    </>
  );
};

export default HomeComponent;
