import React, { useState, useEffect } from "react";
import PlayerForm from "../components/PlayerForm";
import "./style.css";
import { Redirect } from "react-router-dom";
import PlayerSearchForm from "../components/PlayerSearchForm";
import axios from "axios";
import AuthService from "../services/AuthService";

//set default header for axios

function Characters() {

  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  const [characterList, setCharacterList] = useState({})

  // function with the call to the database for all of a user's characters
  async function getCharacterData() {
    try {
      const { data } = await axios.get("/api/characters", {
        headers: { "authorization": AuthService.getToken() }
      })
      return data
    } catch (err) {
      console.log(err)
    }
  }

  // get user's character data on load
  useEffect(() => {
    setCharacterList(getCharacterData())
    console.log(characterList)
  }, [])


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
        <div className="col">
          <PlayerSearchForm />
          <br />
          <PlayerForm />
        </div>
      </section >
    </div >
  );
}

export default Characters;