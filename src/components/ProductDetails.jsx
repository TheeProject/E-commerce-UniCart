// ProductDetails.jsx
import React from 'react';

function ProductDetails({ product, onClose }) {
  return (
    <div>
      <h2>{product.product_name}</h2>
      <p>{product.product_description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ProductDetails;
