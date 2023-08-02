import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const StyledCartIcon = styled.div`
  color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: orange;
  }
`;

function CategoryPage() {
  const { category } = useParams(); // Access URL parameters
  const [cartCount, setCartCount] = useState(0);

  // This function will be called when an item is added to the cart.
  const addItemToCart = (item) => {
    // Add the item to the cart (not implemented here)
    // Then increment the cart count:
    setCartCount(cartCount + 1);
  }

  return (
    <div>
      <h1>{category}</h1>
      {/* Fetch and display products of this category */}
      <StyledCartIcon>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{cartCount}</span>
      </StyledCartIcon>
    </div>
  );
}

export default CategoryPage;