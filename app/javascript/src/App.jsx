import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import CreateTask from "components/Tasks/Create";

import Dashboard from "./components/Dashboard";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact path="/about" render={() => <div>About</div>} />
      <Route exact component={CreateTask} path="/tasks/create" />
      <Route exact component={Dashboard} path="/dashboard" />
    </Switch>
  </Router>
);

export default App;
