import React from "react";
import HamburgerLink from "./HamburgerLink/index";
import "./style.css";

function Hamburger({ hamburgerState }) {

  
    return (
      <div className={hamburgerState === "hide" ? "hide" : "hamburger-menu"}>
        <div className="col">
          <div className="row">
            <input className="search-bar" id="search-input" placeholder="Search for lists or users"></input>
          </div>
          <HamburgerLink name="Account" />
          <HamburgerLink name="My Lists" />
          <HamburgerLink name="Settings" />
        </div>
      </div>
    )
}

export default Hamburger;
