import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SearchBarContainer from './SearchBarContainer';

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin: 15px;
  padding: 15px;
  border: 1px solid #333;
  border-radius: 10px;

  img {
    max-width: 100%;
    height: auto;
  }

  h2 {
    margin: 10px 0;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ecommerce.muersolutions.com/api/v1/products');
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleProductDescription = (description) => {
    alert(description);
  };

  return (
    <div>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <ProductsContainer>
        {data && data.map((product, index) => (
          <ProductCard key={index}>
            <img src={product.product_full_image} alt={product.product_name}/>
            <h2>{product.product_name}</h2>
            <p>${product.unit_price}</p>
            <div>
              <button onClick={() => {/* add functionality to decrease quantity */}}>-</button>
              <span>0</span>
              <button onClick={() => {/* add functionality to increase quantity */}}>+</button>
            </div>
            <button onClick={() => handleProductDescription(product.product_description)}>
              Product Description
            </button>
          </ProductCard>
        ))}
      </ProductsContainer>
    </div>
  );
}

export default HomePage;