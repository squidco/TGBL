import React from "react";
import SpellSlotDisplay from "./SpellSlotDisplay";

// Renders the view with character infomation
// Maybe I could call this character card
export default function CharacterView({ character, numberOfSlots }) {
  return (
    <div className="col">
      <p className="title">
        {character.playerName} | Level: {character.playerLevel}
      </p>
      <div className="item-a">
        <SpellSlotDisplay numberOfSlots={numberOfSlots} />
      </div>
    </div>
  );
}
