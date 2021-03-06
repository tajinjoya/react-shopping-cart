import React, {useContext, useEffect, useState} from 'react';
import './Header.css';
import cart from './img/cart.png';
import {ShoppingContext} from './ShoppingContext';
import {Link} from 'react-router-dom';



const Header = (props) => {
  const value = useContext(ShoppingContext);
  // const[totalQty, setTotalQty] = useState()
  // useEffect(()=> {
  //   setTotalQty(value.cartItems.map(ele => ele.qty).reduce((ac, cv)=> ac + cv,0));
  // }, [totalQty])
let totalQty = value.cartItems.map(ele => ele.qty).reduce((ac, cv)=> ac + cv,0);

  
  
  return (
   <header className="header">
     <div>
      <Link to="/"><h3 className="shopname">Bazaar.com</h3> <p className="slogan">Everything at your door step!</p></Link>
     </div>
     <div> 
     <Link to="/cart" className="Shopping-bag-header-image-link"> < img className="Shopping-bag-header-image" src={cart} alt=""/> </Link>
     <Link to="/cart"className="Shopping-bag-header-link"><p className="Shopping-bag-header" >Shopping bag({totalQty})</p></Link>
      </div>
   </header>

  )
}

export default Header;
