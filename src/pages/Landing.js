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
        This site is designed to help spell casters with the more mundane parts of spellcasting. Managing your spell slots on a sheet of paper only gets messy. Erasing and filling in over and over is a pain and adding new spell slot trackers takes time that you would rather spend playing DnD. That's where TGBL comes in!
        With TGBL we do the annoying work for you. You can create your character and enter their spell slots then let us do the rest. We will generate a spell slot tracker for you with togglable slots so if you expend a slot its merely a click of a button to change.
      </p>
      <br />
      <button onClick={() => changePage("/spellslots")}>SpellSlots</button>
    </section>
  );

  //Additional notes: I may want to make the button that I click to change pages a component
  //but I feel like that could trigger a bunch of problems with getting the animation to work and changing the page
}

export default Landing;
