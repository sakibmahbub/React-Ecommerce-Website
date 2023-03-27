import React, { useEffect } from "react";
import "./Shop.css";

const Shop = () => {
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>Product goes here</h2>
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
