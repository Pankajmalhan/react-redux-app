import React, { Component } from "react";

class BugList extends Component {
  render() {
    return (
      <>
        <h4>Bug List</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">BugId</th>
              <th scope="col">Project</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Health</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Health</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@TwBootstrap</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Health</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Health</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default BugList;
