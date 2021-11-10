import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddRecipe from "./pages/AddRecipe";


function App() {  
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/addrecipe" component={AddRecipe} />
      </Switch>
    </Fragment>
  );
}

export default connect()(App);
