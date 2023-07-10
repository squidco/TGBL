import React, { useState, useEffect } from "react";
import "../styles/Nav.css";
import AuthService from "../services/AuthService";
import { Link } from "react-router-dom";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(AuthService.loggedIn());

  useEffect(() => {
    setLoggedIn(AuthService.loggedIn());
  }, [window.location.href]);

  return (
    <nav>
      <div className="nav-links">
        <Link className="logo" to="/">
          TGBL
        </Link>
        {loggedIn ? <Link to={"/"}>Characters</Link> : <></>}
      </div>
      <div>
        {loggedIn ? (
          <button className="words" onClick={AuthService.logout}>
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
