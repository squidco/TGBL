import React, { useState } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import NextButton from "../components/NextButton";
import BasicSelect from "../components/BasicSelect";

function ChooseClass() {
  const [transition, setTransitionState] = useState({
    start: false,
    complete: false,
  });

  // Defaults playerInfo to a level 1 Wizard
  const [playerInfo, setPlayerInfo] = useState({
    playerClass: "wizard",
    playerLevel: 1,
  });

  // useEffect(test2());

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
    return <Redirect to="spellbook" />;
  }

  function test2(id) {
    var container = document.getElementById(id);
    console.log(container);
  }

  // Handles the form submit and adds entries to the playerInfo object
  function handleFormInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setPlayerInfo({ ...playerInfo, [name]: value });
    console.log(playerInfo);
  }

  // Handles the form submit and adds entries to local storage
  function handleFormSubmit(event) {
    event.preventDefault();

    console.log("submitted");
    console.log(playerInfo);
    localStorage.setItem("playerClass", playerInfo.playerClass);
    localStorage.setItem("playerLevel", playerInfo.playerLevel);
    test();
  }

  return (
    <div
      className={
        transition.start === true ? "spellbook-grid fade-out" : "spellbook-grid"
      }
      id="spellbook-container"
    >
      <form className="item-b">
        <BasicSelect list={20} label={"Testing this component"} id={"tester"} name={"tester"} handleFormInput={handleFormInput}></BasicSelect>
        <BasicSelect list={["Druid", "Bard", "Herman"]} label={"Testing this component"} id={"tester"} name={"tester"} handleFormInput={handleFormInput}></BasicSelect>
        <NextButton text="Next" click={handleFormSubmit} />
      </form>
    </div>
  );
}

export default ChooseClass;
