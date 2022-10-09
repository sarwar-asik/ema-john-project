import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { clearAllCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './../reviewItem/ReviewItem.css'

const Order = () => {



    const {products,initialCart }= useLoaderData();
    const [cart,setCart] = useState(initialCart);

    const hendleRemoveItem = (id)=>{
        const remainingItem = cart.filter(product=>product.id!==id);
        setCart(remainingItem);
        removeFromDb(id)
    }

    const clearCart = ()=>{
        setCart([]);
        clearAllCart()
}

    return (
        <div className='shop-container'>
        <div className="orders-container">
            {
                cart.map(product =><ReviewItem key={product.id} product={product}
                    hendleRemoveItem={hendleRemoveItem}></ReviewItem>)
            }
            {
                cart.length===0 && <h2>No Cart here! Please <Link to={'/'} >shope more</Link></h2>
            }

        </div>
        <div className="cart-container">
            <Cart clearCart={clearCart} cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Order;