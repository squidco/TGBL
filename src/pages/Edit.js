import React, { useState, useEffect } from "react";
import "./style.css";
import { Redirect, useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

function Edit() {
  let { charactername } = useParams();

// You are trying to get the edit page working. Currently it could technically update a character but form fields don't populate with their previous values.
// Also you get rendering errors from the spellslotinput components whenever character state doesnt have a nos array

  return (
    <div className={`mt-3 container op-1`}>
      <section className="row">
        <div className="col-md-12">
          <h1 className="title">Edit your character's details.</h1>
        </div>
      </section>
      <section className="row">
        <div className="col-md-4">
          <EditForm characterName={charactername}/>
        </div>
      </section>
    </div>
  );
}

export default Edit;
