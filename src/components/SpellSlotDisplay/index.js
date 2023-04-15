import React, { useEffect } from "react";
import SpellSlotTracker from "../SpellSlotTracker";
import "./style.css"

function SpellSlotDisplay(props) {
    
    return (
        props.player.numberOfSlots.map((slotObject) => (
            <div className={"container"} key={slotObject.id}>
                <label className="m-0 words">{`Level ${slotObject.id} Slots`}</label>
                <div className={`slotDisplayContainer`}>
                    <SpellSlotTracker slotObject={slotObject} />
                </div>
            </div>
        ))
    )
}

export default SpellSlotDisplay