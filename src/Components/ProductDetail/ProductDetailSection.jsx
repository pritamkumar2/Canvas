import React from "react";

const ProductDetailSection = () => {
  return (
    <div className="block lg:flex">
      {/* Product Image and Details */}
      <div className="w-full lg:w-1/2">
        {/* Product Image */}
        <div className="relative" style={{ paddingBottom: "66.666667%" }}>
          <img
            className="absolute h-full w-full object-cover pb-4"
            src="https://source.unsplash.com/W1yjvf5idqA"
            alt="Product"
          />
        </div>
        {/* Additional Images */}
        <div className="-mx-2 flex flex-wrap">
          {[1, 2, 3, 4].map((_, index) => (
            <img
              key={index}
              className="w-1/4 h-16 lg:h-32 object-cover px-2 py-2 rounded"
              src="https://source.unsplash.com/W1yjvf5idqA"
              alt={`Product ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 lg:px-12">
        <h1 className="text-4xl">Bonsai</h1>
        <div className="text-2xl text-orange-400">
          $19.99
          <span className="ml-2 text-base line-through text-gray-400">
            $25.00
          </span>
        </div>
        <div className="mt-6 pt-6 border-t text-gray-700">
          <p className="py-2">
            The purposes of bonsai are primarily contemplation for the viewer,
            and the pleasant exercise of effort and ingenuity for the grower.
          </p>
          <p className="py-2">
            By contrast with other plant cultivation practices, bonsai is not
            intended for production of food or for medicine. Instead, bonsai
            practice focuses on long-term cultivation and shaping of one or more
            small trees growing in a container.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
