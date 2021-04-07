import React, {useContext}from 'react';
import './cart.css';
import {ShoppingContext} from './ShoppingContext';
import {Link} from 'react-router-dom'

const Cart = () => {
  const value = useContext(ShoppingContext);
  console.log(value.cartItems)
  // value.cartItems.map((ele,i) => {
  //   console.log(ele);
  //   console.log(i);
  //   //console.log(ele[0]);
  //   console.log(ele.title);
  //   return ele.title;
  // })
  let picItem = value.cartItems.map((ele) => ele.image);
  console.log(picItem)
  let subtotal = value.cartItems.map((ele) => ele.price * ele.qty);
  console.log(subtotal)
  let total = subtotal.reduce((ac, cv)=> ac + cv,0)
  console.log(total)
  



  return (
<section className="basket">
<div class="cartheader">
  <h1>Shopping bag</h1>
 
</div>
  <div className="cart">
   <div className="cartItem">
   {value.cartItems.length === 0 ? <h1>Your shopping bag is Empty</h1>:value.cartItems.map((ele) => (<div>{ele.title}</div>))}
  </div>
  <div className="cartItem--price">
  {value.cartItems.map((ele) => (<div>{ele.qty}x{ele.price} kr.</div>))}
  </div>
  
  </div>
  <div className="cart cartItem--price">
   {total > 0 ? <div>Total </div>
    :null} 
  {total > 0 ? <div>{total.toFixed(2)} kr.</div>
    :null} 
  
  </div>
 
 <div className="backtohome">
 <div className="backtohome-button"><button onClick={()=>{alert('You have been checked out! Happy shopping!')}}>checkout</button></div>
 <Link className="backtohome-link" to="/">Back to Home</Link>
 </div> 

 
  </section>
      
     
 

   
 
   
  )
}

export default Cart;
