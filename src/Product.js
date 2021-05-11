import React,{useContext, useState, useEffect} from 'react';
import ProductList from './ProductList';
import {ShoppingContext} from './ShoppingContext';
import Header from './Header';
import HeaderPromotion from './Header-Promotion';
import './Product.css';
import SearchField from 'react-search-field';
import './Product.css';
import Footer from './Footer';



const Product = (props) => {
  const value = useContext(ShoppingContext);

  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  function handleChange(e){
    setFilter(e.target.value);
     console.log(filter);
    
  };
 
   useEffect(() => {
    setFilteredData(
      value.data.filter(ele => ele.category === filter)
      
    );
  }, [filter, value.data]);
 
  useEffect(()=> {
    setSearchData(value.data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
  },[search, value.data])

  console.log(search);
  return (
    <div className="container">
    <Header />
    <HeaderPromotion />
    <div className="filter">
        {/* <h2 className="filter-heading">Sort by</h2> */}
        <select onChange={handleChange} value={filter}>
          <option value="Sort by">Sort by</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men clothing</option>
          <option value="women's clothing">Women clothing</option>
        </select>
        </div>
      <div className="search-div">
      <SearchField 
      placeholder="Search..."
      onChange={(value, event) => setSearch(value)}
      />
    
      </div>
 <div className="product-list">
  {searchData.length === 0?<div className="noMatch-div"><h3>No matching items!</h3>
                                <p>Your search {search} did not match any results.</p>
                                 <p>Please check the spelling or try again with a less specific term</p>
                                 </div>:
  search?searchData.map(product =>(<ProductList title={product.title} 
                                   image={product.image} 
                                   id={product.id} 
                                   price={product.price}
                                 
                                    />)):filter && filter!== "Sort by"? filteredData.map(product =>(<ProductList title={product.title} 
                                    image={product.image} 
                                    id={product.id} 
                                    price={product.price}
                                    onAdd={value.onAdd}/>)):value.data.map(product =>(<ProductList title={product.title} 
                                    image={product.image} 
                                    id={product.id} 
                                    price={product.price}
                                    onAdd={value.onAdd}/>))}
  </div>

      <Footer />                          

                                    
    </div>

   
   
  )
}

export default Product;