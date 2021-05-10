import React, {useContext}from 'react';
import './ProductDetails.css';
import {ShoppingContext} from './ShoppingContext';
import {Link, useParams} from 'react-router-dom';
import Header from './Header';
import HeaderPromotion from './Header-Promotion';

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
    <div className="product-image img">
      { <img src={productDetails.image} alt=""/> }
      </div>
      <div className="product--info">
       <h3>{productDetails.title}</h3>
      <p>Product details: {productDetails.description}</p>
      <h3>Price: {productDetails.price} kr.</h3>
      <button className="Product-details-button" value={id} onClick={(e)=>value.onAdd(e.target.value)}>Add to cart</button>
      {/* <Button value={id} onClick={(e)=>value.onAdd(e.target.value)}>Add to cart</Button> */}
      </div>
      </div>
      <div className="backtohome">
      {/* <Header /> */}
      <Link className="backtohome-link" to="/">Back to Home</Link>
      </div> 
        </div>
            
      )
    }



export default ProductDetails;
