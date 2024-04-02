import React from "react";
import { Carousel } from "./Banner/Carousel";
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductDisplay from "../Components/ProductCardDisplay/ProductDisplay";
import HomePageCatalog from "../Components/HomePageCatalog/HomePageCatalog";
import { productInfo } from "./product/ProductData";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className=" w-[95%] mx-auto space-y-5">
        <ProductDisplay section={"painting"} data={productInfo} />
        <br />
        <br />
        <br />

        <HomePageCatalog />

        <br />
        <br />
        <br />
        <ProductDisplay section={"painting"} data={productInfo} />
      </div>

      <div></div>
    </>
  );
};

export default Home;
