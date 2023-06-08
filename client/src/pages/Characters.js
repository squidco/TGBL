import React, { useState, useEffect } from "react";
import PlayerForm from "../components/PlayerForm";
import "./style.css";
import { Redirect } from "react-router-dom";
import PlayerSearchForm from "../components/PlayerSearchForm";
import axios from "axios";
import AuthService from "../services/AuthService";

function Characters() {
  const [characterList, setCharacterList] = useState([]);

  const [redir, setRedir] = useState({ to: "" });

  // get user's character data on load
  useEffect(() => {
    // function to call for all character data for a specific user
    async function getCharacterData() {
      try {
        const { data } = await axios.get("/api/characters", {
          headers: { authorization: AuthService.getToken() },
        });
        // Sets the character list state
        setCharacterList(data);
      } catch (err) {
        console.log(err);
      }
    }
    // Calls the function written in the useEffect to get characterData
    getCharacterData();
  }, []);

  // Handles the user clicking on a character card to go to that character
  function handlePlayerClick(event) {
    event.preventDefault();
    setRedir({
      to: "/playerdisplay/" + event.target.parentNode.dataset.character,
    });
  }

  async function handleDelete(event) {
    event.preventDefault();
    event.stopPropagation();
    try {
      const { data } = await axios.delete(
        `/api/characters/${event.target.parentNode.dataset.character}`,
        { headers: { authorization: AuthService.getToken() } }
      );
      setCharacterList(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEdit(event) {
    event.preventDefault();
    event.stopPropagation();

    setRedir({ to: "/edit/" + event.target.parentNode.dataset.character });
  }

  return (
    <div className={`mt-3 container op-1`}>
      <section className="row">
        <div className="col">
          <PlayerSearchForm />
          <br />
          <PlayerForm />
        </div>
        <div className="col" onClick={handlePlayerClick}>
          <>
            {redir.to && <Redirect push to={redir.to} />}
            {characterList.map((el) => (
              <div className="character-group" data-character={el.playerName}>
                <button className="words" onClick={handleDelete}>
                  X
                </button>
                <button className="words" onClick={handleEdit}>
                  Edit
                </button>
                <h1 className="title">{el.playerName}</h1>
                <p className="words pl-3">Level: {el.playerLevel}</p>
              </div>
            ))}
          </>
        </div>
      </section>
    </div>
  );
}

export default Characters;