import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>Selected Items: {cart.length}</h4>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax:</p>
      <h4>Grand Total:</h4>
    </div>
  );
};

export default Cart;