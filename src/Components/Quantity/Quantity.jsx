import React, { useEffect, useState } from "react";
import { useCartContext } from "../../ContextApi/Cart_context";

const Quantity = ({ initialQuantity, onQuantityChange, products }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const { dispatch } = useCartContext();

  const increaseQuantity = () => {
    const id = products?.id;
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
    dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
  };

  const decreaseQuantity = () => {
    const id = products?.id;
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      });
      dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
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
