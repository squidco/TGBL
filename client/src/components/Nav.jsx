import React, { useState, useEffect } from "react";
import "./style.css";
import AuthService from "../services/AuthService";
import { Link } from "react-router-dom";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(AuthService.loggedIn());

  useEffect(() => {
    setLoggedIn(AuthService.loggedIn());
  }, [window.location.href]);

  return (
    <nav className="bar">
      <div className="col-md-9">
        <Link className="logo" to="/">
          TGBL
        </Link>
        {loggedIn ? (
          <>
            <button className="words" onClick={AuthService.logout}>
              Logout
            </button>
            <Link to={"/characters"}>Characters</Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
