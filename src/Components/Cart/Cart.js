import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    return (
        <div className = 'cart'>
            <h3>User Added: {cart.length} </h3>
            
        </div>
    );
};

export default Cart;