import React from "react";
import "./style.css";

function Landing() {
  return (
    <div className="landing-page-grid">
      <div className="item-a">
        <p className="title">Welcome to The Good Boy List</p>
        <p className="words">
          Welcome to the The Good Boy List, traveler. If you feel lost, fret
          not. This realm assists spellcasters with their more mundane duties so
          they focus on sliging spells and being sticklers for rules.
        </p>
        <p className="words">
          This internet based reality is fairly simple to use. It is compatible
          with the base magic users in Dungeons & Dragons. Unfortunatly this
          realm has not yet been attuned to connecting with those who wish to
          bend the winds of maigc in their own unique ways.
        </p>
        <p className="words">
          All that means is theres no way for YOU to add custom lists. However,
          I am working on that.
        </p>
        <p className="">Now are you ready to start your adventure?</p>
      </div>
    </div>
  );
}

export default Landing;
