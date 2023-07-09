import React from "react"
import "./style.css"

function NextButton({ page, container, text, click }) {
    return (<button onClick={click}>{text}</button>)
}

export default NextButton