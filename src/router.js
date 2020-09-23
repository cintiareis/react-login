import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Login from "./components/Login/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
