import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Help from "./Pages/Help/Help";
import About from "./Pages/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/help" component={Help}></Route>
      </Switch>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
