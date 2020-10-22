import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import HalfCaster from "../components/HalfCaster";
import { fadeIn } from "../utils/css/animations";
import "./style.css";

function Spellbook() {
  const [transition, setTransitionState] = useState({
    start: false,
    complete: false,
  });

  function test() {
    if (transition.start === false) {
      setTransitionState({
        start: true,
      });
      var transitionTimer = setInterval(() => {
        setTransitionState({ complete: true });
        clearInterval(transitionTimer);
      }, 1000);
    }
  }

  if (transition.complete === true) {
    return <Redirect to="chooseclass" />;
  }



  var playerClass = localStorage.getItem("playerClass");
  var playerLevel = localStorage.getItem("playerLevel");

  switch (playerClass) {
    case ("eldritchknight", "ranger", "arcanetrickster"):
      var testList = ["molest", "touch small kid"];
      console.log("half-caster");
      return <HalfCaster caster={playerClass} />;
    default:
      break;
  }
  console.log(playerClass, playerLevel);
  return null;
}

export default Spellbook;
