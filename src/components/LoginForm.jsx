import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";
import "../pages/style.css"

export default function LoginForm() {
    //state for redirecting to a new page
    const [redir, setRedir] = useState({ to: "" })

    //Login form state
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    //Login form input
    function handleInput(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setLoginForm({ ...loginForm, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios({
            method: "POST",
            url: "/api/auth/login",
            data: loginForm
        }).then((response) => {
            console.log(response)
            // I was originally going to do response.statusText === "OK" here to check if the response was good
            // However that is not working out too well because errors are coming back as 200 and OK
            if (response.data.token) {
                AuthService.login(response.data.token)
                // Redirects to the characters page
                setRedir({ to: true })
            }
        })
    }

    return (
        <>
            {redir.to && <Redirect to={`/characters`} />}
            <form className="form-signin">
                <div className="form-group">
                    <label htmlFor="email" className="m-1 words">Email</label>
                    <input
                        id="email"
                        name="email"
                        onChange={handleInput}
                        className="m-1 words form-input"
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="m-1 words">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleInput}
                        className="m-1 words form-input"
                    ></input>
                </div>
                <button onClick={handleSubmit} className="m-1 words">Login</button>
            </form>
        </>
    )
}

