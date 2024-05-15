const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const {
        singleProduct,
        selectedSize,
        selectedColor,
        id,
        amount,
        quantity,
      } = action.payload;
      const existingProductIndex = state?.cart.find(
        (carItem) => carItem.id === id + selectedColor
      );

      if (existingProductIndex) {
        const updatedCart = state.cart.map((curElem) => {
          if (curElem.id === existingProductIndex.id) {
            const quantitys = curElem.quantity + quantity;
            const newAmount = curElem.amount + amount * quantity;
            return {
              ...curElem,
              quantity: quantitys,
              amount: newAmount,
            };
          }
          return curElem;
        });

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const cartProduct = {
          id: id + selectedColor,
          name: singleProduct?.name,
          image: singleProduct?.imageUrl,
          amount: amount * quantity, // Correct calculation here
          size: selectedSize,
          colour: selectedColor,
          product: singleProduct,
          quantity,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }

    case "REMOVE_ITEM": {
      const { id: itemId } = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== itemId),
      };
    }

    case "UPDATE_CART_ITEM": {
      const { cart: updatedCart } = action.payload;
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "INCREASE_QUANTITY": {
      const { id } = action.payload;

      const updatedCart = state.cart.map((curElem) => {
        if (curElem.id === id) {
          const newQuantity = curElem.quantity + 1;
          const newAmount = (curElem.amount * newQuantity) / curElem.quantity;
          return {
            ...curElem,
            quantity: newQuantity,
            amount: newAmount,
          };
        }
        return curElem;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "DECREASE_QUANTITY": {
      const { id } = action.payload;
      const updatedCart = state.cart
        .map((curElem) => {
          if (curElem.id === id && curElem.quantity > 1) {
            const newAmount =
              curElem.amount - curElem.amount / curElem.quantity;
            return {
              ...curElem,
              quantity: curElem.quantity - 1,
              amount: newAmount,
            };
          }
          return curElem;
        })
        .filter((item) => item.quantity > 0);

      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
};
export default cartReducer;
