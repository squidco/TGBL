import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Landing() {
  function fadeOut() {
    var page = document.getElementById("landing-page-container");
    page.classList.add("fade");
    setInterval(() => {
      changePage();
    }, 2100);
  }

  function changePage() {
    var url = window.location.href + "spellbook";
    window.location.assign(url)
    console.log(url);
  }

  return (
    <div className="landing-page-grid" id="landing-page-container">
      <div className="item-a">
        <p className="title">Welcome to The Good Boy List,</p>
        <p className="words">
          traveler. If you feel lost, fret not. This realm assists spellcasters
          with their more mundane duties so they focus on sliging spells and
          being sticklers for rules.
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
        <button onClick={fadeOut}>Get Started</button>
      </div>
    </div>
  );
}

export default Landing;
