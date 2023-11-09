import axios from "axios";
import React, { useState } from "react";
import { redirect } from "react-router-dom";
import AuthService from "../services/AuthService";
import PopUp from "./PopUp.jsx";
import "../App.css";

export default function LoginForm() {
  //state for redirecting to a new page
  const [redir, setRedir] = useState({ to: "" });

  //Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // sets any alerts to the user in a pop up
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "success",
  });

  //Login form input
  function handleInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: loginForm,
      });

      console.log(data);
      if (data.token) {
        AuthService.login(data.token);
        // Redirects to the characters page
        setRedir({ to: true });
      }
    } catch (error) {
      console.log(error);
      setAlert({
        show: true,
        message: error.response.data,
        color: "danger",
      });
    }
  }

  return (
    <>
      {redir.to && <redirect push to={`/`} />}
      <form className="form-signin">
        <div className="form-group">
          <label htmlFor="email" className="m-1 words">
            Email
          </label>
          <input
            id="email"
            name="email"
            onChange={handleInput}
            className="m-1 words form-input"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="m-1 words">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
            className="m-1 words form-input"
          ></input>
        </div>
        <button onClick={handleSubmit} className="m-1 words">
          Login
        </button>
        {alert.show && (
          <PopUp color={alert.color} message={alert.message}></PopUp>
        )}
      </form>
    </>
  );
}
