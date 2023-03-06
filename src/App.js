import React, { useState } from "react";
import Nav from "./components/Nav/index";
import "./App.css";
import Landing from "./pages/Landing.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ChooseClass from "./pages/ChooseClass";
import Spellbook from "./pages/SpellBook";
import SpellSlots from "./pages/SpellSlots"
import PlayerDisplay from "./pages/PlayerDisplay";
import ComponentTest from "./pages/ComponentTest";
import LoginPage from "./pages/LoginPage";
import AuthService from "./services/AuthService";
import axios from "axios";

function App() {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/spellslots">
          <SpellSlots />
        </Route>
        <Route exact path="/playerdisplay/:playername">
          {AuthService.loggedIn() ? (
            <PlayerDisplay />) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/spellbook">
          <Spellbook />
        </Route>
        <Route exact path="/componenttest">
          <ComponentTest />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
