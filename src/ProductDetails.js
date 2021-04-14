// import React,{useContext, useEffect, useState} from 'react';
// import {ShoppingContext} from './ShoppingContext';
// import { useParams } from 'react-router-dom';

// const ProductDetails =(props) =>{
//   const value = useContext(ShoppingContext);
//   console.log(value.data);
// // const [productDetails, setProductDetails] = useState({});

//   //console.log(props.match)
//   const {id} = useParams(); //Mushi
//   console.log(id);
//   let paramsID = props.match.params.id;
//   console.log(paramsID)
//   // let ID = props.match.url.split('')[1];
//   // console.log(props.match.url.split('')[1])
//   let productDetails = value.getProduct(id);
//   console.log(productDetails)
//   // setProductDetails(value.getProduct(id));



// // useEffect(()=>{
// //   window.localStorage.setItem('productDetails', JSON.stringify(productDetails));
// // },[productDetails]);

// window.localStorage.setItem('productDetails', JSON.stringify(productDetails))
// console.log(productDetails);
// const details = JSON.parse(window.localStorage.getItem('productDetails'));

// console.log(details)


//   return (
//     <div>

//       hello
      
//       {/* <div>
//       <img src={JSON.parse(window.localStorage.getItem('productDetails')).image} alt=""/> 
//       </div>
//       <div>
//       Product description: {JSON.parse(window.localStorage.getItem('productDetails')).description}
//       </div> */}
//       <div>
//       <img src={details.image} alt=""/> 
//       </div>
//       <div>
//       Product description: {details.description}
//       </div>
       


//     </div>
//   )
// }

import React, {useContext}from 'react';
import './ProductDetails.css';
import {ShoppingContext} from './ShoppingContext';
import {Link, useParams} from 'react-router-dom';
import Header from './Header';
import Button from '@material-ui/core/Button';

const ProductDetails = (props) => {
  const value = useContext(ShoppingContext);
  const {id} = useParams();
  console.log(value);
  console.log(id)


let productDetails = value.getProduct(id);
console.log(productDetails);

//let productDetailsCopy = {...productDetails1};
//console.log(productDetailsCopy);
// array.push(productDetailsCopy)
// console.log(array.map(ele => ele.description));
// console.log(productDetails1)

//let stringProductDetails = JSON.stringify(productDetails);
//console.log(stringProductDetails)
//window.localStorage.setItem('productDetails1', stringProductDetails);
//  console.log(productDetails);
  // console.log(props)

  // let picItem = cartData.map((ele) => ele.image);
  // console.log(picItem)
  // let title= cartData.map((ele) => ele.title);
  // let price = cartData.map((ele) => ele.price);
  // let catagory = cartData.map((ele) => ele.catagory);
  // let description = cartData.map((ele) => ele.description);
 
  


//console.log(productDetails1)

return (
<div>

<div className="cartheader">
  <Header />

</div>
<div  className="Product-details-page">
<div className="product-image img">
 
   { <img src={productDetails.image} alt=""/> }

  </div>
  <div className="product--info">
  { <h3>{productDetails.title}</h3>}
  <p>Product details: {productDetails.description}</p>
  <h3>Price: {productDetails.price} kr.</h3>

 
  <button value={id} onClick={(e)=>value.onAdd(e.target.value)}>Add to cart</button>
  </div>

 

 
</div>

 
 <div className="backtohome">

 <Link className="backtohome-link" to="/">Back to Home</Link>
 </div> 

 
  </div>
      
     
 

   
 
   
  )
}



export default ProductDetails;
