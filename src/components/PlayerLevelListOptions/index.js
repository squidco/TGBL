import React from "react";
import "./style.css";

function PlayerLevelListOptions({ level }) {
  return <option value={level}>{level}</option>;
}
export default PlayerLevelListOptions;
