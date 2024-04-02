import React from "react";
import "./cart.css";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus, BsFillTrashFill } from "react-icons/bs";

const Cart = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "product1.jpg",
      discountPrice: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      image: "product2.jpg",
      discountPrice: 20,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      image: "product3.jpg",
      discountPrice: 30,
      quantity: 1,
    },
  ];

  // Dummy totalQuantity and totalPrice
  const totalQuantity = products.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.discountPrice * curr.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="container">
        <h3>Your cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">picture</div>
                    <div className="col-2">name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">totalPrice</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>

                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={`../../images/${product.image}`} alt="" />
                      </div>
                    </div>
                    <div className="col-2">{product.name}</div>
                    <div className="col-2">
                      <div className="cart__price">
                        {currencyFormatter.format(product.discountPrice, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="details__info cart_incDec">
                        <div className="details__incDec">
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__total text-center">
                        {currencyFormatter.format(
                          product.discountPrice * product.quantity,
                          {
                            code: "USD",
                          }
                        )}
                      </div>
                    </div>
                    <div
                      className="col-2 cart__remove"
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: product.id })
                      }
                    >
                      <BsFillTrashFill />
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">summary</div>
                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6">Total Items:</div>
                      <div className="col-6">{totalQuantity}</div>
                    </div>
                    <div className="row mb-10">
                      <div className="col-6">total Price</div>
                      <div className="col-6">
                        {currencyFormatter.format(totalPrice, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                    <button type="button" className="checkout">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
