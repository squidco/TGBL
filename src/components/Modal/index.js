import React from "react";
import "./style.css"

function Modal({children}) {
return (
    <div className="modal-container">
        {children}
    </div>
)
}

export default Modal