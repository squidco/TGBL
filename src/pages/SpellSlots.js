import React, { useState } from "react";
import PlayerForm from "../components/PlayerForm";
import "./style.css";
import { Redirect } from "react-router-dom";
import PlayerSearchForm from "../components/PlayerSearchForm";

function SpellSlots() {  

  const [transition, setTransitionState] = useState({
    start: false,
    slotStart: false,
  });

  return (
    <div className={`mt-3 container op-1 ${transition.start === true ? "op-0" : null}`}>
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
        <div className="col-md-4">
          <PlayerSearchForm />
          <br />
          <PlayerForm />
        </div>
      </section>
    </div>
  );
}

export default SpellSlots;