import React, { Component } from "react";
import logo from "./logo.svg";
import BugStatus from "./components/bugStatus/bugStatusComponent";
import AddBug from "./components/addBug/addBugComponent";
import BugList from "./components/bugList/bugListComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div role="main" class="container">
        <div class="row row-offcanvas row-offcanvas-right">
          <div class="col-12 col-md-9">
            <AddBug />
            <BugList />
          </div>
          <div class="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
            <BugStatus />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
