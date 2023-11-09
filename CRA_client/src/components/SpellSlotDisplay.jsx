import React, { useEffect } from "react";
import SpellSlotTracker from "./SpellSlotTracker";
import "../styles/SpellSlotDisplay.css";

function SpellSlotDisplay({ numberOfSlots }) {
  // [{id: 1, slot: 3}]

  return numberOfSlots.map((slotObject) => (
    <div className={"container"} key={slotObject.id}>
      <label className="m-0 words">{`Level ${slotObject.id} Slots`}</label>
      <SpellSlotTracker slotObject={slotObject} />
    </div>
  ));
}

export default SpellSlotDisplay;
