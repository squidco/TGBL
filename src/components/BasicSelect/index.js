import React from "react";
import BasicOption from "../BasicOption";
// import "./style.css";

function BasicSelect(props) {
    var optionArray = []

    // Checks if the list being created will just be numbers
    // Iterates through and adds each number to a select if true
    // If it is an array I use the spread syntax to add all the arrays options to the optionArray
    if (typeof props.list === "number") {
        for (let i = 1; i < props.list + 1; i++) {
            optionArray.push(i);
        }
    } else {
        optionArray = [...props.list]
    }

    return (
        <>
            <label>{`${props.label}:`}</label>
            <select onChange={props.handleFormInput} id={props.id} name={props.name}>
                {optionArray.map((el) => (
                    <BasicOption optionValue={el} />
                ))}
            </select>
        </>
    );
}

export default BasicSelect;
