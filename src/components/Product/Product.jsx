import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, price, seller, quantity } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
    </div>
  );
};

export default Product;