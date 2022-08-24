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

  //State for getting search input
  const [search, setSearch] = useState("")

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

  function handleSearchInput(event) {
    event.preventDefault();
    const { value } = event.target
    setSearch(value)
  }

  function handleSearchSubmit(event) {
    event.preventDefault()
    let playerSearch = search
    if (localStorage.getItem(playerSearch)) {
      setPlayer(JSON.parse(localStorage.getItem(playerSearch)))
    } else {
      console.log(`Cannot find a player with a name of ${playerSearch}`)
    }
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
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      <div className="row">
        <div className="col-md-12">

          <h1 className="title">Enter your character's details.</h1>
          <br />
          <h1 className="title">or</h1>
          <br />
          <h1 className="title">Search for your character's name.</h1>
        </div>
      </div>
      <div className="row">
        <form>
          <input type="text"
            placeholder="Search for your name"
            onChange={handleSearchInput}
            id="search"
            name="search"
          ></input>
          <button type="submit" onClick={handleSearchSubmit}>Submit</button>
        </form>
      </div>
      <div className="row">
        <form className="col-md-6">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleFormInput}
            id="playerName"
            name="playerName"
            className="m-1"
          ></input>
          <input
            type="number"
            placeholder="Player level?"
            onChange={handleFormInput}
            id="playerLevel"
            name="playerLevel"
            className="m-1"
          ></input>
          <input
            type="number"
            placeholder="Highest level spellslot?"
            onChange={handleFormInput}
            id="highestSlot"
            name="highestSlot"
            className="m-1"
          ></input>
          <button onClick={handleFormSubmit}>Submit</button>
          <SpellSlotInputs handleChange={pushToNOSArr} highestSlot={player.highestSlot} />
        </form>
        <div className="col-md-6">
          <SpellSlotDisplay player={player} />
        </div>
      </div>
    </div>
  );
  //Additional notes: I may need to change how I store spell slot information. I'm not sure that I can effectively
  // work with how I have it stored now.
}

export default SpellSlots;
