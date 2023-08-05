import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './components/App';
import { UserProvider } from './Authentication/UserContext';
import { CartProvider } from './Authentication/CartContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);