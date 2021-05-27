import React, {Component} from 'react';
import TopNav from "./components/TopNav";
import MainNav from "./components/MainNav";
import "./scss/MainNav.scss";


import Login from "./views/Login";
import { routes } from "./views/Index";
import "./scss/Login.scss";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div>
        <TopNav />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <img src={ "../images/logo.png" } alt="logo" />
      </div>
      <div>
        <MainNav />
      </div>
      <Switch>
        {routes.map((route) => {
          return (
            <Route exact path={route.path}>
              {<route.Component />} {/*just calling a function accept use angle brackets*/}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
