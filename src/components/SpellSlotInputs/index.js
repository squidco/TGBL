import React from "react";
import "./style.css";

function SpellSlotInputs(props) {
  var slotInputs;
  var slotArray = [];
  //I thought making a backwards for loop would spit out the inputs in the correct order but it didn't
  for (var i = props.highestSlot; i >= 1; i--) {
    var number = `lv${i}`;
    slotArray.push(number);
  }

  if (props.highestSlot) {
    //Reversing the array because it comes out in order
    slotArray = slotArray.reverse()
    slotInputs = slotArray.map((level) => (
      <input onChange={props.handleChange} id={level} name="slots" key={level} type="number" placeholder={level + " spell slots"} className={"m-1"}></input>
    ));
  }

  return (<div>{slotInputs}</div>)
}

export default SpellSlotInputs;
