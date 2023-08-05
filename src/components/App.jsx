import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import ProductDetails from './ProductDetails';
import CheckOutPage from './CheckOutPage';
import PaymentPage from './PaymentPage';


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
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/checkout-details" element={<CheckOutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
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
