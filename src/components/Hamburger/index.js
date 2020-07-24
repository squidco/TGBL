import React from "react"
import "./style.css"

function hamburgerMenu() {
    return(
        <div className="hamburger-menu">
            <div className="row">
                <input className="search-bar" id="search-input"></input>
            </div>
            <div className="row hamburger-link">
                <h2>Account</h2>
            </div>
            <div className="row">
                <h2>Account</h2>
            </div>
            <div className="row">
                <h2>Account</h2>
            </div>
        </div>
    )
}

export default hamburgerMenu