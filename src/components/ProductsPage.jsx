import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #DAA520; // This is a goldish color
`;

const Category = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #B8860B; // Darken on hover
  }
`;

function ProductsPage() {
  const categories = ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5', 'Cat 6'];

  return (
    <CategoriesContainer>
      {categories.map((cat, index) => (
        <Category key={index} to={`/products/${cat.toLowerCase().replace(' ', '-')}`}>
          {cat}
        </Category>
      ))}
    </CategoriesContainer>
  );
}

export default ProductsPage;