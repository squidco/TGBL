import React, { useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import { Link } from "react-router-dom";
import "../App.css";

function Landing() {
  const [loggedIn, setLoggedIn] = useState(AuthService.loggedIn());

  useEffect(() => {
    setLoggedIn(AuthService.loggedIn());
  }, [window.location.href]);

  return (
    <section className="container op-1" id="landing-page-container">
      <br />
      <p className="title">Welcome to The Good Boy List.</p>
      <br />
      <p className="words">
        This site is designed to help spell casters with the more mundane parts
        of spellcasting. Managing your spell slots on a sheet of paper only gets
        messy. Erasing and filling in over and over is a pain and adding new
        spell slot trackers takes time that you would rather spend playing DnD.
        That's where TGBL comes in! With TGBL we do the annoying work for you.
        You can create your character and enter their spell slots then let us do
        the rest. We will generate a spell slot tracker for you with togglable
        slots so if you expend a slot its merely a click of a button to change.
      </p>
      <br />
      {loggedIn ? (
        <></>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
        </>
      )}
    </section>
  );
}

export default Landing;
