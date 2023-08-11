import React, { useContext } from 'react';
import { ProductsContext } from '../Authentication/ProductsContext'; // Import the ProductsContext

function ProductDetails() {
  const { product, starRating } = useContext(ProductsContext); // Consume the context

  return product ? (
    <div>
      <img src={product.product_full_image} alt={product.product_name} style={{ width: '40%', height: '40%' }}/>
      <h2>{product.product_name}</h2>
      <p>{product.product_description}</p>
      <p><strong>Price:</strong> {product.unit_price}</p>
      <p><strong>Ranking:</strong> {starRating()}</p>
      <p><strong>Created:</strong> {product.created}</p>
      <p><strong>Updated:</strong> {product.updated}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default ProductDetails;