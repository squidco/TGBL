import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import NextButton from "../components/NextButton";
// import { fadeOut, fadeOutWithParams, test } from "../utils/css/animations";
import "./style.css";

function Landing() {
  const [transition, setTransitionState] = useState({
    start: false,
    complete: false,
  });

  function test() {
    if (transition.start === false) {
      setTransitionState({
        start: true,
      });
      var transitionTimer = setInterval(() => {
        setTransitionState({ complete: true });
        clearInterval(transitionTimer);
      }, 1000);
    }
  }

  if (transition.complete === true) {
    return <Redirect to="chooseclass" />;
  }


  return (
    <div
      className={
        transition.start === true
          ? "landing-page-grid fade-out"
          : "landing-page-grid"
      }
      id="landing-page-container"
    >
      <div className="item-a">
        <p className="title">Welcome to The Good Boy List.</p>
        <p className="words">
          If you feel lost, fret not. This realm assists spellcasters with their
          more mundane duties so they focus on sliging spells and being
          sticklers for rules.
        </p>
        <p className="words">
          This tool is fairly simple to use. It is compatible with the base
          magic users in Dungeons & Dragons. Unfortunatly this realm has not yet
          been attuned to connecting with those who wish to bend the winds of
          magic in their own unique ways.
        </p>
        <p className="words">
          All that means is theres no way for YOU to add custom lists. However,
          I am working on that.
        </p>
        <p className="">Now are you ready to start your adventure?</p>
        <NextButton text="Next" click={test} />
      </div>
    </div>
  );
}

export default Landing;
