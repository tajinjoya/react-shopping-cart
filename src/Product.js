import React,{useContext} from 'react';
import ProductList from './ProductList';
import {ShoppingContext} from './ShoppingContext';
import Header from './Header';
import './Product.css';



const Product = (props) => {
  const value = useContext(ShoppingContext);
  

  // console.log(value)
  return (
    <div className="container">
    <Header />
  {value.data.map(product =>(<ProductList title={product.title} 
                                    image={product.image} 
                                    id={product.id} 
                                    price={product.price}
                                    onAdd={value.onAdd}/>))}
    </div>

   


     
   

    

   
  )
}

export default Product;