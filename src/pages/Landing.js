import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { fadeOut, fadeOutWithParams, test } from "../utils/css/animations";
import "./style.css";

function Landing() {
  const [pageState, setPageState] = useState("landing");

  function test2() {
    setPageState("chooseclass")
  }

  function fadeOut(event) {
    var page = event.target.dataset.page;
    var container = document.getElementById(event.target.dataset.container);
    container.classList.add("fade-out");
    if (page !== undefined) {
      setInterval(() => {
        container.classList.add("hidden");
        // var url = window.location.origin + "/" + page;
        // return <Redirect to={page}></Redirect>;
        setPageState("chooseclass")
      }, 2000);
    }
  }

  switch (pageState) {
    case "landing":
      return (
        <div className="landing-page-grid" id="landing-page-container">
          <div className="item-a">
            <p className="title">Welcome to The Good Boy List.</p>
            <p className="words">
              If you feel lost, fret not. This realm assists spellcasters with
              their more mundane duties so they focus on sliging spells and
              being sticklers for rules.
            </p>
            <p className="words">
              This internet based reality is fairly simple to use. It is
              compatible with the base magic users in Dungeons & Dragons.
              Unfortunatly this realm has not yet been attuned to connecting
              with those who wish to bend the winds of maigc in their own unique
              ways.
            </p>
            <p className="words">
              All that means is theres no way for YOU to add custom lists.
              However, I am working on that.
            </p>
            <p className="">Now are you ready to start your adventure?</p>
            <button
              className="start-btn"
              data-page="chooseclass"
              data-container="landing-page-container"
              onClick={fadeOut}
            >
              Get Started
            </button>
          </div>
        </div>
      );
    case "chooseclass":
      return <Redirect to={pageState}></Redirect>;
      break;
    default:
      break;
  }
}

export default Landing;
