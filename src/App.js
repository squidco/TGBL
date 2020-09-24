import React, { useState } from "react";
import Nav from "./components/Nav/index";
import "./App.css";
import Landing from "./pages/Landing.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hamburger from "./components/Hamburger";
import ChooseClass from "./pages/ChooseClass";
import Spellbook from "./pages/Spellbook";

function App() {
  const [hamburgerState, setHamburgerState] = useState("hide");

  function handleHamburgerClick() {
    console.log("lol");
    if (hamburgerState === "hide") {
      setHamburgerState("show");
    } else {
      setHamburgerState("hide");
    }
  }

  return (
    <Router>
      <Nav handleHamburgerClick={handleHamburgerClick}></Nav>
      <Hamburger hamburgerState={hamburgerState}></Hamburger>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/chooseclass">
          <ChooseClass />
        </Route>
        <Route exact path="/spellbook">
          <Spellbook></Spellbook>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
