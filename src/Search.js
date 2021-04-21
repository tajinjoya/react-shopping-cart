import React, {useState} from 'react';
import './Search.css';
import './Product.css';

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="search">
      {/* <h1>Search</h1> */}
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
      ))} */}
    </div>

  )
}

export default Search;
