import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios"
import AuthService from "../../services/AuthService";
import PopUp from "../PopUp";
import "./style.css"
import "../../pages/style.css"

function PlayerSearchForm() {
    //state for redirecting to a new page
    const [redir, setRedir] = useState({ go: false, to: "" })

    //state for handling the users input into the search bar
    const [search, setSearch] = useState("")

    //state for throwing validation errors
    const [valErr, setValErr] = useState({
        open: false,
        message: ""
    })

    //Handles the input into the search bar
    function handleSearchInput(event) {
        event.preventDefault();
        const { value } = event.target
        setSearch(value)
    }

    //Specific function to handle the search bar submit for characters
    async function handleSearchSubmit(event) {
        event.preventDefault()
        try {
            const query = await axios.get(`/api/characters/${search.toLowerCase()}`, {
              headers: { "authorization": AuthService.getToken() }
            })

            console.log(query)
            // if(data){
            //     setRedir({go: true, to: search.toLowerCase()})
            // } else {
            //     setValErr({open: true, message: "No character found with that name"})
            // }
          } catch (err) {
            setValErr({open: true, message: err.response.data})
            console.log(err.response.data)
          }


        // if (localStorage.getItem(search.toLowerCase())) {
        //     setRedir({ go: true, to: search.toLowerCase() })
        // } else {
        //     setValErr({ open: true, message: `Cannot find a player with a name of ${search}` })
        // }
    }

    return (
        <>
            {redir.go && <Redirect to={`/playerdisplay/${redir.to}`} />}
            <form className="custom-form">
                <div className="form-group">
                <label htmlFor="search" className="m-1 words">Search for your character</label>
                <input type="text"
                    placeholder="John"
                    onChange={handleSearchInput}
                    id="search"
                    name="search"
                    className="m-1 custom-input words"
                    ></input>
                    </div>
                <br></br>
                <button type="submit" onClick={handleSearchSubmit} className="words">Search</button>
                {valErr.open && <PopUp color="danger" message={valErr.message} />}
            </form>
        </>

    )
}

export default PlayerSearchForm