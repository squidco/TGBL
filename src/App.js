import React from "react";
import Nav from "./components/Nav/index";
import "./App.css";
import Landing from "./pages/Landing.js";
import Hamburger from "./components/Hamburger";

function App() {
  return (
    <>
      <Nav></Nav>
      <div>
        <Hamburger></Hamburger>
        <Landing></Landing>
      </div>
    </>
  );
}

export default App;
