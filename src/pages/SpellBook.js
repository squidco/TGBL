import React, { useState } from "react";
import "./style.css";
import spellList from "../components/spellList";

function SpellBook() {
  const [playerInfo, setPlayerInfo] = useState({});

  const [spells, setSpells] = useState([]);

  return (
    

    <div>
      <spellList
        playerClass={playerInfo.playerClass}
        playerLevel={playerInfo.playerLevel}
        listOfSpells={spells}
      />
    </div>
  );
}

export default SpellBook;
