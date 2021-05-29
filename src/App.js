import React from 'react';
import { useState } from 'react';
import './App.css';
import User from './Components/User/User';
import Cart from './Components/Cart/Cart';
import fakeData from './fakeData/user';
import Header from './Components/Header/Header';
import Friends from './Components/Friends/Friends';


function App(user) {
const [users, setUsers] = useState(fakeData);
const [cart, setCart] = useState([]);


const handleAddCountry = (user) => {
  const newCart = [...cart, user];
  setCart(newCart);
  
  
}
return (
  <div className = "Container"> 
     
     <Header> </Header>
    
     <Cart cart = {cart}></Cart>
  
    <div className = "bottompart ">
    <div className="user-container">
    <ul>
      {
        users.map(user => <User user = {user} handleAddCountry = {handleAddCountry} key = {user.id}></User>)
      }
    </ul>
  </div>
      
    <div className= "friendsadded overflow-auto rounded alert alert-primary">
        <Friends cart = {cart}></Friends>
    </div>
    </div>
  </div>
);


}

export default App;
