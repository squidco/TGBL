import React from "react";
import "./style.css";

function PlayerClassListOptions({ playerClass }) {
  var lowercase = playerClass.toLowerCase();
  return <option value={lowercase}>{playerClass}</option>;
}

export default PlayerClassListOptions;
