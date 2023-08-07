import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import ProductDetails from "./ProductDetails";
import PaymentPage from "./PaymentPage";
import SearchBarContainer from "./SearchBarContainer"
import CheckoutPage from "./CheckoutPage";
import ContactPage from "./ContactPage";




const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1 0 auto;
`;

const FooterWrapper = styled.div`
  flex-shrink: 0;
`;

function App() {
  return (
    <Router>
     
        <PageContainer>
          <Header />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route exact path="/products/:product_name" element={<ProductDetails />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/checkout-details" element={<CheckoutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/cart" element={<SearchBarContainer/>} />
              <Route path="/contact" element={<ContactPage/>} />
            </Routes>
          </ContentWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </PageContainer>
      
    </Router>
  );
}

export default App;