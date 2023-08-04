import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SearchBarContainer from './SearchBarContainer';
import { CartContext } from '../Authentication/CartContext';


const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%; /* Full width on mobile */
  max-width: 200px; 
  height: auto;
  margin: 15px;
  padding: 15px;
  border: 1px solid #333;
  border-radius: 10px;

  @media (min-width: 768px) { /* Adjust to larger size on bigger screens */
    width: 200px;
  }

  img {
    max-width: 100%;
    max-height: 100px; /* Limit image height */
    height: auto;
    object-fit: contain; /* Ensure the entire image is visible */
  }

  h2 {
    margin: 10px 0;
    font-size: 16px;
    font-weight: bold;
  }

  button {
    background-color: orange;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 2px 2px;
    cursor: pointer;
  }
`;

const DescriptionButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 5px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 2px 2px;
  cursor: pointer;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function HomePage() {
  const [products, setProducts] = useState(null);
  const { addToCart, removeFromCart } = useContext(CartContext); // destructure the needed functions
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ecommerce.muersolutions.com/api/v1/products');
        const jsonData = await response.json();

        setProducts(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  }
  // A function that filters products via names
  const filteredProducts = products && products.filter(product => 
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <SearchBarContainer>
        <SearchBar onSearch={handleSearch} />
      </SearchBarContainer>
      <ProductsContainer>
      {searchTerm !== '' ? 
(filteredProducts && filteredProducts.map((product, index) => {
  console.log(product);
  return (
    <ProductCard key={index}>
      <img src={product.product_full_image} alt={product.product_name}/>
      <h2>{product.product_name}</h2>
      <p>${product.unit_price}</p>
      <div>
        <button onClick={() => removeFromCart(product.index)}>-</button>
        <span>Add to Cart</span>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
      <DescriptionButton to={`/products/${index}`}>Product Description</DescriptionButton>
    </ProductCard>
  );
})) : 
(products && products.map((product, index) => {
  // console.log(product);
  return (
    <ProductCard key={index}>
      <img src={product.product_full_image} alt={product.product_name}/>
      <h2>{product.product_name}</h2>
      <p>${product.unit_price}</p>
      <div>
        <button onClick={() => removeFromCart(product.index)}>-</button>
        <span>Add to Cart</span>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
      <DescriptionButton to={`/products/${encodeURIComponent(product.product_name)}`}>Product Description</DescriptionButton>
    </ProductCard>
  );
}))}
      </ProductsContainer>
    </div>
  );
} 

export default HomePage;