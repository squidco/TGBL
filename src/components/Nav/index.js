import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav({ handleHamburgerClick }) {
  return (
    <div className="row bar">
      <Link className="logo-container" to="/">
        <h1 className="logo">TGBL</h1>
      </Link>

      <div className="hamburger-container">
        <i
          onClick={handleHamburgerClick}
          className="fas fa-bars fa-3x hamburger"
        ></i>
      </div>
    </div>
  );
}

export default Nav;
