import React from "react";
import SpellSlotSquare from "../SpellSlotSquare";

function SpellSlotTracker({ slotObject }) {
  // {id: 3, slot:3}
  var squareArray = [];
  for (let index = 0; index < slotObject.slots; index++) {
    squareArray.push(<SpellSlotSquare />);
  }

  return (
    <div className="slotDisplayContainer" style={{ width: "100%" }}>
      {squareArray.map((sqaure) => {
        return sqaure
      })}
    </div>
  );
}

export default SpellSlotTracker;
