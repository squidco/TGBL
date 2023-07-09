import React from "react";
import "../styles/SpellSlotInputs.css";

function SpellSlotInputs(props) {
  var slotInputs;
  var slotArray = [];
  //I thought making a backwards for loop would spit out the inputs in the correct order but it didn't
  for (var i = props.highestSlot; i >= 1; i--) {
    var number = i;
    slotArray.push(number);
  }

  if (props.highestSlot) {
    //Reversing the array because it comes out in order
    slotArray = slotArray.reverse()
    slotInputs = slotArray.map((level) => (
      <div className="form-group" key={level}>
        <label htmlFor={level} className="m-1">{"Level " + level + " spell slots"}</label>
        <input onChange={props.handleChange} id={level} name="slots" type="number" placeholder={"Level " + level + " spell slots"} className={"m-1 custom-input"}></input>
      </div>
    ));
  }

  return (<div className={props.modal ? "modal-version" : null}>
    {slotInputs}
    {props.modal &&
      <div className="row">
        <button onClick={props.toggleModal}>Close</button>
        <button onClick={props.handleSubmit}>Save</button>
      </div>
    }
  </div>)
}

export default SpellSlotInputs;
