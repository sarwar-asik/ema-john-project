import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Order Summery</h4>
            <p>Selected Item : <span>{cart.length}</span> </p>
        </div>
    );
};

export default Cart;