import React from "react";
import SpellSlotSquare from "../SpellSlotSquare";

function SpellSlotTracker(props) {
    var tempElArr = [];
    for (let i = 0; i < props.slotObject.slots; i++) {
        tempElArr.push(i)
    }

    return (
        <>
            {tempElArr.map((item) => (
                <SpellSlotSquare idAndKey={item} />
            ))}
        </>
    )
}

export default SpellSlotTracker