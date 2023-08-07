import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        [action.index]: (state[action.index] || 0) + action.quantity,
      };
    case 'REMOVE_FROM_CART':
      const newState = { ...state };
      delete newState[action.index];
      return newState;
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
