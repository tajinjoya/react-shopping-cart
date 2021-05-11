import React, {useContext}from 'react';
import './cart.css';
import {ShoppingContext} from './ShoppingContext';
import {Link} from 'react-router-dom';
import Header from './Header';
import HeaderPromotion from './Header-Promotion';
import CartList from './CartList';
import Footer from './Footer';
import { useParams} from 'react-router-dom';


const Cart = (props) => {
const value = useContext(ShoppingContext);
// console.log(value.removeItem);
 let remove = value.removeItem;
 let cartData = value.cartItems.flat(Infinity);
 const {id} = useParams();
//  console.log(id)

return (
<div className="main-cart">

  <Header />
  <HeaderPromotion />
 


 <CartList cartData={cartData} remove={remove}/>



 <Footer />


  </div>
  )
}

export default Cart;
