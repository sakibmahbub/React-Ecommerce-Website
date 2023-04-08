import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();

  return (
    <div className="shop-container">
      <div className="products-container">Orders : {cart.length}</div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
