import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList({ characterList }) {

const [characters, setCharacters] = useState(characterList)

useEffect(() => {
    setCharacters(characterList)
}, [characterList])

  return (characters.map((character) => (
    <CharacterCard setCharacters={setCharacters} character={character}/>
  )));
}
