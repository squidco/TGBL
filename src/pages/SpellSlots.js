import React, { useState } from "react";
import SpellSlotInputs from "../components/SpellSlotInputs";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
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
    highestSlot: null,
    numberOfSlots: []
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

  function pushToNOSArr(event) {
    event.preventDefault()
    var tempState
    const { name, value, id } = event.target
    // Checks if [...player.NOS] comes back as falsy because nothing has been added to the array
    tempState = [...player.numberOfSlots] ? [...player.numberOfSlots] : []
    // Start of updating a currently existing index
    // First see if an indexes id in the array matches with the id of the targeted element
    var index = tempState.findIndex(item => item.id === id)
    if (index !== -1) {
      //updates currently existing index
      console.log(tempState[index])
      tempState[index] = {
        ...tempState[index], [name]: value
      }
    } else {
      // creates a new object in the numberOfSlots arr
      var tempObj = {
        id: id,
        slots: value
      }
      // this cant be one line because .push returns the length of the new array
      tempState.push(tempObj)
      // This takes the var up a level of scope so it can be used in the setPlayer line to set the state properly
      tempState = tempState
    }
    setPlayer({ ...player, numberOfSlots: tempState })
  }

  // Handles the form submit and adds entries to local storage
  function handleFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem(player.playerName, JSON.stringify(player));
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
          <SpellSlotInputs handleChange={pushToNOSArr} highestSlot={player.highestSlot}></SpellSlotInputs>
          <button onClick={() => { changePage("playerdisplay") }}>Next</button>
        </form>
        <SpellSlotDisplay player={player}></SpellSlotDisplay>
      </div>
    </div>
  );
  //Additional notes: I may need to change how I store spell slot information. I'm not sure that I can effectively
  // work with how I have it stored now.
}

export default SpellSlots;
