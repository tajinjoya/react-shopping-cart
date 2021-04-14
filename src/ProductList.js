import React from 'react'
import './Product.css';
import {Link} from 'react-router-dom';






const ProductList = (props) =>{
 //console.log(props)
  return (

    <ul className="product-card">
    <Link to={`/${props.id - 1}`}><li className="product-image-list" key={props.id}>
      <img src={props.image} alt=""/>
      <h3>{props.title}</h3>
      <p>{props.price} kr.</p>
      {/* <Link to={`/cart/${props.id - 1}`}><button value={props.id - 1} onClick={(e)=>(e.target.value)}>Product details</button></Link> */}
      {/* <Link to={`/cart/${props.id - 1}`}><button value={props.id -1} onClick={(e)=>(e.target.value)}>Product details</button></Link> */}
      {/* <button value={props.id -1} onClick={(e)=>props.onAdd(e.target.value)}>Add to cart</button> */}
      </li> 
      </Link>
      </ul>
  
  
  )
}

export default ProductList;
