import { render } from "@testing-library/react";
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
      return new Promise((resolve) => {
        setTimeout(() => {
          // setTransitionState({ complete: true });
          resolve(console.log("bingo"));
        }, 1000);
      });
    }
  }

  async function changePage(page) {
    const buffer = await test();
    console.log(page);
    console.log(transition);
    console.log("If statement");
    // render(<Redirect to={page} />)
    window.location.href = page
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
        <button onClick={() => changePage("/chooseclass")}>SpellSlots</button>
      </div>
    </div>
  );
}

export default Landing;
