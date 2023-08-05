import React, { useState, createContext } from 'react';
// import UserProvider from './UserProvider';
export const UserContext = createContext();


export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (first_name, last_name, email, password) => {
    try {
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

        if (!response.ok) {
            const errorData = await response.json();
            console.log('Registration error:', errorData);
            return;
        }

        const data = await response.json();
        console.log(data); // add this line
        setUser(data);
    } catch (error) {
        console.error('Unexpected error:', error);
    }
};

    const login = async (email, password) => {
  try {
    const response = await fetch('http://ecommerce.muersolutions.com/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // Check if the response was successful
    if (response.ok) {
      const data = await response.json();
      setUser(data.user);
    } else {
      // If not, throw an error
      const errorData = await response.json();
      throw new Error(`Server responded with status code ${response.status}: ${errorData.message}`);
    }
  } catch (err) {
    // Log the error or handle it in some other way
    console.error(err);
  }
};

const value = { user, register, login };

return (
    <UserContext.Provider 
    value={value}>
        {children}
    </UserContext.Provider>
)
}