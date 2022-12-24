import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css"

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
    function handleSearchSubmit(event) {
        event.preventDefault()
        if (localStorage.getItem(search.toLowerCase())) {
            setRedir({ go: true, to: search.toLowerCase() })
        } else {
            setValErr({ open: true, message: `Cannot find a player with a name of ${search}` })
        }
    }

    return (
        <>
            {redir.go && <Redirect to={`/playerdisplay/${redir.to}`} />}
            <form className="custom-form">
                <div className="form-group">
                <label htmlFor="search" className="m-1">Search for your character</label>
                <input type="text"
                    placeholder="John"
                    onChange={handleSearchInput}
                    id="search"
                    name="search"
                    className="m-1 custom-input"
                    ></input>
                    </div>
                <br></br>
                <button type="submit" onClick={handleSearchSubmit}>Search</button>
            </form>
        </>

    )
}

export default PlayerSearchForm