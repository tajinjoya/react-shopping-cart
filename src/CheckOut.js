import React from 'react';
import klarna from './img/klarna.png';
import visa from './img/visa.png';
import mastercard from './img/mastercard.png';
import './CheckOut.css';

const CheckOut =(props)  => {
  return (
  <div className="checkout-div">
   
   <div className="total"><p><strong>Order value: {props.total.toFixed(2)} kr.</strong></p>
   <p><strong>Discount: {20} kr.</strong></p>
   <p><strong>Delivery: {100} kr.</strong></p>
   </div>
   <div style={{ borderTop: "2px solid black", marginLeft: 20, marginRight: 20, marginBottom:20}}></div>
   <div className="total"><p><strong>Total: {props.total.toFixed(2)} kr.</strong></p>
   </div>
   <div className="checkout-button"><button onClick={()=>{alert('You have been checked out! Happy shopping!')}}>checkout</button></div>
   <div className="checkout-payment">
     <p checkout-payment-text>we accept</p>
      <a className="checkout-payment-logo" href=""><img src={klarna} alt=""/></a>
      <a className="checkout-payment-logo" href=""><img src={visa} alt=""/></a>
      <a className="checkout-payment-logo"href=""><img src={mastercard} alt=""/></a>
      <p>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
      <p>28 days withdrawal and free returns. Read more about return and refund policy.</p>
   </div>
   </div>
  )
}

export default CheckOut;
