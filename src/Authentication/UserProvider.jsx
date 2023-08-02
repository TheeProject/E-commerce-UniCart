import React, { useState } from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (first_name, last_name, email, password) => {
    const response = await fetch('http://ecommerce.muersolutions.com/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
      }),
    });

    const data = await response.json();
    setUser(data);
  };

  const login = async (username, password) => {
    const response = await fetch('http://ecommerce.muersolutions.com/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    setUser(data.user);
  };

  const value = { user, register, login };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;