import React, { useState, useEffect } from "react";
import PlayerForm from "../components/PlayerForm";
import "./style.css";
import { Link, Redirect } from "react-router-dom";
import PlayerSearchForm from "../components/PlayerSearchForm";
import axios from "axios";
import AuthService from "../services/AuthService";

//set default header for axios

function Characters() {

  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  const [characterList, setCharacterList] = useState([])

  const [redir, setRedir] = useState({ to: "" })

  // function with the call to the database for all of a user's characters
  async function getCharacterData() {
    try {
      const { data } = await axios.get("/api/characters", {
        headers: { "authorization": AuthService.getToken() }
      })
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  // get user's character data on load
  useEffect(async () => {
    const characters = await getCharacterData()
    setCharacterList(characters)
    console.log(characters)
  }, [])


  function handlePlayerClick(event) {
    event.preventDefault()
    event.stopPropagation()
    console.log(event.target.parentNode.name)
    setRedir({ to: event.target.parentNode.dataset.character })
  }

  return (
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      <section className="row">
        <div className="col">
          <PlayerSearchForm />
          <br />
          <PlayerForm />
        </div>
        <div className="col" onClick={handlePlayerClick}>
          <>
            {redir.to && <Redirect to={`/playerdisplay/${redir.to}`} />}
            {characterList.map((el) => (
              <div className="character-group" data-character={el.playerName}>
                <h1>{el.playerName}</h1>

              </div>
            ))}
          </>
        </div>
      </section >
    </div >
  );
}

export default Characters;