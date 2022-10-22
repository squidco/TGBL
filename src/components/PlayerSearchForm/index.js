import React, { useState } from "react";
import { Redirect } from "react-router-dom";


function PlayerSearchForm() {
    const [redir, setRedir] = useState({ go: false, to: "" })

    const [search, setSearch] = useState("")

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
        <div>
            {redir.go && <Redirect to={`/playerdisplay/${redir.to}`} />}
            <form>
                <input type="text"
                    placeholder="Search for your name"
                    onChange={handleSearchInput}
                    id="search"
                    name="search"
                    className="m-1"
                ></input>
                <button type="submit" onClick={handleSearchSubmit}>Search</button>
            </form>
        </div>
    )
}

export default PlayerSearchForm