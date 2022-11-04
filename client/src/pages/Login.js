import React from 'react'
import { Link } from 'react-router-dom';
// A function to handle the demo login
 function demoLogin() {
  // Create a new FormData object
  const formData = new FormData();
  // Append the email and password to the formData object
  formData.apppend('DEMO', 'DEMO');
  // Send a post request to the backend
  fetch('/api/users/login', {
    method: 'POST',
    body: formData,
  })
    // If the response is ok, redirect to the bugtracker page
    .then((res) => {
      if (res.ok) {
        window.location.href = '/bugtracker';
      }
    })
    // If there's an error, log the error to the console
    .catch((err) => console.log(err));
}

function Login() {
  return (
    /* A login form below with a username and password field and submit button */
    <div>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
        <button type="button">Demo Login</button>
      </form>
    
    <p>Don't have an account? 
      <Link to="../Register"><br/>Register</Link>
    </p>
    //I am using react for front end, express for back
    </div>


  )
}

export default Login