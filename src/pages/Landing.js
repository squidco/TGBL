import React, { useEffect, useState } from "react";
import "./style.css";

function Landing() {
  //State for the css animation that is triggered in the changePage function
  const [transition, setTransitionState] = useState({
    start: false,
  });
  
  // Use effect to reset state
  useEffect(() => {
    setTransitionState({
      start: false
    })
  }, [])

  //This function may be used in many places so I may make it a util function
  //Triggers the animation for this page and changes the url afterwords to the new page
  function changePage(page) {
    if (transition.start === false) {
      setTransitionState({
        start: true,
      });
      setTimeout(() => {
        window.location.href = page;
      }, 1000);
    }
  }

  return (
    <div
      className={`container op-1 ${transition.start === true ? "op-0" : null}`} id="landing-page-container">
      <p className="title">Welcome to The Good Boy List.</p>
      <p className="title">This app is undergoing development.</p>
      <p className="words">
        The goal now is to just track spell slots first and then expand to
        tracking your own spells. To avoid lawsuits you will only be able to
        track them locally on your pc. So you will have to put in the spells
        yourself unfortunatly. The spell slot tracker is functional. You can see the demo for it if you press the spell slots button below. I will be working on saving your character next.
      </p>
      {/* <p className="words">
          If you feel lost, fret not. This realm assists spellcasters with their
          more mundane duties so they focus on sliging spells and being
          sticklers for rules.
        </p> */}
      {/* <p className="words">
          This tool is fairly simple to use. It is compatible with the base
          magic users in Dungeons & Dragons. Unfortunatly this realm has not yet
          been attuned to connecting with those who wish to bend the winds of
          magic in their own unique ways.
        </p>
        <p className="words">
          All that means is theres no way for YOU to add custom lists. However,
          I am working on that.
        </p> */}
      {/* <p className="">Now are you ready to start your adventure?</p> */}
      {/* <NextButton text="Next" click={changePage} /> */}
      <button onClick={() => changePage("/spellslots")}>SpellSlots</button>
    </div>
  );

  //Additional notes: I may want to make the button that I click to change pages a component
  //but I feel like that could trigger a bunch of problems with getting the animation to work and changing the page
}

export default Landing;
