import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Description from "./Components/Description";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Header />
          <Body />
        </Route>
        <Route exact path="/description/:id" component={Description} />
      </Switch>
    </Router>
  );
}

export default App;
