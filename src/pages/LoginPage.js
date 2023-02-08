import React, { useState } from "react";
import "./style.css"

function LoginPage() {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    function handleFormInput(event){
        event.preventDefault();
        const {name, value} = event.target;
        setLoginForm({ ...loginForm, [name]: value})
    }

    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="username" className="m-1 words">Username</label>
                <input
                    id="username"
                    name="username"
                    onChange={handleFormInput}
                    className="m-1 words"
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="m-1 words">Password</label>
                <input
                    id="password"
                    name="password"
                    onChange={handleFormInput}
                    className="m-1 words"
                ></input>
            </div>
        </div>
    )
}
