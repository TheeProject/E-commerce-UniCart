import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
// import ProductsPage from './ProductsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import SearchBar from './SearchBar';
import CategoryPage from './CategoryPage';

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
        <h1>Welcome to UniCart</h1>
        <SearchBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            <Route path="/products/:category" element={<CategoryPage />} /> {/* Updated dynamic route */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Add more routes as needed */}
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