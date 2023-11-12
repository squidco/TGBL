import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function HamburgerLink({ name }) {
  return (
    <div className="row hamburger-link">
      <Link to={"/" + name}>{name}</Link>
    </div>
  );
}

export default HamburgerLink;
