import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart} = props;

    const {id,catagory,name,price,img,seller,ratings} = product;
    
    return (
        <div className='product'>
           <img src={img} alt="product" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
          
           <p>Price:{price}</p>
           <p><small>Seller:{seller}</small></p>
           <p>Ratting: {ratings} <small>star</small></p>
           </div>

           <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
            <p> Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
         
        </div>
    );
};

export default Product;