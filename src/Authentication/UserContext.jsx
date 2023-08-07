import React, { useState, createContext } from 'react';
// import UserProvider from './UserProvider';
export const UserContext = createContext();


export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const register = (first_name, last_name, email, username, password) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = existingUsers.some(user => user.email === email || user.username === username);
  
      if (userExists) {
        console.error('User already exists');
        return;
      }
  
      const newUser = {
        first_name,
        last_name,
        email,
        username,
        password,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
      };
  
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const login = (username, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } else {
        console.error('Invalid username or password');
      }
    } catch (err) {
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