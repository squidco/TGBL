import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import { Redirect } from "react-router-dom";
import SpellSlotInputs from "./SpellSlotInputs";
import axios from "axios";
import AuthService from "../services/AuthService";

function NameCard(props) {

  // State for the character's name, classes, and levels
  const [character, setCharacter] = useState({
    characterName: "Unnamed",
    characterLevel: null,
    characterClasses: []
  })

  // Define an async function to get character data using an api call
  async function getCharacterData() {

  }

  // Set the character state
  useEffect(() => {
    getCharacterData()
  })


}


export default NameCard