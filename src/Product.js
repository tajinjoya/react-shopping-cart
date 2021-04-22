import React,{useContext, useState, useEffect} from 'react';
import ProductList from './ProductList';
import {ShoppingContext} from './ShoppingContext';
import Header from './Header';
import './Product.css';
// import Search from './Search';
// import SearchField from 'react-search-field';
import './Product.css';



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
      <div className="search-div">
      {/* <SearchField 
      placeholder='Search item'
      onChange={(e) => setSearch(e.target.value)}
      /> */}
        {/* <Search data={value.data}/> */}
        <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
    />
      </div>
<div className="product-list">
  {search?searchData.map(product =>(<ProductList title={product.title} 
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

                                

                                    
    </div>

   
   
  )
}

export default Product;