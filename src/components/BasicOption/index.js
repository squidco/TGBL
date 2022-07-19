import React from "react";
// import "./style.css";

function BasicOption(props) {
    if (typeof props.optionValue === "string") {
        return <option value={props.optionValue.toLowerCase()} key={props.optionValue.toLowerCase()}>{props.optionValue}</option>;
    } else if (typeof props.optionValue === "number") {
        return <option value={props.optionValue} key={props.optionValue}>{props.optionValue}</option>
    }
}

export default BasicOption;
