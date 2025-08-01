import React from "react";

const ProductRow = ({ product }) => {
  const isInStock = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <>
      <tr>
        <td>{isInStock}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
