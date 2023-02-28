import axios from "axios";
import React, { useState } from "react";
import "./style.css"

function LoginPage() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    function handleFormInput(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setLoginForm({ ...loginForm, [name]: value })
    }

    function handleSubmit() {
        axios({
            method: "POST",
            url: "/api/auth/login",
            data: loginForm
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                document.cookie = `token=${response.data.token}; Secure;`
            }
        })
    }

    return (
        <div className="text-center login-container">
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