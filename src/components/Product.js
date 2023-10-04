import React from "react";

const Product = ({ name, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt="ccc"></img>
      <h4>{name}</h4>
      <h4>{price}</h4>
    </div>
  );
};

export default Product;
