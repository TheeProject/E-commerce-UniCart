import React from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const FooterContainer = styled.footer`
display: flex;
justify-content: space-between;
padding: 10px 20px;
background-color: #DAA520;  // This is a goldish color

.footer-text {
  color: white;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.social-icon {
  color: white;
  font-size: 20px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
}
`;

function Footer() {
  return (
    <FooterContainer>
        <div className="contact-info">
            <div>
                <FaPhone /> Phone: +254798820548
            </div>
            <div>
                <FaEnvelope /> Email: info@unicart.com
            </div>
        <div>Street: Your Street</div>
        <div>City: Nairobi</div>
        </div>
        <div className="footer-text">© {new Date().getFullYear()} UniCart</div>
        <div className="social-icons">
            <a 
            href="https://wa.me/yourNumber" 
            target="_blank" 
            rel="noopener noreferrer"
            > 
            <FaWhatsapp className="social-icon" />
            </a>
            <a 
            href="https://facebook.com/yourProfile" 
            target="_blank"
            rel="noopener noreferrer"
            >
          <FaFacebookF className="social-icon" />
        </a>
        <a
          href="https://twitter.com/yourProfile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="social-icon" />
        </a>
        <a
          href="https://instagram.com/yourProfile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
