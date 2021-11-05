import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Fragment>
  );
}

export default connect()(App);
