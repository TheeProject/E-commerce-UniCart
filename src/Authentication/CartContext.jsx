import React, { createContext, useReducer } from 'react';

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer
const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

// Create Context
export const CartContext = createContext(); // Ensure this is the only declaration of CartContext

// Provider Component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };