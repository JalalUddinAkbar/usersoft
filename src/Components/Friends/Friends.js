import React from 'react';
import './Friends.css';

const Friends = (props) => {
  const cart = props.cart;
  
    console.log(cart);
    return (
        <div className="list"> 
            <ul>
                <h4 className=" bg-danger text-white friends">Your Friends: </h4>
                {
                cart.map(friends => <li>{friends.name}</li>)
                }
            </ul>
            
        </div>
    );
};

export default Friends;