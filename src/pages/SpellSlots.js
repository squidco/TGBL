import React, { useState } from "react";
import SpellSlotInputs from "../components/SpellSlotInputs";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
import PopUp from "../components/PopUp";
import "./style.css";

function SpellSlots() {
  //State for the css animation that is triggered in the changePage function
  const [valErr, setValErr] = useState({
    open: false,
    message: ""
  })

  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  //State for getting search input
  const [search, setSearch] = useState("")

  //State for tracking the amount of player spell slots and level
  const [player, setPlayer] = useState({
    playerName: "",
    playerLevel: null,
    highestSlot: null,
    numberOfSlots: []
  });

  //Handles the input into the search bar
  function handleSearchInput(event) {
    event.preventDefault();
    const { value } = event.target
    setSearch(value)
  }

  //Specific function to handle the search bar submit for characters
  function handleSearchSubmit(event) {
    event.preventDefault()
    if (localStorage.getItem(search)) {
      setPlayer(JSON.parse(localStorage.getItem(search)))
    } else {
      console.log(`Cannot find a player with a name of ${search}`)
    }
  }

  //handles the changes for forum input
  function handleFormInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  }

  //Pushes to the Number of Slots array. Needed special logic too handle more complex state
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
  // Also handles the front end validation for the player creation form
  function handleFormSubmit(event) {
    event.preventDefault();
    if (player.playerName === "") {
      setValErr({ open: true, message: "Please enter a name." })
      return
    } else if (player.playerLevel === null || player.playerLevel === "0") {
      setValErr({ open: true, message: "Please enter your player level." })
      return
    } else if (player.highestSlot === null || player.highestSlot === "0") {
      setValErr({ open: true, message: "Please enter the value of your highest level spell slot." })
      return
    } else {
      setValErr({ open: false, message: "" })
    }
    localStorage.setItem(player.playerName, JSON.stringify(player));
  }

  return (
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      <section className="row">
        <div className="col-md-12">
          <h1 className="title">Enter your character's details.
            <br />
            or
            <br />
            Search for your character's name.</h1>
        </div>
      </section>
      <section className="row">
        <div className="col-md-6">
          <form>
            <input type="text"
              placeholder="Search for your name"
              onChange={handleSearchInput}
              id="search"
              name="search"
              className="m-1"
            ></input>
            <button type="submit" onClick={handleSearchSubmit}>Search</button>
          </form>
          <br />
          <form>
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
            <button onClick={handleFormSubmit}>Save</button>
            {valErr.open && <PopUp color="danger" message={valErr.message} />}
            <SpellSlotInputs handleChange={pushToNOSArr} highestSlot={player.highestSlot} />
          </form>
        </div>
        <aside className="col-md-6">
          <SpellSlotDisplay player={player} />
        </aside>
      </section>
    </div>
  );
}

export default SpellSlots;