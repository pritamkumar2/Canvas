import React from "react";
import "./homeCatalog.css";

const HomePageCatalog = () => {
  const images = ["path_to_image_1.jpg", "path_to_image_2.jpg", "path_to_image_3.jpg", "path_to_image_4.jpg"];

  return (
    <div className="homeCatalog flex flex-wrap items-center justify-center">
      {images.map((image, index) => (
        <div key={index} className="box">
          <img src={image} alt={`Image ${index + 1}`} />
          <p>{`${index + 1} box`}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePageCatalog;
