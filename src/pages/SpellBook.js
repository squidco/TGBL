import React, { useEffect, useState } from "react";
import "./style.css";
import {fadeOut, fadeIn, changePage} from "../utils/css/animations"
import spellList from "../components/spellList/index";

function SpellBook() {
  const [playerInfo, setPlayerInfo] = useState({});

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

  return (
    <div className="spellbook-grid" id="spellbook-container">
      <form>
        <label for="playerclass">Choose your class:</label>
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
        <button onClick={handleFormSubmit}>Submit</button>
      </form>

    <div>
      <p className="hidden">buttbuttstinky</p>
    </div>

      <div>
        <spellList
          playerClass={playerInfo.playerClass}
          playerLevel={playerInfo.playerLevel}
          listOfSpells={spells}
        />
      </div>
    </div>
  );
}

export default SpellBook;
