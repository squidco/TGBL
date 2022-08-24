import React from "react";
import Nav from "./components/Nav/index";
import "./App.css";
import Landing from "./pages/Landing.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChooseClass from "./pages/ChooseClass";
import Spellbook from "./pages/SpellBook";
import SpellSlots from "./pages/SpellSlots"
import PlayerDisplay from "./pages/PlayerDisplay";

function App() {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route  path="/spellslots">
          <SpellSlots />
        </Route>
        <Route exact path="/playerdisplay">
          <PlayerDisplay />
        </Route>
        <Route exact path="/spellbook">
          <Spellbook />
        </Route>
      </Switch>
    </>
  );
}

export default App;
