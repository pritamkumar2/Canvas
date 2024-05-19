const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "ADD_TO_CART": {
      const {
        singleProduct,
        selectedSize,
        selectedColor,
        id,
        amount,
        quantity,
      } = action.payload;
      const existingProduct = state.cart.find(
        (cartItem) => cartItem.id === id + selectedColor
      );

      if (existingProduct) {
        const updatedCart = state.cart.map((curElem) => {
          if (curElem.id === existingProduct.id) {
            const newQuantity = curElem.quantity + quantity;
            const newAmount = curElem.amount + amount * quantity;
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
      } else {
        const cartProduct = {
          id: id + selectedColor,
          name: singleProduct?.name,
          image: singleProduct?.imageUrl,
          amount: amount * quantity,
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
