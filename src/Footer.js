import React, {useContext, useEffect, useState} from 'react';
import './Footer.css';
// import cart from './img/cart.png';
// import {ShoppingContext} from './ShoppingContext';
// import {Link} from 'react-router-dom';
import linkedin from './img/linkedin.png';
import github from './img/github.png';
import klarna from './img/klarna.png';
import visa from './img/visa.png';
import mastercard from './img/mastercard.png';
import dhl from './img/dhl.png'




const Footer = (props) => {

  return (
   <footer className="footer">
     <div className="footer-socialmedia">
     <a className="backtohome-link" href="https://www.linkedin.com/in/tajin-joya/"><img src={linkedin} alt=""/></a>
     <a className="backtohome-link" href="https://github.com/tajinjoya"><img src={github} alt=""/></a>
    </div>
    <div className="footer-border" ></div>
    <div className="payment">
    <a href=""><img src={klarna} alt=""/></a>
      <a href=""><img src={visa} alt=""/></a>
      <a href=""><img src={mastercard} alt=""/></a>
      <a href=""><img src={dhl} alt=""/></a>
    </div>
    <div className="footer-border" ></div>
    <div className="footer-info">
    <p>© 2021 Tajin Joya</p>
    </div>
   </footer>

  )
}

export default Footer;