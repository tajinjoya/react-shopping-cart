import React from 'react'
import './Product.css';
import {Link} from 'react-router-dom';


const ProductList = (props) =>{

  return (

    <ul className="product-card">
    <Link className="container-link" to={`/${props.id - 1}`}><li className="product-image-list" key={props.id}>
      <img src={props.image} alt=""/>
      <a>See details</a>
      <h3>{props.title}</h3>
      <p>{props.price} kr.</p>
      {/* <button className="hidden">See details</button> */}
      </li> 
      </Link>
      </ul>
  
  
  )
}

export default ProductList;
