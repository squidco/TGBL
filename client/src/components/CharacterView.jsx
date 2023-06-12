import React from "react";
import Dropdown from "./Dropdown";
import SpellSlotDisplay from "./SpellSlotDisplay";

// Renders the view with character infomation
// Maybe I could call this character card
export default function CharacterView({ character, numberOfSlots, className }) {
  return (
    <div className={className}>
      <h1 className="title">
        {character.playerName} | Level: {character.playerLevel}
      </h1>
      <Dropdown title="Spellslots">
        <SpellSlotDisplay numberOfSlots={numberOfSlots} />
      </Dropdown>
    </div>
  );
}
