import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStairs,
  faStar,
  faStarAndCrescent,
  faStarHalf,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  // const {product,handleAddToCart} = props;

  const { id, name, category, price, img, seller, ratings } = product;


  return (
    <div className="product">
      <img src={img} alt="product" />
      <div className="product-info">
        <p className="product-name"><i>{name}</i></p>
        <p> Catagory: {category}</p>
        <p>Price: <b> {price} $</b></p>
        <p>
          <small>Seller: <i>{seller}</i> </small>
        </p>
        <p>
          Ratting: {ratings} <small>star</small>
          <span style={{ color: "rgb(242, 208, 13)" }}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
          </span>
        </p>
        <b>SH SHOPS</b>
      </div>

      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p> Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
