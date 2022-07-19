import { render } from "@testing-library/react";
import React from "react";
import "./style.css";

function SpellSlotInputs(props) {
  var slotInputs;
  var slotArray = [];
  //I thought making a backwards for loop would would but it did not
    for (var i = props.highestSlot; i >= 1; i--) {
      var number = `lv${i}`;
      slotArray.push(number);
    }

  if (props.highestSlot) {
    //Reversing the array because it comes out in order
    slotArray = slotArray.reverse()
    slotInputs = slotArray.map((level) => (
      <input onChange={props.handleInput} id={level} name={level} key={level} type="number" placeholder={level + " spell slots"}></input>
    ));
  } 

  return (<div>{slotInputs}</div>)
}

export default SpellSlotInputs;
