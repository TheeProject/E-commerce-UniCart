import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './components/App';
import { UserProvider } from './Authentication/UserContext';
import {  CartProvider } from './Authentication/CartContext';
import {  ProductsProvider } from './Authentication/ProductsContext';
import { OrderProvider } from './Authentication/OrderContext'
// import { CheckoutProvider } from './Authentication/CheckoutProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
);
