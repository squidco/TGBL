import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import { Redirect } from "react-router-dom";
import SpellSlotInputs from "./SpellSlotInputs";
import axios from "axios";
import AuthService from "../services/AuthService";
import "./PlayerForm/style.css";
import "../pages/style.css";
import CharacterView from "./CharacterView";

function EditForm({ characterName }) {
  const [redir, setRedir] = useState({ go: false, to: "" });

  //State for tracking the amount of player spell slots and level
  const [character, setCharacter] = useState({
    playerName: "",
    playerLevel: 1,
    highestSlot: 1,
    numberOfSlots: [],
  });

  const [numberOfSlots, setNOS] = useState([]);

  //state for validation errors
  const [valErr, setValErr] = useState({
    open: false,
    message: "",
  });

  useEffect(() => {
    async function getCharacterData() {
      try {
        const { data } = await axios.get(`/api/characters/${characterName}`, {
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

  //handles the changes for forum input
  function handleFormInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setCharacter({ ...character, [name]: value });
  }

  //Pushes to the Number of Slots array. Needed special logic to handle more complex state
  function pushToNOSArr(event) {
    event.preventDefault();
    var tempState;
    const { name, value, id } = event.target;
    // Checks if [...character.NOS] comes back as falsy because nothing has been added to the array
    tempState = [...numberOfSlots] ? [...numberOfSlots] : [];
    // Start of updating a currently existing index
    // First see if an indexes id in the array matches with the id of the targeted element
    var index = tempState.findIndex((item) => item.id === id);
    if (index !== -1) {
      //updates currently existing index
      tempState[index] = {
        ...tempState[index],
        [name]: value,
      };
    } else {
      // creates a new object in the numberOfSlots arr
      var tempObj = {
        id: id,
        slots: value,
      };
      // this cant be one line because .push returns the length of the new array
      tempState.push(tempObj);
      // This takes the var up a level of scope so it can be used in the setCharacter line to set the state properly
      tempState = tempState;
    }
    setNOS(tempState);
  }

  async function editPlayerSubmit(event) {
    event.preventDefault();
    //If the player level is 0 or null
    if (character.playerLevel === null || character.playerLevel === "0") {
      setValErr({
        open: true,
        message: "Please enter your character's level.",
      });
      return;
      //If the player highest spell slot is 0 or null
    } else if (character.highestSlot === null || character.highestSlot < 0) {
      setValErr({
        open: true,
        message: "Please enter the value of your highest level spell slot.",
      });
      return;
      //If it makes it through validation it will reset the Validation Error message to blank and close the pop up
    } else {
      setValErr({ open: false, message: "" });
    }
    //axios call to update character
    try {
      const { data } = await axios.put(
        `/api/characters/${character.playerName}`,
        character,
        {
          headers: {
            authorization: AuthService.getToken(),
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setRedir({ go: true, to: character.playerName.toLowerCase() });
    } catch (err) {
      console.log(err);
    }
  }

  //the name form input is wrapped in a conditional render based off of if they are editing or creating a new character
  return (
    <>
      {redir.go && <Redirect push to={`/playerdisplay/${redir.to}`} />}
      <form className="custom-form">
        <div className="form-group">
          <label htmlFor="playerName" className="m-1 words">
            Name
          </label>
          <input
            type="text"
            placeholder="Greeblebottom"
            onChange={handleFormInput}
            id="playerName"
            name="playerName"
            className="m-1 custom-input words"
            value={character.playerName}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="playerLevel" className="m-1 words">
            Player Level
          </label>
          <input
            type="number"
            placeholder="10"
            onChange={handleFormInput}
            id="playerLevel"
            name="playerLevel"
            className="m-1 custom-input words"
            value={character.playerLevel}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="highestSlot" className="m-1 words">
            Highest Spellslot
          </label>
          <input
            type="number"
            placeholder="2"
            onChange={handleFormInput}
            id="highestSlot"
            name="highestSlot"
            className="m-1 custom-input words"
            value={character.highestSlot}
          ></input>
        </div>

        <SpellSlotInputs
          handleChange={pushToNOSArr}
          highestSlot={character.highestSlot}
        />
        <br></br>
        <button onClick={editPlayerSubmit} className="m-1 words">
          Save
        </button>
        {valErr.open && <PopUp color="danger" message={valErr.message} />}
      </form>
      <CharacterView character={character} numberOfSlots={numberOfSlots} />
    </>
  );
}

export default EditForm;
