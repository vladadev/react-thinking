import data from './data/data.json'
import FilterableProductTable from './components/FilterableProductTable'
import { useState } from 'react'

function App() {
  return (
    <FilterableProductTable products={data} />
  )
}

export default App

