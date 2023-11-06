import React from 'react'

import { useState } from "react";
import './Signup.css'
import axios from 'axios';

const Signup = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          // Use Axios to send a POST request with the form data
          await axios.post('http://localhost:5000/api/signup', credentials);
          alert('User created successfully');
          setCredentials({
            username: '',
            email: '',
            password:'',
          });
          // Clear the form fields or navigate to another page as needed
        } catch (error) {
          console.error('Error creating user:', error);
          alert('Error creating user');
        }
      }; 

  return (
    
    <div>
         <div class='bold-line'></div>
<div class='container'>
  <div class='window'>
    <div class='overlay'></div>
    <div class='content'>
      <div class='welcome'>Hello There!</div>
      <div class='input-fields'>
        <input type='text' placeholder='Username' class='input-line full-width' name='username'  value={credentials.username}
                onChange={handleChange}></input>
        <input type='email' placeholder='Email' class='input-line full-width' name='email'  value={credentials.email}
                onChange={handleChange}></input>
        <input type='password' placeholder='Password' class='input-line full-width' name='password'  value={credentials.password}
                onChange={handleChange}></input>
      </div>
      <div><button class='ghost-round full-width' onClick={handleClick}>Create Account</button></div>
    </div>
  </div>
</div>     
        </div>
)}

export default Signup