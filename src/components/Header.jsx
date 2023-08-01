import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #DAA520; // This is a goldish color
  padding: 10px 20px;

  nav {
    display: flex;
    gap: 20px;
  }
  
  .login {
    margin-left: auto;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/products">Products</Link> */}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link className="login" to="/login">LogIn</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;