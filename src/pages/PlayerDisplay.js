import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
import "./style.css";
import PlayerForm from "../components/PlayerForm";

function PlayerDisplay() {
  let { playername } = useParams()

  //Sets the player state to the value of the param in the url. It checks local storage for this
  useEffect(() => {
    setPlayer(JSON.parse(localStorage.getItem(playername)))
  }, [playername])

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

  function toggleModal() {
    setEditModal(prevState => !prevState)
  }

  return (
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      {editModal &&
        <div className="modal-container">
          <button onClick={toggleModal}>Cancel</button>
          <PlayerForm />
        </div>
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