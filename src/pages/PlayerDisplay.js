import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
import "./style.css";
import PlayerForm from "../components/PlayerForm";
import Modal from "../components/Modal";
import AuthService from "../services/AuthService";
import axios from "axios"

function PlayerDisplay() {
  //player name is grabbed from the url is lowercase because of how it is passed in via params
  let { charactername } = useParams()

  const [character, setCharacter] = useState({
    playerName: "",
    playerLevel: 1,
    highestSlot: 0,
    numberOfSlots: []
  });

  // get user's character data on load
  useEffect(() => {
    async function getCharacterData() {
      try {
        const { data } = await axios.get(`/api/characters/${charactername}`, {
          headers: { "authorization": AuthService.getToken() }
        })
        console.log(data)
        setCharacter(data)
      } catch (err) {
        console.log(err)
      }
    }
    getCharacterData()
    console.log(character)
  }, [])

  //State for the css animation that is triggered in the changePage function
  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  //State for tracking the amount of player spell slots and level
  const [editModal, setEditModal] = useState(false)

  function toggleModal() {
    setEditModal(prevState => !prevState)
  }

  return (
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      {editModal &&
        <Modal>
          <button onClick={toggleModal}>Cancel</button>
          <PlayerForm player={character} edit={true}/>
        </Modal>
      }
      <div className="row">
        <div className="col-md-12">
          <button onClick={toggleModal}>Edit</button>
          <p className="title">{character.playerName} | Level: {character.playerLevel}</p>
        </div>
      </div>
      <div className="item-a">
        <SpellSlotDisplay player={character} />
      </div>
    </div>
  );
}

export default PlayerDisplay;