import React from 'react'
import Login from './Login';
//import Route and redirect
// define Redirect 
import {Navigate, } from 'react-router-dom'

/* A function below which checks local storage for a token and returns true if it exists */
const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};
// Path: client/src/pages/BugTracker.js
function BugTracker() {
  
  if(!checkAuth()) {
    return <Navigate to="../Login" replace={true}/>
  }
  return (
    <div>
      <h1>Bug Tracker</h1>
    </div>
  )
}

export default BugTracker;