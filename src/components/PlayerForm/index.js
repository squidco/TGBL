import React, { useEffect, useState } from "react";
import PopUp from "../PopUp";
import { Redirect } from "react-router-dom";
import SpellSlotInputs from "../SpellSlotInputs";

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

    function handleNewPlayer(event) {
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
        localStorage.setItem(player.playerName.toLowerCase(), JSON.stringify(player));
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
            <form>
                {!props.edit && <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleFormInput}
                    id="playerName"
                    name="playerName"
                    className="m-1"
                ></input>}
                <input
                    type="number"
                    placeholder="Player level?"
                    onChange={handleFormInput}
                    id="playerLevel"
                    name="playerLevel"
                    className="m-1"
                ></input>
                <input
                    type="number"
                    placeholder="Highest level spellslot?"
                    onChange={handleFormInput}
                    id="highestSlot"
                    name="highestSlot"
                    className="m-1"
                ></input>
                <button onClick={props.edit ? handleExistingPlayer : handleNewPlayer}>Save</button>
                {valErr.open && <PopUp color="danger" message={valErr.message} />}
                <SpellSlotInputs handleChange={pushToNOSArr} highestSlot={player.highestSlot} />
            </form>
        </>
    )
}

export default PlayerForm