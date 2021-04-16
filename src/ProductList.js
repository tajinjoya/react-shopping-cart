import React from 'react'
import './Product.css';
import {Link} from 'react-router-dom';


const ProductList = (props) =>{

  return (

    <ul className="product-card">
    <Link to={`/${props.id - 1}`}><li className="product-image-list" key={props.id}>
      <img src={props.image} alt=""/>
      <h3>{props.title}</h3>
      <p>{props.price} kr.</p>
      </li> 
      </Link>
      </ul>
  
  
  )
}

export default ProductList;
