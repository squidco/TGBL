import React from "react";
import "./style.css";
import AuthService from "../../services/AuthService";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bar">
      <div className="col-md-9">
        <Link className="logo" to="/">
          TGBL
        </Link>
        <button className="words" onClick={AuthService.logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Nav;
