import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { UserContext } from "../Authentication/UserContext";

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
    position: "fixed",
    width: "30px",
    height: "30px",
    left: "20px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#ffff",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    top: "22px",
    left: "0px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "25%",
    left: "10px",
  },
  bmMenu: {
    background: "orange",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em 0",
    width: "200px",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.5em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgreen;
  padding: 10px 20px;
  margin-bottom: 5px;
  position: relative;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  gap: 100px;
  margin-top: 70px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const LogoIcon = styled(FontAwesomeIcon)`
  margin-right: 10x;
`;

const LogoText = styled.h1`
  font-size: 2.5em;
  margin-right: 10px;
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
`;

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AvatarIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  margin-right: 10px;
  // margin-b
`;

const AvatarText = styled.span`
  font-size: 1em;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const HOME_URL = "/";

function Header() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const { user, login } = useContext(UserContext); // Get user data from context
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    // Simulate a login action
    login("username", "password"); // Provide actual username and password
  };

  const handleLogout = () => {
    // Simulate a logout action
    localStorage.removeItem("user");
    setDropdownOpen(false);
  };

  return (
    <StyledHeader>
      <LogoContainer>
      <div className="logo">
      <LogoIcon icon={faShoppingCart} size="4x" />
      <LogoText>
          <strong >UniCart</strong>
        </LogoText>
      </div>
      </LogoContainer>
      {isSmallScreen ? (
        <MenuIcon>
        <Menu left styles={styles}>
          <Link to={HOME_URL} className="menu-item">
            Home
          </Link>
          <Link to="/about" className="menu-item">
            About
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </Menu>
        </MenuIcon>
      ) : (
        <Nav>
          <Link to={HOME_URL}>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </Nav>
        )}
          <div>
        {user && user.isLoggedIn ? (
          <UserAvatar>
            <AvatarIcon icon={faUserCircle} />
            <AvatarText onClick={handleDropdownToggle}>{user.username}</AvatarText>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            )}
          </UserAvatar>
        ) : (
          <Link to="/login/" onClick={handleLogin}>
            Account
          </Link>
        )}
      </div>
  
    </StyledHeader>
  );

}

export default Header;
