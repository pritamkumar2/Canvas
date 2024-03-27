import React from "react";

const HomePageCatalog = () => {
  const images = [
    "https://image.lexica.art/full_webp/047ee952-6da5-4d45-869e-18ada6aeb023",
    "https://image.lexica.art/full_webp/047ee952-6da5-4d45-869e-18ada6aeb023",
    "https://image.lexica.art/full_webp/047ee952-6da5-4d45-869e-18ada6aeb023",
    "https://image.lexica.art/full_webp/047ee952-6da5-4d45-869e-18ada6aeb023",
    "https://image.lexica.art/full_webp/047ee952-6da5-4d45-869e-18ada6aeb023",
  ];

  return (
    <div className=" flex flex-wrap items-center justify-center space-x-5">
      {images.map((image, index) => (
        <div key={index} className=" relative   -z-1 ">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className=" h-[40px]  w-[70px] md:h-[130px]  md:w-[200px] md:rounded-2xl  rounded "
          />
          <p className=" absolute bottom-0 left-0 z-1   font-semibold text-white p-1 ">{`${
            index + 1
          } box`}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePageCatalog;
