import React from 'react'

// A function to send a POST request to the server

function registerUser() {
  // Create a new FormData object
  const formData = new FormData();
  // Append the username, email, and password to the formData object
  formData.append('username', document.querySelector('input[name="username"]').value);
  formData.append('email', document.querySelector('input[name="email"]').value);
  formData.append('password', document.querySelector('input[name="password"]').value);
  // Send a post request to the backend
  fetch('http://localhost:8081/api/users/register', {
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
function register() {
  return (
    /* A form to register a new user, with a username, email and password field and a submit button */
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
     )
}

export default register