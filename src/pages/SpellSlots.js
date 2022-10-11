import React, { useState } from "react";
import PlayerForm from "../components/PlayerForm";
import "./style.css";
import { Redirect } from "react-router-dom";

function SpellSlots() {
  const [redir, setRedir] = useState({ go: false, to: "" })
  //State for the css animation that is triggered in the changePage function
  const [valErr, setValErr] = useState({
    open: false,
    message: ""
  })

  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  //State for getting search input
  const [search, setSearch] = useState("")

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
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
      {redir.go && <Redirect to={`/playerdisplay/${redir.to}`} />}
      <section className="row">
        <div className="col-md-12">
          <h1 className="title">Enter your character's details.
            <br />
            or
            <br />
            Search for your character's name.</h1>
        </div>
      </section>
      <section className="row">
        <div className="col-md-6">
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
          <br />
          <PlayerForm />
        </div>
      </section>
    </div>
  );
}

export default SpellSlots;