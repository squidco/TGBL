import axios from "axios";
import React, { useState } from "react";
import { redirect } from "react-router-dom";
import AuthService from "../services/AuthService";
import PopUp from "./PopUp";

export default function SignUpForm() {
  //state for redirecting to a new page
  const [redir, setRedir] = useState({ to: "" });

  //Signup form state
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });

  // sets any alerts to the user in a pop up
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "success",
  });

  //SignUp form input
  function handleInput(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/auth/signup",
        data: signUpForm,
      });
      console.log(data);
      if (data.token) {
        AuthService.login(data.token);
        setRedir({ to: true });
      }
      if (data.errors) {
        setAlert({
          show: true,
          message: data.message,
          color: "danger",
        });
      }
    } catch (error) {
      console.log(error.message);
      setAlert({
        show: true,
        message: error.data.message,
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
            id="password"
            name="password"
            onChange={handleInput}
            className="m-1 words form-input"
          ></input>
        </div>
        <button onClick={handleSubmit} className="m-1 words">
          Sign Up
        </button>
        {alert.show && (
          <PopUp color={alert.color} message={alert.message}></PopUp>
        )}
      </form>
    </>
  );
}
