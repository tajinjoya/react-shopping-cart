import React, {useContext}from 'react';
import './ProductDetails.css';
import {ShoppingContext} from './ShoppingContext';
import {Link, useParams} from 'react-router-dom';
import Header from './Header';
import HeaderPromotion from './Header-Promotion';
import Footer from './Footer';


const ProductDetails = (props) => {
  const value = useContext(ShoppingContext);
  const {id} = useParams();
 

let productDetails = value.getProduct(id);
    return (
    <div>
    <Header />
    <HeaderPromotion />
    <div className="cartheader">
    

    </div>
    <div  className="Product-details-page">
    <div className="product-image">
      <img className="product-image-img" src={productDetails.image} alt=""/>
      </div>
      <div className="product--info">
       <h3>{productDetails.title}</h3>
      <p>Product details: {productDetails.description}</p>
      <h3>Price: {productDetails.price} kr.</h3>
      <div className="Product-details-button-div">
      <button className="Product-details-button" value={id} onClick={(e)=>value.onAdd(e.target.value)}>Add to cart</button>
      </div>
      </div>
      </div>
      <div className="backtohome">
      <Footer />
    
      </div> 
        </div>
            
      )
    }



export default ProductDetails;
