import React, { useState, useEffect } from "react";
import PlayerForm from "../components/PlayerForm";
import "./style.css";
import { Redirect } from "react-router-dom";
import PlayerSearchForm from "../components/PlayerSearchForm";
import axios from "axios";
import AuthService from "../services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import CharacterList from "../components/CharacterList";

function CharacterSelect() {
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
    // Prevents player from being redirected by clicking the div with nothing in it
    if (event.target.parentNode.dataset.character === undefined) {
      return;
    }
    setRedir({
      to: "/characterdisplay/" + event.target.parentNode.dataset.character,
    });
  }

  async function handleDelete(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.parentNode);
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
        <div className="col-sm-6">
          <PlayerSearchForm />
          <br />
          <PlayerForm />
          <br />
        </div>
        <div className="col-sm-6" onClick={handlePlayerClick}>
          {redir.to && <Redirect push to={redir.to} />}
          <CharacterList characterList={characterList} />
        </div>
      </section>
    </div>
  );
}

export default CharacterSelect;
