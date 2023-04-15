import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";
import "./style.css"


//I know the forms should be in their own components
function LoginPage() {
    //state for redirecting to a new page
    const [redir, setRedir] = useState({ to: "" })

    // Toggle to show sign up or login form
    const [toggle, setToggle] = useState(false)

    //Login form state
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })
    //Signup form state
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: ""
    })
    //Login form input
    function handleLoginFormInput(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setLoginForm({ ...loginForm, [name]: value })
    }
    //SignUp form input
    function handleSignUpFormInput(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setSignUpForm({ ...signUpForm, [name]: value })
    }

    function handleLoginSubmit(event) {
        event.preventDefault()
        axios({
            method: "POST",
            url: "/api/auth/login",
            data: loginForm
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                AuthService.login(response.data.token)
                setRedir({ to: response.data.user.email })
            }
        })
    }

    function handleSignUpSubmit(event) {
        event.preventDefault()
        axios({
            method: "POST",
            url: "/api/auth/signup",
            data: signUpForm
        }).then((response) => {
            console.log(response)
            if (response.ok) {
                AuthService.login(response.data.token)
                setRedir({ to: response.data.newUser.email })
            }
        })
    }
    // Toggles sign up form
    function toggleSignUp() {
        setToggle(!toggle)
    }

    return (
        <>
            {!toggle &&
                <div className="text-center login-container">
                    {redir.to && <Redirect to={`/playerdisplay/${redir.to}`} />}
                    <form className="form-signin">
                        <div className="form-group">
                            <label htmlFor="email" className="m-1 words">Email</label>
                            <input
                                id="email"
                                name="email"
                                onChange={handleLoginFormInput}
                                className="m-1 words form-input"
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="m-1 words">Password</label>
                            <input
                            type="password"
                                id="password"
                                name="password"
                                onChange={handleLoginFormInput}
                                className="m-1 words form-input"
                            ></input>
                        </div>
                        <button onClick={handleLoginSubmit} className="m-1 words">Login</button>
                        <button onClick={toggleSignUp} className="m-1 words">Sign Up Here</button>
                    </form>
                </div>
            }
            {toggle &&
                <div className="text-center login-container">
                    {redir.to && <Redirect to={`/playerdisplay/${redir.to}`} />}
                    <form className="form-signin">
                        <div className="form-group">
                            <label htmlFor="email" className="m-1 words">Email</label>
                            <input
                                id="email"
                                name="email"
                                onChange={handleSignUpFormInput}
                                className="m-1 words form-input"
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="m-1 words">Password</label>
                            <input
                                id="password"
                                name="password"
                                onChange={handleSignUpFormInput}
                                className="m-1 words form-input"
                            ></input>
                        </div>
                        <button onClick={handleSignUpSubmit} className="m-1 words">Sign Up</button>
                        <button onClick={toggleSignUp} className="m-1 words">Login Here</button>
                    </form>
                </div>
            }
        </>
    )
}

export default LoginPage