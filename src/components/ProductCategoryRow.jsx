import React from 'react'

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <td className='category' colSpan="2">{category}</td>
    </tr>
  )
}

export default ProductCategoryRow