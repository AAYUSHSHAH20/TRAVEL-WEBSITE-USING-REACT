import React, { useState,useEffect } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


function Navbar() {
  const [clicked, setClicked] = useState(false);
 
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state

  const handleClick = () => {
    setClicked(!clicked);
  };

  // Check for the presence of the JWT token in local storage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Perform logout logic here, such as clearing authentication tokens or state.
    // After logging out, update isLoggedIn state accordingly.
    setIsLoggedIn(false);
  };
  return ( 
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TravelVista</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
       
       {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        
      </ul>
    </nav>
  );
}

export default Navbar;
