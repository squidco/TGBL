import React from "react";
import { Redirect } from "react-router-dom";

function fadeIn(id) {
  var container = document.getElementById(id);
  container.classList.add("fade-in");
  var removeFadeIn = setInterval(() => {
    container.classList.remove("fade-in");
    clearInterval(removeFadeIn);
  }, 2001);
}

function fadeOut(event) {
  var page = event.target.dataset.page;
  var container = document.getElementById(event.target.dataset.container);
  container.classList.add("fade-out");
  if (page !== undefined) {
    setInterval(() => {
      container.classList.add("hidden");
      var url = window.location.origin + "/" + page;
      return <Redirect to={url}></Redirect>;
    }, 2000);
  }
}

function fadeOutWithParams(page, containerId) {
  var container = document.getElementById(containerId);
  console.log(container);
  container.classList.add("fade-out");
  var changePage = setInterval(() => {
    container.classList.add("hidden");
    // var url = window.location.origin + "/" + page;
    // window.location.assign(url);
    clearInterval(changePage);
    return <Redirect to={page} />;
  }, 2000);
}

function test(page, containerId) {
  var container = document.getElementById(containerId);
  container.classList.add("fade-out");
  if (page !== undefined) {
    setInterval(() => {
      container.classList.add("hidden");
      return <Redirect to={page}></Redirect>;
    }, 2000);
  }
}

export { fadeOut, fadeIn, fadeOutWithParams, test };
