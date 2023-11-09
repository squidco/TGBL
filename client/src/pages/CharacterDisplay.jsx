import React, { useEffect, useState } from "react";
import { useParams, redirect } from "react-router-dom";
import SpellSlotDisplay from "../components/SpellSlotDisplay";
import "../App.css";
import AuthService from "../services/AuthService";
import axios from "axios";

function CharacterDisplay() {
  //player name is grabbed from the url is lowercase because of how it is passed in via params
  let { charactername } = useParams();

  const [character, setCharacter] = useState({
    characterName: "",
    playerLevel: 1,
    highestSlot: 0,
    numberOfSlots: [],
  });

  const [redir, setRedir] = useState({ to: "" });
  
  // get user's character data on load
  useEffect(() => {
    async function getCharacterData() {
      try {
        const { data } = await axios.get(`/api/characters/${charactername}`, {
          headers: { authorization: AuthService.getToken() },
        });
        console.log(data);
        setCharacter(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCharacterData();
    console.log(character);
  }, []);


  function handleEdit(event) {
    event.preventDefault();
    event.stopPropagation();

    setRedir({ to: "/edit/" + charactername });
  }

  return (
    <div className={`mt-3 container op-1`}>
      {redir.to && <redirect push to={redir.to} />}

      <div className="row">
        <div className="col-md-12">
          <button onClick={handleEdit}>Edit</button>
          <p className="title">
            {character.characterName} | Level: {character.playerLevel}
          </p>
        </div>
      </div>
      <div className="item-a">
        <SpellSlotDisplay numberOfSlots={character.numberOfSlots} />
      </div>
    </div>
  );
}

export default CharacterDisplay;
