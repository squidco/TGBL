import React, { useDebugValue, useEffect, useState } from "react";
import "./style.css";

function PlayerDisplay() {
  useEffect(() => {
    setPlayer(localStorage.getItem())
  })
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
    <div
      className={
        transition.start === true
          ? "landing-page-grid fade-out"
          : "landing-page-grid"
      }
      id="landing-page-container"
    >
      <div className="item-a">
        <spellSlotElement></spellSlotElement>
      </div>
    </div>
  );
  //Additional notes: The idea here is to reveal an input as they fill out inputs up to nine.
  //Probably going to be janky though so I might switch the approach
}

export default PlayerDisplay;
