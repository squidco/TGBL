import React from "react";
import "./style.css"

function Modal({children}) {
    // What ever is passed in for children will be rendered inside the modal
return (
    <div className="modal-container">
        {children}
    </div>
)
}

export default Modal