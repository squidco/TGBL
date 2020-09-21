import React from "react"
import "./style.css"

function PlayerLevelList({handleFormInput, children}){
return (

<select onChange={handleFormInput} id="playerLevel" name="playerLevel">
    {children}
</select>
)
}

export default PlayerLevelList