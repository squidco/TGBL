import React, { useEffect, useState } from "react";
import "./style.css";
import { fadeOut, fadeIn, changePage } from "../utils/css/animations";
import spellList from "../components/spellList/index";
import PlayerLevelList from "../components/PlayerLevelList/index";
import PlayerLevelListOptions from "../components/PlayerLevelListOptions/index";

function SpellBook() {
  const [playerInfo, setPlayerInfo] = useState({
    playerClass: "Bard",
  });

  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fadeIn("spellbook-container");
  });

  function handleFormInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setPlayerInfo({ ...playerInfo, [name]: value });
    console.log(playerInfo);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("submitted");
  }

  function listCreator(listLength) {
    var list = [];
    for (let i = 0; i < listLength; i++) {
      list.push(i);
      // console.log(list)
    }
    return list;
  }

  listCreator(20);

  return (
    <div className="spellbook-grid" id="spellbook-container">
      <form className="item-b">
        <label>Choose your class:</label>
        <select onChange={handleFormInput} id="playerClass" name="playerClass">
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>
        <button onClick={handleFormSubmit}>Next</button>
        <label>Select your current level:</label>
        <PlayerLevelList handleFormInput={handleFormInput}>
          <PlayerLevelListOptions listLength={20}></PlayerLevelListOptions>
        </PlayerLevelList>
      </form>
    </div>
  );
}

export default SpellBook;
