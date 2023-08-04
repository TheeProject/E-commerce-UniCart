import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  let { product_name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://ecommerce.muersolutions.com/api/v1/products`);
      const products = await response.json();
      const product = products.find(p => p.product_name === decodeURIComponent(product_name));

      setProduct(product);
    };

    fetchData();
  }, [product_name]);

  const starRating = () => {
    let stars = [];
    for (let i = 0; i < product.ranking; i++) {
      stars.push(<span key={i} style={{color: '#FFA500'}}>&#9733;</span>);
    }
    return stars;
  };

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