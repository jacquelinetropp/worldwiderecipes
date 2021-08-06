import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import store from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./firebase/firebase";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
