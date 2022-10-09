import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product,hendleRemoveItem}) => {


const {name,id,price,quantity,img} = product;

    return (
        <div className='review-item'>
           <div className=''>
            <img className='img-3' src={img} alt="" />
           </div>
           <div className="review-detail-container">
            <div className="review-details">
                <p>{name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>

            </div>
           
           </div>
           <div onClick={()=>hendleRemoveItem(id)} className="delete-container">
               
                <FontAwesomeIcon className='delete' icon={faTrashAlt}></FontAwesomeIcon>

            </div>
            
        </div>
    );
};

export default ReviewItem;