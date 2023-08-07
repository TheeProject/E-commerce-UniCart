import React, { createContext, useReducer, useState, useContext } from 'react';

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_TOTAL = 'UPDATE_TOTAL';
const UPDATE_STATUS = 'UPDATE_STATUS';

// Reducer
const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case UPDATE_TOTAL:
      return { ...state, total: action.payload };
    case UPDATE_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

// Create Context
export const CartContext = createContext();
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider Component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    total: 0,
    status: "Order Assigned" // Default status
  });
  const [cart, setCart] = useState([]); // Initialize with an empty cart or load from local storage

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  
  // Additional actions to update total and status if needed
  const updateTotal = (total) => {
    dispatch({ type: UPDATE_TOTAL, payload: total });
  };

  const updateStatus = (status) => {
    dispatch({ type: UPDATE_STATUS, payload: status });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateTotal, updateStatus, setCart, cart}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };