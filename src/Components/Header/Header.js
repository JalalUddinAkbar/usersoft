import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src= {logo} alt="" />
            <nav>
                <a href="/home"> Home </a>
                <a href="/friends">Your Friends</a>
                <a href="/request">See Request</a>
            </nav>
        </div>
    );
};

export default Header;