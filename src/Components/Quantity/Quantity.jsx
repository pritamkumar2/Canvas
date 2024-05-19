import React, { useState } from "react";
import { useCartContext } from "../../ContextApi/Cart_context";
import axios from "axios";
import { useAuth } from "../../ContextApi/AppProvider";

const Quantity = ({ initialQuantity, onQuantityChange, products }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { dispatch } = useCartContext();
  const { user, api } = useAuth();

  const increaseQuantity = async () => {
    const id = products?.id;
    const userId = user?.msg?.id;

    try {
      const response = await axios.patch(
        `${api}/increasequantity/${userId}/${id}`
      );

      console.log("incressData ----", response.data.updatedCartItem.quantity);

      if (response.data.message === "Item quantity increased") {
        setQuantity((prevQuantity) => {
          const newQuantity = response?.data?.updatedCartItem?.quantity;
          onQuantityChange(newQuantity);
          return newQuantity;
        });
        dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
      }
    } catch (error) {
      console.error("Failed to increase quantity", error);
    }
  };

  const decreaseQuantity = async () => {
    const id = products?.id;
    const userId = user?.msg?.id;

    if (quantity > 1) {
      try {
        const response = await axios.patch(
          `${api}/decreasequantity/${userId}/${id}`
        );
        if (response.data.message === "Item quantity decreased") {
          setQuantity((prevQuantity) => {
            const newQuantity = response?.data?.updatedCartItem?.quantity;
            onQuantityChange(newQuantity);
            return newQuantity;
          });
          dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
        }
      } catch (error) {
        console.error("Failed to decrease quantity", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="px-3 py-1 bg-gray-100">{quantity}</span>
      <button
        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
