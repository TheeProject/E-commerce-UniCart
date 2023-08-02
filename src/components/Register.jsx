import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(firstName, lastName, email, password);
  };

  return (
    <div>
        <h1>Register</h1>
    </div>
    // Add your form fields here
  );
}

export default Register;