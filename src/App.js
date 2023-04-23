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
import Characters from "./pages/Characters"
import PlayerDisplay from "./pages/PlayerDisplay";
import ComponentTest from "./pages/ComponentTest";
import LoginPage from "./pages/LoginPage";
import AuthService from "./services/AuthService";

function App() {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/characters">
          {AuthService.loggedIn() ? (
            <Characters />) : (
            <Redirect to="/login" />
          )
          }
        </Route>
        <Route exact path="/playerdisplay/:charactername">
          {AuthService.loggedIn() ? (
            <PlayerDisplay />) : (
            <Redirect to="/login" />
          )}
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
