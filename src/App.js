import React from "react";
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
import axios from "axios";

async function routeGuard() {
  const token = document.cookie
    .split('; ').find((row) => row.startsWith("token="))
    ?.split("=")[1]
  console.log(token)

  let dbRes = await axios({
    method: "POST",
    url: "/api/auth/checkauth",
    data: { token }
  })

  console.log(dbRes)
  if (dbRes.status === 200) {
    console.log(dbRes.status)
    return true
  } else {
    console.log(dbRes.status)
    return false
  }
}


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
        <Route exact path="/playerdisplay/:playername" render={() => (
          routeGuard() ? (
            <PlayerDisplay />) : (
            <Redirect to="/login"></Redirect>
          )
        )}>
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
