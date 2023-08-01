import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 10px 20px;
  margin-bottom: 5px;

  nav {
    display: flex;
    gap: 20px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .bm-burger-button {
    display: none;
  }

  .menu-item {
    display: none;
  }

  @media (max-width: 768px) {
    .bm-burger-button {
      display: block;
    }

    .menu-item {
      display: block;
    }

    nav {
      display: none;
    }
  }
`;

const HOME_URL = "/";

function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <img src="your_logo_source" alt="UniCart Logo" />
        <h1>UniCart</h1>
      </div>
      <Menu right customBurgerIcon={<div className="bm-burger-button">Menu</div>}>
        <Link to={HOME_URL} className="menu-item">HOME</Link>
        <Link to="/about" className="menu-item">ABOUT</Link>
        <Link to="/contact" className="menu-item">CONTACT</Link>
        <Link className="login menu-item" to="/login">LOGIN</Link>
      </Menu>
      <nav>
        <Link to={HOME_URL}>HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link className="login" to="/login">LOGIN</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;