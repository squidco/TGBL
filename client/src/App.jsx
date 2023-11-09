// import React from "react";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Landing from "./pages/Landing.jsx";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import CharacterSelect from "./pages/CharacterSelect.jsx";
import CharacterDisplay from "./pages/CharacterDisplay.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AuthService from "./services/AuthService.js";
import EditCharacter from "./pages/EditCharacter.jsx";

function App() {
  function protectedRoute(loggedInComp, defaultComp) {
    if (AuthService.loggedIn()) {
      console.log("Logged In")
      return loggedInComp;
    } else {
      console.log("Not logged in")
      return defaultComp;
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={protectedRoute(<CharacterSelect />, <Landing />)} />
        <Route exact path="/characterdisplay/:charactername" element={protectedRoute(<CharacterDisplay />, <redirect to="/login" />)} />
        <Route exact path="/login" element={protectedRoute(<redirect to="/" />, <LoginPage />)}/>
        <Route exact path="/edit/:charactername" element={protectedRoute(<EditCharacter />, <redirect to="/login" />)}/>
      </Routes>
    </>
  );
}

export default App;
