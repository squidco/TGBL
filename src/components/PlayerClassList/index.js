import React from "react";
import PlayerClassListOptions from "../PlayerClassListOptions/index"
import "./style.css";

function PlayerClassList({ handleFormInput }) {
  var classes = [
    "Wizard",
    "Bard",
    "Cleric",
    "Warlock",
    "Druid",
    "Paladin",
    "Ranger",
    "Sorcerer",
  ];

  return (
    <>
      <label>Choose your class:</label>
      <select onChange={handleFormInput} id="playerClass" name="playerClass">
       {classes.map((playerClass) => (
           <PlayerClassListOptions playerClass={playerClass} />
       ))}
      </select>
    </>
  );
}

export default PlayerClassList