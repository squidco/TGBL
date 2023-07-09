import React from "react";
import spellListItem from "./spellListItem/index.js";
import "./style.css";

function spellList({ listOfSpells }) {
  return (
    <ul>
      {listOfSpells.map((element) => (
        <spellListItem info={element} />
      ))}
    </ul>
  );
}

export default spellList;
