// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
