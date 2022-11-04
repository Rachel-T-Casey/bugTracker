import React from 'react'
import { useState } from 'react';
// import axios 
import axios from 'axios';

// A function to send a POST request to the server


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const registerUser = async (e) => {
    e.preventDefault();
      const response = await axios.post('http://localhost:5000/api/users/register', {
      username: {username},
      email: {email},
      password: {password}
    });
    console.log(response);
  }



  return (
    /* A form to register a new user, with a username, email and password field and a submit button */
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <label>Username</label>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
     )
}

export default Register