import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import React from 'react'

const FilterableProductTable = ({ products }) => {
  return (
    <div>
      <h1>Filterable Product Table</h1>
        <SearchBar />
      <hr />
      <ProductTable products={products} />
    </div>
  )
}

export default FilterableProductTable