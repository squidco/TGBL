import React from "react";
import axios from "axios";
import AuthService from "../services/AuthService";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
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
        `/api/characters/${character.characterName}`,
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
    console.log("EDIT BUTTON", character.characterName);
    setRedir({ to: "/edit/" + character.characterName });
  }

  return (
    <>
      {redir.to && <Redirect push to={redir.to} />}
      <div className="character-group" data-character={character.characterName}>
        <button
          className="words m-1"
          data-character={character.characterName}
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={icon({ name: "trash", style: "solid" })} />
        </button>
        <button className="words m-1" onClick={handleEdit}>
          Edit
        </button>
        <h1 className="title">{character.characterName}</h1>
        <p className="words pl-3">Level: {character.playerLevel}</p>
      </div>
    </>
  );
}
