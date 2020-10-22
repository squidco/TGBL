import React from "react";
import "./style.css";

function HalfCaster({ caster }) {
  var spellList = ["poo pee", "pee poo"];
  return (
    <>
      <p>What spells do you know?</p>
      <form>
        {spellList.map((element) => (
          <>
            <input
              type="checkbox"
              id={element}
              name={element}
              value={element}
            />
            <label for={element}>{element}</label>
          </>
        ))}
      </form>
    </>
  );
}

export default HalfCaster;
