import React, { useDebugValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
import "./style.css";

function PlayerDisplay() {
let { playername } = useParams()

//Sets the player state to the playername variable which is sent over in url params
  useEffect(() => {
    setPlayer(JSON.parse(localStorage.getItem(playername)))
  }, [])
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
    console.log("submitted");
    console.log(player);
    // generateSlotIds(player.highestSlot);
    localStorage.setItem(player.playerName, JSON.stringify(player));
  }

  return (
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      <div className="item-a">
        <SpellSlotDisplay player={player}/>
      </div>
    </div>
  );
}

export default PlayerDisplay;