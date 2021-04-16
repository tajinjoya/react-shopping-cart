import React, {useContext}from 'react';
import './cart.css';
import {ShoppingContext} from './ShoppingContext';
import {Link} from 'react-router-dom';
import Header from './Header';
import CartList from './CartList';
import { useParams} from 'react-router-dom';


const Cart = (props) => {
const value = useContext(ShoppingContext);
// console.log(value.removeItem);
 let remove = value.removeItem;
 let cartData = value.cartItems.flat(Infinity);
 const {id} = useParams();
//  console.log(id)

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
