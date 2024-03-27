import React from "react";
import { Carousel } from "./Banner/Carousel";
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductDisplay from "../Components/ProductCardDisplay/ProductDisplay";
import HomePageCatalog from "../Components/HomePageCatalog/HomePageCatalog";
const Home = () => {
  const productInfo = [
    {
      image: "https://i.imgur.com/5KdbsEJ.jpg",
      brand: {
        id: 123,
        name: "Dolce & Gabbana",
      },
      description: "cropped leaf-print shirt",
      price: 795,
      formattedPrice: "$795",
    },

    {
      image: "https://i.imgur.com/4QyNz4r.jpg",
      brand: {
        id: 123,
        name: "Dolce & Gabbana",
      },
      description: "cropped leaf-print shirt",
      price: 795,
      formattedPrice: "$795",
    },
    {
      image: "https://i.imgur.com/601l2Iu.jpg",
      brand: {
        id: 123,
        name: "Dolce & Gabbana",
      },
      description: "cropped leaf-print shirt",
      price: 795,
      formattedPrice: "$795",
    },
    {
      image: "https://i.imgur.com/VuZsIxM.jpg",
      brand: {
        id: 123,
        name: "Dolce & Gabbana",
      },
      description: "cropped leaf-print shirt",
      price: 795,
      formattedPrice: "$795",
    },
    {
      image:
        "https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg",
      brand: {
        id: 123,
        name: "Dolce & Gabbana",
      },
      description: "cropped leaf-print shirt",
      price: 795,
      formattedPrice: "$795",
    },
    // Add more product items here
  ];

  return (
    <>
      <Carousel />
      <div className=" w-[95%] mx-auto space-y-5">
        <ProductDisplay section={"painting"} data={productInfo} />
        <br />
        <br />
        <br />

        <HomePageCatalog />
      </div>
      <div>Home</div>
    </>
  );
};

export default Home;
