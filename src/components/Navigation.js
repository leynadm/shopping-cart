import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/fish_logo.png"
import "../styles/Navigation.css"
function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <Link to="/">
        <img className="logo-img" src={Logo} alt="logo displaying a fish"/>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/orders">
          <li>My Orders</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
