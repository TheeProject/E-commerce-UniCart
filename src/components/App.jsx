import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import ProductDetails from "./ProductDetails";
// import { CheckoutProvider, CheckoutPage } from "../Authentication/CheckoutProvider";
import PaymentPage from "./PaymentPage";
import SearchBarContainer from "./SearchBarContainer"
import CheckoutPage from "./CheckoutPage";



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
      {/* <CheckoutProvider> */}
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
            </Routes>
          </ContentWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </PageContainer>
      {/* </CheckoutProvider> */}
    </Router>
  );
}

export default App;