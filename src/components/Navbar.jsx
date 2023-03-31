import React, { useState, useEffect,useRef } from "react";
import { Button, Menu, Drawer,Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import{FaBars,FaTimes} from 'react-icons/fa'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import '../nav.css';
import icon from "../images/crypto.png"


export const Navbar = () => {
 
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle('responsive_nav')
    }
  return (
<>
    <header>
    <div className="logo-container">
        <Avatar src={icon} size="large" />
        
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoHub</Link>
        </Typography.Title>
</div>
        <nav ref={navRef}>
        
            <Link to="/">Home</Link>
        
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
       
            <Link to="/news">News</Link>
       
          <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes/></button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
  
  
    </>
  );
};

export default Navbar;
