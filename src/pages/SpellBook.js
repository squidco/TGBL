import React, { useState } from "react";
import "./style.css";
import spellList from "../components/spellList/index";

function SpellBook() {
  const [playerInfo, setPlayerInfo] = useState({});

  const [spells, setSpells] = useState([]);

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
    <>
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
        <spellList
          playerClass={playerInfo.playerClass}
          playerLevel={playerInfo.playerLevel}
          listOfSpells={spells}
        />
      </div>
    </>
  );
}

export default SpellBook;
