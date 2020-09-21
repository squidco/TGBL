import React from "react";
import "./style.css";

function PlayerLevelListOptions({ listLength }) {
  for (var i = 0; i < listLength; i++) {
    return <option value={i}>{i}</option>;
  }
}
export default PlayerLevelListOptions;
