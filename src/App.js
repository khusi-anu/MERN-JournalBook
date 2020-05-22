import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../src/Layout/navbar";
import Dashboard from "../src/Dashboard/dashboard";
import ProjectDetails from "../src/Projects/projectDetails";
import signin from "../src/Authentication/signin";
import signup from "../src/Authentication/signup";
import CreateProject from "../src/Projects/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={signin} />
            <Route path="/signup" component={signup} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
