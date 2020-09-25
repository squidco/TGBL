import React, { useState } from "react";
import Wizard from "../components/Wizard/index";
import "./style.css";

function Spellbook() {
  var playerClass = localStorage.getItem("playerClass");
  var playerLevel = localStorage.getItem("playerLevel");

  switch (playerClass) {
    case "wizard":
      // <Wizard playerLevel={playerLevel} />;
    console.log("wizard")
      break;
    case "bard":
      console.log("bard");
      break;
    default:
      break;
  }
  console.log(playerClass, playerLevel)
  return null
}

export default Spellbook;
