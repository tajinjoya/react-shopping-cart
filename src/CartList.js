import React from 'react';
import ReactDOM from 'react-dom';
import { useParams,Link } from 'react-router-dom';
import './cartList.css';
import Button from '@material-ui/core/Button'



const CartList = (props) =>{

  // const {id} = useParams();
  let what =props.cartData[0]
console.log(props.cartData[0]);
  
let pictureArray = props.cartData.map((ele)=> ele.image)
console.log(pictureArray)


// console.log(props)
// let data = props.cartData;
// let arrayIndex = []
//  function getdata(){
//   for (let i = 0; i < data.length; i++) {
//     return data[i]
//   }
//  } 
//  console.log(getdata())

//  for (let i = 0; i < data.length; i++) {
//   return data[i]
// }



//  console.log(singlePic[id]);
  const subTotal = []

  for (const [index, value] of props.cartData.entries()) {
    subTotal.push((value.price) * value.qty)
  }
  console.log(subTotal)
  let total = subTotal.reduce((ac, cv)=> ac +cv,0)
  console.log(total)
 
  return (
    <div className="flex-container">
    <div className="flex-child magenta">
    <ul className="main--ul">
    {props.cartData.map((value, index) => (
         <li className="cart--list" key={index}>
                <div className="cart--image">
                  <img src={value.image} alt=""/>
                   <p>{value.qty} x {value.title}</p>
                   <p>SubTotal: {value.qty * value.price} kr.</p>
                  
                </div >
                
               
                </li>
                
    ))}
 
   

    
      </ul>
      </div>
      <div className="flex-child green">
      <div style={{ borderTop: "2px solid black", marginLeft: 20, marginRight: 20, marginTop:70}}></div>
      <div className="total"><p><strong>Total: {total.toFixed(2)} kr.</strong></p></div>
      <div className="proceed" ><Button variant="contained" color="primary">Proceed</Button></div>
      <div className="checkout-input"><input type="text" placeholder="email"/></div>
      <div className="checkout-input"><input type="text" placeholder="Name"/></div>
      <div className="checkout-input"><input type="text" placeholder="Address"/></div>
      {/* <div>   <Icon icon={visaIcon} /></div> */}
      <div className="checkout-button"><Button variant="contained" color="primary" onClick={()=>{alert('You have been checked out! Happy shopping!')}}>checkout</Button></div>
      </div>
     
    
      
     
            </div>
     
      
  
  )
}

export default CartList;