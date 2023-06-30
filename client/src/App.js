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
import CharacterSelect from "./pages/CharacterSelect";
import CharacterDisplay from "./pages/CharacterDisplay";
import ComponentTest from "./pages/ComponentTest";
import LoginPage from "./pages/LoginPage";
import AuthService from "./services/AuthService";
import EditCharacter from "./pages/EditCharacter";

function App() {
  function protectedRoute(loggedInComp, defaultComp) {
    if (AuthService.loggedIn()) {
      return loggedInComp;
    } else {
      return defaultComp;
    }
  }

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          {protectedRoute(<CharacterSelect/>, <Landing/>)}
          {/* {AuthService.loggedIn() ? <CharacterSelect /> : <Landing />} */}
        </Route>
        {/* <Route path="/characters">
          {protectedRoute(<CharacterSelect/>, <Redirect to="/login"/>)}
        </Route> */}
        <Route exact path="/characterdisplay/:charactername">
          {protectedRoute(<CharacterDisplay/>, <Redirect to="/login"/>)}
          {/* {AuthService.loggedIn() ? (
            <CharacterDisplay />
          ) : (
            <Redirect to="/login" />
          )} */}
        </Route>
        <Route exact path="/componenttest">
          <ComponentTest />
        </Route>
        <Route exact path="/login">
          {protectedRoute(<Redirect to="/"/>, <LoginPage/>)}
          {/* {!AuthService.loggedIn() ? <LoginPage /> : <Redirect to="/" />} */}
        </Route>
        <Route exact path="/edit/:charactername">
          {protectedRoute(<EditCharacter/>, <Redirect to="/login"/>)}
          {/* {AuthService.loggedIn() ? (
            <EditCharacter />
          ) : (
            <Redirect to="/login" />
          )} */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
