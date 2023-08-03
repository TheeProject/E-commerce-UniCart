import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const StyledSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  position: relative;
`;

const Cart = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const CartDrawer = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  width: 300px; 
  height: 400px;
  background: white;
  padding: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

function SearchBarContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Replace this with your actual state management

  return (
    <StyledSearchBarContainer>
      <SearchBar />

      <Cart onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{cartItems.length}</span>
      </Cart>

      {isOpen && (
        <CartDrawer>
            <h3>Welcome Customer! 👋</h3>
          <p>Register with UniCart to save your cart, save products for later, view order history, & more!</p>
          <input type="text" placeholder="Enter your email to register" />
          <p>Already a customer? <a href="/login">Login</a></p>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id}>
                <p>{item.name} - ${item.price}</p>
              </div>
            ))
          ) : (
            <h2>Cart Is Empty</h2>
          )}
        </CartDrawer>
      )}
    </StyledSearchBarContainer>
  );
}

export default SearchBarContainer;