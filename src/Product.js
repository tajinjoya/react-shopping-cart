import React,{useContext, useState, useEffect} from 'react';
import ProductList from './ProductList';
import {ShoppingContext} from './ShoppingContext';
import Header from './Header';
import './Product.css';



const Product = (props) => {
  const value = useContext(ShoppingContext);

  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([])

  function handleChange(e){
    setFilter(e.target.value);
     console.log(filter);
    
  };
 
   useEffect(() => {
    setFilteredData(
      value.data.filter(ele => ele.category === filter)
      
    );
  }, [filter, value.data]);
 
  console.log(filter);
  console.log(value.data.filter(ele => ele.category === filter))

  console.log(value.data);
  console.log(filteredData);
  return (
    <div className="container">
    <Header />
    <div className="filter">
        {/* <h2 className="filter-heading">Sort by</h2> */}
        <select onChange={handleChange} value={filter}>
          <option value="Sort by">Sort by</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men clothing">Men clothing</option>
          <option value="women clothing">Women clothing</option>
        </select>
        </div>
<div className="product-list">
  {filter && filter!== "Sort by"? filteredData.map(product =>(<ProductList title={product.title} 
                                    image={product.image} 
                                    id={product.id} 
                                    price={product.price}
                                    onAdd={value.onAdd}/>)):value.data.map(product =>(<ProductList title={product.title} 
                                    image={product.image} 
                                    id={product.id} 
                                    price={product.price}
                                    onAdd={value.onAdd}/>))}
                                    </div>

                                

                                    
    </div>

   


     
   

    

   
  )
}

export default Product;