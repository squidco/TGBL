import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
import SpellSlotInputs from "../components/SpellSlotInputs";
import PopUp from "../components/PopUp";
import "./style.css";

function PlayerDisplay() {
  let { playername } = useParams()

  //Sets the player state to the value of the param in the url. It checks local storage for this
  useEffect(() => {
    setPlayer(JSON.parse(localStorage.getItem(playername)))
  }, [])

  const [valErr, setValErr] = useState({
    open: false,
    message: ""
  })

  const [redir, setRedir] = useState({ go: false, to: "" })


  //State for the css animation that is triggered in the changePage function
  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  //State for tracking the amount of player spell slots and level
  const [player, setPlayer] = useState({
    playerName: "",
    playerLevel: 1,
    highestSlot: 0,
    numberOfSlots: []
  });

  const [editModal, setEditModal] = useState(false)

  //handles the changes for forum input
  function handleFormInput(event) {
    event.preventDefault();
    console.log(player)
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  }

  // Handles the form submit and adds entries to local storage
  function handleFormSubmit(event) {
    event.preventDefault();
    //If the player level is 0 or null
    if (player.playerLevel === null || player.playerLevel === "0") {
      setValErr({ open: true, message: "Please enter your player level." })
      return
      //If the player highest spell slot is 0 or null
    } else if (player.highestSlot === null || player.highestSlot === "0") {
      setValErr({ open: true, message: "Please enter the value of your highest level spell slot." })
      return
      //If it makes it through validation it will reset the Validation Error message to blank and close the pop up
    } else {
      setValErr({ open: false, message: "" })
    }
    localStorage.setItem(player.playerName.toLowerCase(), JSON.stringify(player));
    setRedir({ go: true, to: player.playerName.toLowerCase() })
  }

  function toggleModal() {
    setEditModal(prevState => !prevState)
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

  return (
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      {redir.go && <Redirect to={`/playerdisplay/${redir.to}`} />}

      {editModal &&
        <form className="modal-container">
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
          {valErr.open && <PopUp color="danger" message={valErr.message} />}
          <SpellSlotInputs toggleModal={toggleModal} handleSubmit={handleFormSubmit} modal={true} handleChange={pushToNOSArr} highestSlot={player.highestSlot} />
        </form>
      }
      <div className="row">
        <div className="col-md-12">
          <button onClick={toggleModal}>Edit</button>
          <p className="title">{player.playerName} | Level: {player.playerLevel}</p>
        </div>
      </div>
      <div className="item-a">
        <SpellSlotDisplay player={player} />
      </div>
    </div>
  );
}

export default PlayerDisplay;