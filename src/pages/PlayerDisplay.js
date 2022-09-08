import React, { useDebugValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
import "./style.css";

function PlayerDisplay() {
let { playername } = useParams()

  useEffect(() => {
    setPlayer(JSON.parse(localStorage.getItem(playername)))
    console.log(JSON.parse(localStorage.getItem(playername)))
  }, [])
  //State for the css animation that is triggered in the changePage function
  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  //State for tracking the amount of player spell slots and level
  const [player, setPlayer] = useState({
    playerName: "Fortnite Default Skin",
    playerLevel: 1,
    highestSlot: 9,
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