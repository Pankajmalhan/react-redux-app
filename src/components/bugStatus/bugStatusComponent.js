import React, { Component } from "react";
class BugStatus extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item active">Bug Status</li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Total Bugs
            <span className="badge badge-primary badge-pill">totalBug</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Assigned Bugs
            <span className="badge badge-secondary badge-pill">assignBug</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Unassigned Bugs
            <span className="badge badge-primary badge-pill">unassignedBug</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Pending Bugs
            <span className="badge badge-warning badge-pill">pendingBug</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Reopen Bug
            <span className="badge badge-danger badge-pill">reopenBug</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Completed Bug
            <span className="badge badge-success badge-pill">completedBug</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default BugStatus;
