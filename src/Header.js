import React, {useContext} from 'react';
import './Header.css';
import cart from './img/366-3668689_transparent-shopping-cart-logo-hd-png-download.png';
import {ShoppingContext} from './ShoppingContext';
import {Link} from 'react-router-dom'

const Header = (props) => {
  const value = useContext(ShoppingContext);
  let totalQty =value.cartItems.map(ele => ele.qty).reduce((ac, cv)=> ac + cv,0);
  return (
   <header className="header">
     <div>
 
      <Link to="/"><h3>Shopping Cart</h3></Link>
 
 
     </div>
     <div> 
     <Link to="/cart"> <img src={cart} alt=""/> </Link>
    
     <Link to="/cart"> <p>Shopping bag({totalQty})</p></Link>
      </div>
   </header>

  )
}

export default Header;
