import React from "react";
import PlayerLevelListOptions from "../PlayerLevelListOptions";
import "./style.css";

function PlayerLevelList({ handleFormInput, listLength }) {
  var list = [];

  for (let i = 1; i < listLength + 1; i++) {
    list.push(i);
  }

  return (
    <>
      <label>Select your current level:</label>
      <select onChange={handleFormInput} id="playerLevel" name="playerLevel">
        {list.map((el) => (
          <PlayerLevelListOptions level={el} />
        ))}
      </select>
    </>
  );
}

export default PlayerLevelList;
