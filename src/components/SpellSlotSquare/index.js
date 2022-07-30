import React, { useState } from "react"
import "./style.css"

function SpellSlotSquare(props) {
//State for the fading animations on the squares
const [toggleSquare, toggle] = useState(false)

function handleClick() {
    toggle(prevState => !prevState)
}
    return <div className={`square ${toggleSquare ? "expended" : null}`} id={props.idAndKey + 1} key={props.idAndKey + 1} onClick={handleClick}></div>

}


export default SpellSlotSquare