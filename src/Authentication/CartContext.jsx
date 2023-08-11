import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItemIndex = cartProducts.findIndex((cartItem) => cartItem.index === item.index); // Assuming each item has a unique id
  
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update the quantity
      const updatedCart = [...cartProducts];
      updatedCart[existingItemIndex].quantity += 1;
      setCartProducts(updatedCart);
    } else {
      // If the item is not in the cart, add it
      setCartProducts([...cartProducts, { ...item, quantity: 1 }]);
    }
  
    // Calculate the total based on the current state of the cart
    const newTotal = cartProducts.reduce((acc, product) => acc + product.unit_price * product.quantity, 0);
    setTotal(newTotal + item.unit_price); // Add the price of the newly added item
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const existingItem = cartProducts.find((cartItem) => cartItem.index === index);
  
    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedCart = cartProducts.map((cartItem) =>
          cartItem.index === index
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        setCartProducts(updatedCart);
      } else {
        const updatedCart = cartProducts.filter((cartItem) => cartItem.index !== index);
        setCartProducts(updatedCart);
      }
      setTotal(total - existingItem.unit_price);
    }
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};