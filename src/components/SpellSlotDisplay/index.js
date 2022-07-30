import React, { useEffect } from "react";
import SpellSlotTracker from "../SpellSlotTracker";
import "./style.css"

function SpellSlotDisplay(props) {
    


    return (
        props.player.numberOfSlots.map((slotObject) => (
            <div className="slotDisplayContainer" key={slotObject.id}> <SpellSlotTracker slotObject={slotObject} /></div>
        ))
    )
}

export default SpellSlotDisplay