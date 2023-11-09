import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "../App.css"


//I know the forms should be in their own components
function LoginPage() {
    // Toggle to show sign up or login form
    const [toggle, setToggle] = useState(false)

    // Toggles sign up form
    function toggleSignUp() {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="text-center login-container">
                {!toggle &&
                    <LoginForm />
                }
                {toggle &&
                    <SignUpForm />
                }
                <button onClick={toggleSignUp} className="m-1 words">{!toggle ? "Sign Up Here" : "Login Here"}</button>
            </div>
        </>
    )
}

export default LoginPage