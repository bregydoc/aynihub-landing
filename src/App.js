import React, { Component } from "react";
import { LastLocationProvider } from "react-router-last-location";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LastLocationProvider>
          <Switch>
            <Route path={"/"} component={HomePage} />
          </Switch>
        </LastLocationProvider>
      </BrowserRouter>
    );
  }
}

export default App;
