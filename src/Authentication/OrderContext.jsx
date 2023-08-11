import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const [addresses, setAddresses] = useState([]);
    const [address, setAddress] = useState({});
    const [payments, setPayments] = useState([]);
  
    return (
      <OrderContext.Provider
        value={{
          orders,
          setOrders,
          order,
          setOrder,
          addresses,
          setAddresses,
          address,
          setAddress,
          payments,
          setPayments,
        }}
      >
        {children}
      </OrderContext.Provider>
    );
  };