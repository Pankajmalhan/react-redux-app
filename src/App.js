import React, { Component } from "react";
import logo from "./logo.svg";
import BugStatus from "./components/bugStatus/bugStatusComponent";
import AddBug from "./components/addBug/addBugComponent";
import BugList from "./components/bugList/bugListComponent";
import "./App.css";
import store from './store/appStore';
import {Provider} from 'react-redux';
class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}> 
      <div role="main" className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-12 col-md-9">
            <AddBug />
            <BugList />
          </div>
          <div className="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
            <BugStatus />
          </div>
        </div>
        <hr />
      </div>
      </Provider>
    );
  }
}

export default App;
