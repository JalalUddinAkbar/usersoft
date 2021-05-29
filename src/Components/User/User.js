import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './User.css';


const User = (props) => {
    const {name, username, email, photo} = props.user;
    const handleAdd = props.handleAddCountry;

    return (
        <div className = "userStyle alert alert-primary" >
            <h2>{name}</h2>
            <img src= {photo} alt="" />
            <h4>Email : {email}</h4>
            <button className="btn btn-primary" onClick = {() => handleAdd(props.user)}> <FontAwesomeIcon icon={faUserPlus}/> Add Friend</button>
            
        </div>
    );
};

export default User;