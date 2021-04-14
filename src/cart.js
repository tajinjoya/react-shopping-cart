import React, {useContext}from 'react';
import './cart.css';
import {ShoppingContext} from './ShoppingContext';
import {Link} from 'react-router-dom';
import Header from './Header';
import CartList from './CartList';
import { useParams} from 'react-router-dom';

const Cart = (props) => {
  const value = useContext(ShoppingContext);
  console.log(value.removeItem);
 let remove = value.removeItem;
 let cartData = value.cartItems.flat(Infinity);
 const {id} = useParams();
 console.log(id)
  // console.log(value.cartItems.slice(1))
  // value.cartItems.map((ele,i) => {
  //   console.log(ele);
  //   console.log(i);
  //   //console.log(ele[0]);
  //   console.log(ele.title);
  //   return ele.title;
  // })

  // let local =JSON.parse(window.localStorage.getItem('cartItems'));
  // let cartData = local.flat(Infinity)

  // let picItems = cartData.map((ele) => ele.image);
  // console.log(picItems)
  // let subtotal = cartData.map((ele) => ele.price * ele.qty);
  // console.log(subtotal)
  // let total = subtotal.reduce((ac, cv)=> ac + cv,0)
  // console.log(total)




return (
<section className="basket">
<div className="cartheader">
  <Header />
 
</div>
 <div>
 <CartList cartData={cartData} remove={remove}/>
 </div>
 
 <div className="backtohome">
 {/* <div className="backtohome-button"><button onClick={()=>{alert('You have been checked out! Happy shopping!')}}>checkout</button></div> */}
 <Link className="backtohome-link" to="/">Back to Home</Link>
 </div> 

 
  </section>
      
     
 

   
 
   
  )
}

export default Cart;