import React from 'react'
import './Product.css';

const ProductList = (props) =>{
 
  return (

    <ul className="product-card">
     <li className="product-image" >
      <img src={props.image} alt=""/>
      <h3>{props.title}</h3>
      <p>{props.price} kr.</p>
      <button value={props.id - 1} onClick={(e)=>props.onAdd(e.target.value)}>Add to cart</button>
      </li> 
      </ul>
  
  
  )
}

export default ProductList;
