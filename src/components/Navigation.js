import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/fish_logo.png";
import "../styles/Navigation.css";
function Nav() {
  return (
    <nav>
      <Link className="link-item" to="/shopping-cart">
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="logo displaying a fish" />
          <div className="logo-text link-item">The Fish Stuff Shop</div>
        </div>
      </Link>

      <ul className="nav-links">
        <Link className="link-item" to="/shop">
          <li>
            <span class="material-symbols-outlined nav-symbol">
              shopping_bag
            </span>
            <div>Shop</div>
          </li>
        </Link>
        <Link className="link-item" to="/orders">
          <li>
            <span class="material-symbols-outlined nav-symbol">
              shopping_cart
            </span>
            <div>My Cart</div>
          </li>
        </Link>
        <Link className="link-item" to="/about">
          <li>
            <span class="material-symbols-outlined nav-symbol">info</span>
            <div>About</div>
          </li>
        </Link>
      </ul>

    </nav>
  );
}

export default Nav;
