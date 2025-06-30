import React from 'react'
import '../css/searchBar.css'

const SearchBar = () => {
  return (
    <div>
      <input type="text" id="searchbar" placeholder="Search..." />
      <br />
      <input type="checkbox" id="checkbox" /> 
      <label htmlFor="checkbox">Only show products in stock</label>
    </div>
  )
}

export default SearchBar