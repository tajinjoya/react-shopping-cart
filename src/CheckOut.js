import React from 'react';
import klarna from './img/klarna.png';
import visa from './img/visa.png';
import mastercard from './img/mastercard.png';
import './CheckOut.css';

const CheckOut =(props)  => {
  let orderValue = props.total.toFixed(2);
  let discount = (props.total > 399? props.total * 0.2 : 0).toFixed(2);
  let delivery = 100;
  let totalDue = orderValue * 1 + discount *1 + delivery*1;
  console.log('total due' + totalDue)
  return (
  <div className="checkout-div">
   
   <div className="total"><p><strong>Order value: {orderValue} kr.</strong></p>
   <p><strong>Discount: {discount} kr.</strong></p>
   <p><strong>Delivery: {100} kr.</strong></p>
   </div>
   <div style={{ borderTop: "2px solid black", marginLeft: 20, marginRight: 20, marginBottom:20}}></div>
   <div className="total"><p><strong>Total: {totalDue} kr.</strong></p>
   </div>
   <div className="checkout-button"><button onClick={()=>{alert('You have been checked out! Happy shopping!')}}>checkout</button></div>
   <div className="checkout-payment">
     <p checkout-payment-text>we accept</p>
      <a className="checkout-payment-logo" href=""><img src={klarna} alt=""/></a>
      <a className="checkout-payment-logo" href=""><img src={visa} alt=""/></a>
      <a className="checkout-payment-logo"href=""><img src={mastercard} alt=""/></a>
      <p>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
      <p>28 days withdrawal and free returns. Read more about <a href="">return and refund policy</a></p>
   </div>
   </div>
  )
}

export default CheckOut;
