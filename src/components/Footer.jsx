import React, { useState } from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMap,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #555;
  

  .contact-info,
  .social-icons,
  .top-brands,
  .join-us,
  .faq {
    flex-basis: 100%;
  }

  .contact-info {
    color: white;
    margin-top: 30px;
  }

  .footer-text {
    color: white;
  }

  .social-icons,
  .join-us,
  .faq {
    margin-top: 20px;
  }

  .social-icon {
    color: white;
    font-size: 20px;
    justify-content: space-between, 10px;
  }

  .top-brands,
  .join-us,
  .faq {
    color: white;
    margin-top: 20px;

    h2 {
      color: orange;
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: flex-start;

    svg {
      margin-right: 10px;
    }

    p {
      margin: 0;
      padding: 0;
      color: orange;
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 10px;
      display: ${(props) => (props.isVisible ? "block" : "none")};
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 5px;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    .contact-info,
    .social-icons,
    .top-brands,
    .join-us,
    .faq {
      flex-basis: calc(50% - 20px);
    }
  }

  @media screen and (min-width: 992px) {
    .contact-info,
    .social-icons,
    .top-brands,
    .join-us,
    .faq {
      flex-basis: calc(25% - 20px);
    }
  }
`;

function Footer() {
  const topBrands = ["Adidas", "Nivea", "Nike", "Puma", "Coca-Cola", "Oppo", "Hp"];
  const faqItems = [
    {
      question: "How do I place an order?",
      answer: "You can place an order through our website or contact our customer service. Our website provides a user-friendly ordering process, and our customer service team is available to assist you with any queries.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a variety of payment methods, including credit/debit cards and popular mobile payment options like M-Pesa. When checking out, you'll be able to choose the payment method that suits you best.",
    },
    {
      question: "How can I track my order?",
      answer: "After your order is shipped, we will send you a tracking link via email. You can use this link to track the status and location of your package. If you have any concerns, our customer service team will be happy to assist you.",
    },
    // Add more FAQ items here
  ];

  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (index) => {
    setVisibleAnswers((prevVisible) => ({
      ...prevVisible,
      [index]: !prevVisible[index],
    }));
  };

  return (
    <FooterContainer>
      <div className="contact-info">
        <div>
        Phone <FaPhone />: +254798820548
        </div>
        <div>
        Email <FaEnvelope />: <a href="mailto:info@unicart.com">info@unicart.com</a>
        </div>
        <div>Street: Kimathi</div>
        <div>Location <FaMap />: Nairobi</div>
        <div className="footer-text">© {new Date().getFullYear()} UniCart</div>
      </div>

      <div className="top-brands">
        <h2>Top Brands</h2>
        <ol>
          {topBrands.map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ol>
      </div>

      <div className="join-us">
        <h2>Join Us</h2>
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
      </div>

      <div className="faq">
        <h2>FAQ</h2>
        <ul>
          {faqItems.map((item, index) => (
            <li key={index}>
              <h3 onClick={() => toggleAnswer(index)}>{item.question}</h3>
              <p style={{ display: visibleAnswers[index] ? "block" : "none" }}>{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </FooterContainer>
  );
}

export default Footer;