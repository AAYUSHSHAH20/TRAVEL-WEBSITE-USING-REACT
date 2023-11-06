import React, { useState, useEffect } from "react";
import "./Signup.css";
import axios from "axios";
import jwtDecode from "jwt-decode";




const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Initialize token from local storage


  
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
   
  

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Use Axios to send a POST request to the login endpoint
      const response = await axios.post(
        "http://localhost:5000/api/login",
        credentials
      );
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem("token", token);

      // Set the token state
      setToken(token);

      alert("User logged in successfully");
      setCredentials({
        username: "",
        password: "",
      });
      // Redirect the user to a protected route or another page as needed
    } catch (error) {
      console.error("Error logging in user:", error);
      alert("Error logging in user");
    }
  };


  const getUserIdFromSomewhere = () => {
  // Replace this with your logic to get the user's ID
  // For example, if you have the user's ID stored in state, you can return it here.
  return user.id; // Replace 'user.id' with your actual state variable.
};

  const handleLogout = async () => {
    try {
      // Clear the token from local storage
      localStorage.removeItem("token");
      
      // Update the state to indicate that the user is logged out
      setToken("");
      
      // Make an API request to inform the server about the logout
      const response = await axios.post("http://localhost:5000/api/logout", {
        userId: getUserIdFromSomewhere(), // Pass the user's ID here
      });
      
      // Handle the logout response as needed
      // Clear authentication tokens, reset login state, etc.
      // ...
      
      alert("User logged out successfully");
    } catch (error) {
      console.error("Error logging out user:", error);
      alert("User Logout success!!");
    }
  };
  
  
  
  
  

  return (
    <div>
      <div className="bold-line"></div>
      <div className="container">
        <div className="window">
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">Hello There!</div>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                className="input-line full-width"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <div>
              {token ? (
                // Display a logout button if the user is logged in
                <button
                  className="ghost-round full-width"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                // Display a login button if the user is not logged in
                <button
                  className="ghost-round full-width"
                  onClick={handleClick}
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
