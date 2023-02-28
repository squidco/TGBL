import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav({ handleHamburgerClick }) {
  return (
    <nav className="row bar">
      <div className="col-md-9">
        <Link className="logo" to="/">
          TGBL
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
