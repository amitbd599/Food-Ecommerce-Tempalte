import React from "react";
import CardSlider from "../Components/CardSlider";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OpenAccountInfo from "../Components/OpenAccountInfo";
import ProductSlider from "../Components/ProductSlider";
import Spinner from "../Components/Spinner";

const HomeComponent = () => {
  return (
    <>
      <Navbar />
      <ProductSlider />
      <CardSlider />
      <OpenAccountInfo />
      <Spinner />
      <Footer />
    </>
  );
};

export default HomeComponent;
