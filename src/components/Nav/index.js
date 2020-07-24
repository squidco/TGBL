import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="row bar">
      <div className="col">
        <h1 className="logo">TGBL</h1>
      </div>
      <div className="col">
        <i className="fas fa-bars fa-3x hamburger"></i>
      </div>
    </div>
  );
}

export default Nav;
