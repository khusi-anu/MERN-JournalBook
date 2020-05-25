import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/navbar";
import Dashboard from "./components/Dashboard/dashboard";
import ProjectDetails from "./components/Projects/projectDetails";
import signin from "./components/Authentication/signin";
import signup from "./components/Authentication/signup";
import CreateProject from "./components/Projects/CreateProject";

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
