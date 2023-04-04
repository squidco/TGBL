import React, { useEffect, useState } from "react";
import PopUp from "../PopUp";
import { Redirect } from "react-router-dom";
import SpellSlotInputs from "../SpellSlotInputs";
import axios from "axios";
import AuthService from "../../services/AuthService";
import "./style.css"
import "../../pages/style.css"

function PlayerForm(props) {
    const [redir, setRedir] = useState({ go: false, to: "" })

    //State for tracking the amount of player spell slots and level
    const [player, setPlayer] = useState({
        playerName: "",
        playerLevel: null,
        highestSlot: null,
        numberOfSlots: []
    });

    //state for validation errors
    const [valErr, setValErr] = useState({
        open: false,
        message: ""
    })

    //sets player state to the passed in state unless there is none. keeps the nos array empty to avoid not being able to delete unused spell slots
    useEffect(() => {
        if (props.player) {
            setPlayer({
                playerName: props.player.playerName,
                playerLevel: props.player.playerLevel,
                highestSlot: props.player.highestSlot,
                numberOfSlots: []
            })
        }
    }, [])

    //handles the changes for forum input
    function handleFormInput(event) {
        event.preventDefault();
        console.log(player)
        const { name, value } = event.target;
        setPlayer({ ...player, [name]: value });
    }

    //Pushes to the Number of Slots array. Needed special logic too handle more complex state
    function pushToNOSArr(event) {
        event.preventDefault()
        var tempState
        const { name, value, id } = event.target
        // Checks if [...player.NOS] comes back as falsy because nothing has been added to the array
        tempState = [...player.numberOfSlots] ? [...player.numberOfSlots] : []
        // Start of updating a currently existing index
        // First see if an indexes id in the array matches with the id of the targeted element
        var index = tempState.findIndex(item => item.id === id)
        if (index !== -1) {
            //updates currently existing index
            tempState[index] = {
                ...tempState[index], [name]: value
            }
        } else {
            // creates a new object in the numberOfSlots arr
            var tempObj = {
                id: id,
                slots: value
            }
            // this cant be one line because .push returns the length of the new array
            tempState.push(tempObj)
            // This takes the var up a level of scope so it can be used in the setPlayer line to set the state properly
            tempState = tempState
        }
        setPlayer({ ...player, numberOfSlots: tempState })
    }

    async function handleNewPlayer(event) {
        event.preventDefault();
        //If player name is blank
        if (player.playerName === "") {
            setValErr({ open: true, message: "Please enter a name." })
            return
            //If the player name is already taken
        } else if (localStorage.getItem(player.playerName.toLowerCase())) {
            setValErr({ open: true, message: "This player name is already taken. Please try another." })
            return
            //If the player level is 0 or null
        } else if (player.playerLevel === null || player.playerLevel === "0") {
            setValErr({ open: true, message: "Please enter your player level." })
            return
            //If the player highest spell slot is 0 or null
        } else if (player.highestSlot === null || player.highestSlot === "0") {
            setValErr({ open: true, message: "Please enter the value of your highest level spell slot." })
            return
            //If it makes it through validation it will reset the Validation Error message to blank and close the pop up
        } else {
            setValErr({ open: false, message: "" })
        }
        try {
            const { data } = await axios.post("/api/characters", player, {
                headers: {
                    "authorization": AuthService.getToken(),
                    "Content-Type": "application/json"
                }
            })
            console.log(data)
            return data
        } catch (err) {
            console.log(err)
        }
        setRedir({ go: true, to: player.playerName.toLowerCase() })
    }

    // This is essentially the same as the above function except it does not have name validation
    function handleExistingPlayer(event) {
        event.preventDefault();
        //If the player level is 0 or null
        if (player.playerLevel === null || player.playerLevel === "0") {
            setValErr({ open: true, message: "Please enter your player level." })
            return
            //If the player highest spell slot is 0 or null
        } else if (player.highestSlot === null || player.highestSlot === "0") {
            setValErr({ open: true, message: "Please enter the value of your highest level spell slot." })
            return
            //If it makes it through validation it will reset the Validation Error message to blank and close the pop up
        } else {
            setValErr({ open: false, message: "" })
        }
        //because we are updating the existing player we will pass in the name we receive from the props
        localStorage.setItem(player.playerName.toLowerCase(), JSON.stringify(player));
        window.location.reload()
    }

    //the name form input is wrapped in a conditional render based off of if they are editing or creating a new character
    return (
        <>
            {redir.go && <Redirect to={`/playerdisplay/${redir.to}`} />}
            <form className="custom-form">
                {!props.edit && <>
                    <div className="form-group">
                        <label htmlFor="playerName" className="m-1 words">Name</label>
                        <input
                            type="text"
                            placeholder="Greeblebottom"
                            onChange={handleFormInput}
                            id="playerName"
                            name="playerName"
                            className="m-1 custom-input words"
                        ></input>
                    </div>
                </>
                }
                <div className="form-group">
                    <label htmlFor="playerLevel" className="m-1 words">Player Level</label>
                    <input
                        type="number"
                        placeholder="10"
                        onChange={handleFormInput}
                        id="playerLevel"
                        name="playerLevel"
                        className="m-1 custom-input words"
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="highestSlot" className="m-1 words">Highest Spellslot</label>
                    <input
                        type="number"
                        placeholder="2"
                        onChange={handleFormInput}
                        id="highestSlot"
                        name="highestSlot"
                        className="m-1 custom-input words"
                    ></input>
                </div>
                <SpellSlotInputs handleChange={pushToNOSArr} highestSlot={player.highestSlot} />
                <br></br>
                <button onClick={props.edit ? handleExistingPlayer : handleNewPlayer} className="m-1 words">Save</button>
                {valErr.open && <PopUp color="danger" message={valErr.message} />}
            </form>
        </>
    )
}

export default PlayerForm