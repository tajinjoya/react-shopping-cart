import React from 'react'
import { useParams,Link } from 'react-router-dom';
import './cartList.css';








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
<div className="total">Total: {total} kr.</div>
<div className="backtohome-button"><button onClick={()=>{alert('You have been checked out! Happy shopping!')}}>checkout</button></div>
      </div>
      </div>
      
  
  )
}

export default CartList;