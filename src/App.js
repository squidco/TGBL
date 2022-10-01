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
import ComponentTest from "./pages/ComponentTest";

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
        <Route exact path="/playerdisplay/:playername">
          <PlayerDisplay />
        </Route>
        <Route exact path="/spellbook">
          <Spellbook />
        </Route>
        <Route exact path="/componenttest">
          <ComponentTest />
        </Route>
      </Switch>
    </>
  );
}

export default App;
