import React, { useEffect, useState } from "react";
import "./style.css";
import { fadeOut, fadeOutWithParams, fadeIn, changePage } from "../utils/css/animations";
import PlayerLevelList from "../components/PlayerLevelList/index";
import PlayerClassList from "../components/PlayerClassList";

function ChooseClass() {
  const [playerInfo, setPlayerInfo] = useState({
    playerClass: "wizard",
    playerLevel: 1
  });

  // const [spells, setSpells] = useState([]);

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
    console.log(playerInfo)
    localStorage.setItem("playerClass", playerInfo.playerClass)
    localStorage.setItem("playerLevel", playerInfo.playerLevel)
    fadeOutWithParams("spellbook", "spellbook-container")
  }

  return (
    <div className="spellbook-grid" id="spellbook-container">
      <form className="item-b">
        <PlayerClassList handleFormInput={handleFormInput} />
        <PlayerLevelList handleFormInput={handleFormInput} listLength={20} />
        <button onClick={handleFormSubmit} >Next</button>
      </form>
    </div>
  );
}

export default ChooseClass;
