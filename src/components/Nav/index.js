import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav({ handleHamburgerClick }) {
  return (
    <div className="row bar">
      <div className="col">
        <Link to="/">
          <h1 className="logo">TGBL</h1>
        </Link>
      </div>
      <div className="col">
        <i
          onClick={handleHamburgerClick}
          className="fas fa-bars fa-3x hamburger"
        ></i>
      </div>
    </div>
    
  );
}

export default Nav;
