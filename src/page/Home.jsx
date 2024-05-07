import { React } from "react";
import { Carousel } from "./Banner/Carousel";
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductDisplay from "../Components/ProductCardDisplay/ProductDisplay";
import HomePageCatalog from "../Components/HomePageCatalog/HomePageCatalog";
import { Trusted } from "../Components/Trusted/Trusted";
import { Services } from "../Components/Trusted/Services";
import { useAuth } from "../ContextApi/AppProvider";
import FeatureProduct from "./Feature/FeatureProduct";

const Home = () => {
  const { products } = useAuth();

  const adults = products.filter((product) => product.category === "adults");
  const anime = products.filter((product) => product.category === "Anime");

  return (
  
    <>
      <Carousel />
      <div className=" w-[95%] mx-auto space-y-5">
        <ProductDisplay section={"painting"} data={adults} />
        <br />
        <br />
        <br />

        <HomePageCatalog />

        <br />
        <br />
        <br />
        <ProductDisplay section={"painting"} data={anime} />
      </div>

      <div>
        <FeatureProduct />
      </div>

      <div>
        <Services />
        <br />
        <br />

        <br />

        <Trusted />
      </div>
    </>
  );
};

export default Home;
