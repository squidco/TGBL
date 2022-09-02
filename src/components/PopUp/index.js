import React from "react";

function PopUp({color, message}) {
    //arguments for color can be: primary, secondary, success, danger, warning, info, light, dark
    //message should be sent as a string
    return (
        <div className={`alert alert-${color}`}>{message}</div>
    )
}

export default PopUp