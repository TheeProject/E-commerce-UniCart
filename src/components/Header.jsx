import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';

const Link = styled(RouterLink)`
  text-decoration: none;
  color: #fffff // If you want the link to have the same color as the text around it
  gap: 20px;

  &:hover {
    text-decoration: none; // optional, if you want the underline to appear on hover
  }
`;

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '30px',
    right: '20px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#ffff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top: '72px', 
    right: '20px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '25%',
    right: '-200px'
  },
  bmMenu: {
    background: 'orange',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em 0',
    width: '200px'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.5em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 10px 20px;
  margin-bottom: 5px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  gap: 50px;
`;
const HOME_URL = "/";

function Header() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <StyledHeader>
      <div className="logo">
      <FontAwesomeIcon icon={faShoppingCart} size="3x" />
        <h1><strong>UniCart</strong></h1>
      </div>

      {isSmallScreen ? (
        <Menu right styles={styles}>
          <Link to={HOME_URL} className="menu-item">Home</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/contact" className="menu-item">Contact</Link>
          <Link to="/login" className="menu-item">Login</Link>
        </Menu>
      ) : (
        <Nav>
          <Link to={HOME_URL}>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">LogIn</Link>
        </Nav>
      )}

    </StyledHeader>
  );
}

export default Header;