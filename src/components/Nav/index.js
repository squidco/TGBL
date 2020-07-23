import React from "react"
import logo from "../../assets/images/Squid.jpg"
import "./style.css"

function Nav() {
    return(
        <div className="row bar">
            <div className="col">
                <img src={logo} alt="logo goes here" className="logo"></img>
            </div>
            <div className="col">
                <p>hamburger goes here</p>
            </div>
        </div>
    )
}

export default Nav