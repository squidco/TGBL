import React from "react";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Dropdown({ title, children }) {
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    setDropdown((prevState) => !prevState);
  }

  return (
    <div className="container">
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={handleClick}>
          {/* <FontAwesomeIcon
            icon={icon({ name: "chevron-right", style: "solid" })}
            className={
              dropdown ? `dropdown-button dropdown-toggle` : `dropdown-button`
            }
          /> */}
        </button>
        <h2>{title}</h2>
      </div>
      {dropdown && <div>{children}</div>}
    </div>
  );
}
