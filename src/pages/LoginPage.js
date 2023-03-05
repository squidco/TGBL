import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css"

function LoginPage() {
    //state for redirecting to a new page
    const [redir, setRedir] = useState({ to: "" })

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    function handleFormInput(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setLoginForm({ ...loginForm, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("something")
        axios({
            method: "POST",
            url: "/api/auth/login",
            data: loginForm
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                document.cookie = `token=${response.data.token}; Secure;`
                setRedir({ to: response.data.user.email })
            }
        })
    }

    return (
        <div className="text-center login-container">
            {redir.to && <Redirect to={`/playerdisplay/${redir.to}`} />}
            <form className="form-signin">
                <div className="form-group">
                    <label htmlFor="email" className="m-1 words">Email</label>
                    <input
                        id="email"
                        name="email"
                        onChange={handleFormInput}
                        className="m-1 words form-input"
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="m-1 words">Password</label>
                    <input
                        id="password"
                        name="password"
                        onChange={handleFormInput}
                        className="m-1 words form-input"
                    ></input>
                </div>
                <button onClick={handleSubmit} className="m-1 words">Login</button>

            </form>
        </div>
    )
}

export default LoginPage