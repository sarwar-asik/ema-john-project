import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, clearAllCart, getStoreCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './shop.css'



const Shop = () => {


    

const products = useLoaderData();

const [cart,setCart] =useState([])


const clearCart = ()=>{
        setCart([]);
        clearAllCart()
}

useEffect(()=>{
const storedCart = getStoreCart();
const savedCart = [];
for (const id in storedCart){
        const addedProduct = products.find(product =>product.id ===id );
         if(addedProduct){

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
         }

    }
    setCart(savedCart);
},[products])


// for button onClick //////
const handleAddToCart = (selectedProduct) =>{
    // console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
    }
    else{
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
    }
    
    setCart(newCart);
    addToDb(selectedProduct.id);
}
   
return (
    <div className='shop-container'>
        <div className="products-container">
            {
                products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }
        </div>
        <div className="cart-container">
            <Cart clearCart={clearCart} cart={cart}></Cart>
        </div>
    </div>
);

};

export default Shop;