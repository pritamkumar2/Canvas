import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";
import { useAuth } from "../../ContextApi/AppProvider";
import Loding from "../../PreLoading/Loding";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import StarRating from "../Review&Rating/StarRating";
import "./productDetails.css";
const ProductDetailSection = () => {
  const { id } = useParams();
  const { api, getSingleProduct, isSingleLoading, isLoading, singleProduct } =
    useAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const navigate = useNavigate();
  const handleSelect = (quantity) => {
    setSelectedQuantity(quantity);
  };
  const handleSelectImg = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  useEffect(() => {
    getSingleProduct(`${api}/singleProducts/${id}`);
  }, [id]);

  return (
    <div className="block lg:flex">
      {/* Product Image and Details */}
      <div className="w-full lg:w-1/2">
        {/* Product Image */}

        <div
          className="relative flex flex-wrap justify-center item-center"
          style={{ paddingBottom: "10.5%" }}
        >
          <div
            className="relative flex flex-wrap justify-center item-center aspect-w-13 aspect-h-20"
            style={{ maxWidth: "100%", maxHeight: "20rem" }}
          >
            <img
              className="h-full w-full object-contain"
              src={selectedImage || singleProduct?.imageUrl}
              alt={singleProduct?.name}
            />
          </div>
        </div>
        {/* Additional Images */}
        <div className="-mx-2 flex flex-wrap">
          {[1, 2, 3, 4]?.map((_, index) => (
            <img
              key={index}
              className="w-1/4 h-16 lg:h-32 object-cover px-2 py-2 rounded cursor-pointer"
              src="https://source.unsplash.com/W1yjvf5idqA"
              alt={`Product ${index + 1}`}
              onClick={() =>
                handleSelectImg(
                  `https://source.unsplash.com/W1yjvf5idqA?sig=${index}`
                )
              }
            />
          ))}
        </div>
      </div>
      {/* Product Details */}
      <div className="w-full lg:w-1/2 lg:px-12">
        <h1 className="text-4xl">{singleProduct?.name}</h1>
        <div className="text-2xl text-orange-400">
          <FormatPrice price={singleProduct?.price?.discount} />
          <span className="ml-2 text-base line-through text-gray-400">
            <FormatPrice price={singleProduct?.price?.regular} />
          </span>
        </div>
        {/* rate product  */}
        <div className="flex justify-start items-center">
          <div>
            <StarRating rating={singleProduct?.rating} />
          </div>
          <div className=" ml-2">
            <p>({singleProduct?.comments?.length})</p>
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}
        <br />
        <div className="mt-6 pt-6 border-t text-gray-700">
          <p className="py-2">
            The purposes of bonsai are primarily contemplation for the viewer,
            and the pleasant exercise of effort and ingenuity for the grower.
          </p>
          <p className="py-2">{singleProduct?.description}</p>
        </div>

        {/* size */}

        <div>
          <h4 className="text-2xl font-bold  text-orange-400 mt-4">
            Select Size
          </h4>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3, 4, 5]?.map((quantity) => (
              <div
                key={quantity}
                className={`border border-black rounded-md p-2 cursor-pointer ${
                  selectedQuantity === quantity
                    ? "border-gradient-blue border-2 shadow-outline"
                    : ""
                }`}
                onClick={() => handleSelect(quantity)}
              >
                <p>{quantity} X 1</p>
              </div>
            ))}
          </div>
        </div>

        {/* easy delivery */}
        <div className="flex justify-center gap-6  mt-6">
          <div>
            <div className="flex justify-center mt-6">
              <LocalShippingIcon />
            </div>
            <p className="ml-2 text-sm">fast delivery</p>
          </div>
          <div>
            <div className="flex justify-center mt-6">
              <PaymentIcon />
            </div>
            <p className="ml-2 text-sm">easy Payment</p>
          </div>

          <div>
            <div className="flex justify-center mt-6">
              <AutoModeIcon />
            </div>
            <p className="ml-2 text-sm">easy refund</p>
          </div>
        </div>
        <div>
          <button
            className="button-50 mt-6 w-full"
            role="button"
            onClick={() => {
              navigate("/Cart");
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
