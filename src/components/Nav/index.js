import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav({ handleHamburgerClick }) {
  return (
    <nav className="row bar">
      <Link className="col-md-9" to="/">
        <h1 className="logo">TGBL</h1>
      </Link>
    </nav>
  );
}

export default Nav;
