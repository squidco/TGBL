import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./style.css";

function SpellSlots() {
  //State for the css animation that is triggered in the changePage function
  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  //State for tracking the amount of player spell slots and level
  const [player, setPlayer] = useState({
    playerName: "Fortnite Default Skin",
    playerLevel: 1,
    highestSlot: 1,
  });

  //This function may be used in many places so I may make it a util function
  //Triggers the animation for this page and changes the url afterwords to the new page
  function changePage(page) {
    if (transition.start === false) {
      setTransitionState({
        start: true,
      });
      setTimeout(() => {
        window.location.href = page;
      }, 1000);
    }
  }

  //handles the changes for forum input
  function handleFormInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  }

  function showSpellSlotInputs() {
    console.log("slotChange");
    render(<input placeholder="peepeepoopoo"></input>);
  }

  // Handles the form submit and adds entries to local storage
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log(player);
    generateSlotIds(player.highestSlot);
    localStorage.setItem(player.playerName, JSON.stringify(player));
  }

  function generateSlotIds(highestSlot) {
    const slotArray = [];
    for (var i = 0; i < highestSlot; i++) {
      var number = `lv${highestSlot - i}`;
      slotArray.push(number);
    }
    generateSlotInputs(slotArray);
  }

  function generateSlotInputs(slotArray) {
    const slotInputs = slotArray.map((level) => (
      <input id={level} name={level} key={level} type="number"></input>
    ));
    console.log(slotInputs)
    return (slotArray.map((level) => (
      <input id={level} name={level} key={level} type="number"></input>
    )));
  }

  return (
    <div
      className={
        transition.start === true
          ? "landing-page-grid fade-out"
          : "landing-page-grid"
      }
      id="landing-page-container"
    >
      <div className="item-a">
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleFormInput}
            id="playerName"
            name="playerName"
          ></input>
          <input
            type="number"
            placeholder="Player level?"
            onChange={handleFormInput}
            id="playerLevel"
            name="playerLevel"
          ></input>
          <input
            type="number"
            placeholder="Highest level spellslot?"
            onChange={handleFormInput}
            id="highestSlot"
            name="highestSlot"
          ></input>
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
  //Additional notes: The idea here is to reveal an input as they fill out inputs up to nine.
  //Probably going to be janky though so I might switch the approach
}

export default SpellSlots;
