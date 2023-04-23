import React from "react";
import { Redirect } from "react-router-dom";


// Don't remember if any of these animations actually worked as intended
// I'm sure there are better ways to go about animating a page anyway
// Going to keep them around in a legacy code file just in case I want to 
// Come back to these ever
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

// ========================================================================================


// Rough Code for trying to have transitions between pages. Locally it had no problems;
// Deployed it had several bugs like the state not resetting itself even with the useEffect
// When going back a page using the browsers built in arrows to navigate
// Removed because it was too buggy and not the main focus of the app for now

 //State for the css animation that is triggered in the changePage function
 const [transition, setTransitionState] = useState(false);

 // Use effect to reset state
 useEffect(() => {
   console.log("useEffect")
   setTransitionState(false)
 }, [])

 //This function may be used in many places so I may make it a util function
 //Triggers the animation for this page and changes the url afterwords to the new page
 function changePage(page) {
   if (transition === false) {
     setTransitionState(true);
     setTimeout(() => {
       window.location.href = page;
     }, 1000);
   }
 }

export { fadeOut, fadeIn, fadeOutWithParams, test };
