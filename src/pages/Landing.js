import React, { useEffect, useState } from "react";
import "./style.css";

function Landing() {
  //State for the css animation that is triggered in the changePage function
  const [transition, setTransitionState] = useState(false);

  // Use effect to reset state
  useEffect(() => {
    console.log("useEffect")
    setTransitionState(false)
  }, [])

  //This function may be used in many places so I may make it a util function
  //Triggers the animation for this page and changes the url afterwords to the new page
  function changePage(page) {
    if (transition === false) {
      setTransitionState(true);
      setTimeout(() => {
        window.location.href = page;
      }, 1000);
    }
  }

  return (
    <section className={`container op-1 ${transition === true ? "op-0" : null}`} id="landing-page-container">
      <br />
      <p className="title">Welcome to The Good Boy List.</p>
      <br />
      <p className="words">
        The goal now is to just track spell slots first and then expand to
        tracking your own spells. To avoid lawsuits you will only be able to
        track them locally on your pc. So you will have to put in the spells
        yourself unfortunatly. The spell slot tracker is functional. You can see the demo for it if you press the spell slots button below. I will be working on saving your character next.
      </p>
      <br />
      <button onClick={() => changePage("/spellslots")}>SpellSlots</button>
    </section>
  );

  //Additional notes: I may want to make the button that I click to change pages a component
  //but I feel like that could trigger a bunch of problems with getting the animation to work and changing the page
}

export default Landing;
