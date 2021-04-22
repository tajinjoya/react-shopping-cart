// import React, {useState, useEffect} from 'react';
// import './Search.css';
// import './Product.css';
// import ProductList from './ProductList';

// const Search = (props) => {
//   console.log(props.data)
//   const [search, setSearch] = useState("");
//   const [searchData, setSearchData] = useState([]);

//   useEffect(()=> {
//     setSearchData(props.data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
//   },[search, props.data])
//   // console.log(props.data.map(item => item.title))
//   console.log(searchData);
//   return (
//     <div className="search">
//       <input
//         type="text"
//         placeholder="Search"
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {/* {searchData(product =>(<ProductList title={product.title} 
//                                     image={product.image} 
//                                     id={product.id} 
//                                     price={product.price}
//                                     />))} */}
//       {/* {filteredCountries.map((country, idx) => (
//         <CountryDetail key={idx} {...country} />
//       ))} */}
//     </div>

//   )
// }

// export default Search;
