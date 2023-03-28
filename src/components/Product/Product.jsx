import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
    </div>
  );
};

export default Product;
