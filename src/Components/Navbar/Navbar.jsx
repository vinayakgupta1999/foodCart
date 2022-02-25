import React from 'react'
import './navbar.css'
import {useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = (props) => {
    const navigate = useNavigate();
    const mycart=useSelector((state) => state.shopReducer.cart);
    

    return (
        <div className="navbar">
            <div className="left-nav">
                <img src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="logo" alt="logo" />
            </div>

            <div className="right-nav">
                <button className="login-logout-btn" onClick={()=>{navigate('/')}}>Home</button>
                    <div onClick={()=>{navigate('/cart')}}>
                    <button><i className="fa fa-shopping-cart"></i></button>
                    <span className="total-cart-item">{mycart.length}</span>
                    </div>
               
                
            </div>

        </div>
    )
}

export default Navbar
