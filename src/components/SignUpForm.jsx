import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";
import "../pages/style.css"

export default function SignUpForm() {
    //state for redirecting to a new page
    const [redir, setRedir] = useState({ to: "" })

    //Signup form state
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: ""
    })

    //SignUp form input
    function handleInput(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setSignUpForm({ ...signUpForm, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios({
            method: "POST",
            url: "/api/auth/signup",
            data: signUpForm
        }).then((response) => {
            console.log(response)
            if (response.data.token) {
                AuthService.login(response.data.token)
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
                            id="password"
                            name="password"
                            onChange={handleInput}
                            className="m-1 words form-input"
                        ></input>
                    </div>
                    <button onClick={handleSubmit} className="m-1 words">Sign Up</button>
                </form>
        </>
    )
}
