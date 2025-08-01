import React from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'
import '../css/main.css'

const ProductTable = ({products}) => {
  const grouped = products.reduce((accumulator, currentProduct) => {
    if (!accumulator[currentProduct.category]) {
      accumulator[currentProduct.category] = []
    }
    accumulator[currentProduct.category].push(currentProduct)
    return accumulator
  }, {})


  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(grouped).map(([category, products], i) => (
          <React.Fragment key={i}>
            <ProductCategoryRow category={category} />
            {products.map((product, i) => (
              <ProductRow key={i} product={product} />
            ))}
          </React.Fragment>
        ))}
      </tbody>  
    </table>
  )
}

export default ProductTable