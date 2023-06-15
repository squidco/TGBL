import React from "react";
import axios from "axios";
import AuthService from "../services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import { Redirect } from "react-router-dom";

export default function CharacterCard({ character, setCharacters }) {
  //redirect state
  const [redir, setRedir] = useState({ to: "" });

  async function handleDelete(event) {
    event.preventDefault();
    event.stopPropagation();

    try {
      const { data } = await axios.delete(
        `/api/characters/${character.playerName}`,
        { headers: { authorization: AuthService.getToken() } }
      );
      setCharacters(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEdit(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("EDIT BUTTON", character.playerName);
    setRedir({ to: "/edit/" + character.playerName });
  }

  return (
    <>
      {redir.to && <Redirect push to={redir.to} />}
      <div className="character-group" data-character={character.playerName}>
        <button
          className="words m-1"
          data-character={character.playerName}
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={icon({ name: "trash", style: "solid" })} />
        </button>
        <button className="words m-1" onClick={handleEdit}>
          Edit
        </button>
        <h1 className="title">{character.playerName}</h1>
        <p className="words pl-3">Level: {character.playerLevel}</p>
      </div>
    </>
  );
}
