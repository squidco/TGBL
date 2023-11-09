// import React from "react";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Landing from "./pages/Landing.jsx";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CharacterSelect from "./pages/CharacterSelect.jsx";
import CharacterDisplay from "./pages/CharacterDisplay.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AuthService from "./services/AuthService.js";
import EditCharacter from "./pages/EditCharacter.jsx";

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
          {protectedRoute(<CharacterSelect />, <Landing />)}
          {/* {AuthService.loggedIn() ? <CharacterSelect /> : <Landing />} */}
        </Route>
        {/* <Route path="/characters">
          {protectedRoute(<CharacterSelect/>, <Redirect to="/login"/>)}
        </Route> */}
        <Route exact path="/characterdisplay/:charactername">
          {protectedRoute(<CharacterDisplay />, <Redirect to="/login" />)}
          {/* {AuthService.loggedIn() ? (
            <CharacterDisplay />
          ) : (
            <Redirect to="/login" />
          )} */}
        </Route>
        <Route exact path="/login">
          {protectedRoute(<Redirect to="/" />, <LoginPage />)}
          {/* {!AuthService.loggedIn() ? <LoginPage /> : <Redirect to="/" />} */}
        </Route>
        <Route exact path="/edit/:charactername">
          {protectedRoute(<EditCharacter />, <Redirect to="/login" />)}
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
