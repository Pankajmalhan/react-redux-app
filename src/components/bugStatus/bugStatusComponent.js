import React, { Component } from "react";
class BugStatus extends Component {
  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item active">Bug Status</li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Total Bugs
            <span class="badge badge-primary badge-pill">totalBug</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Assigned Bugs
            <span class="badge badge-secondary badge-pill">assignBug</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Unassigned Bugs
            <span class="badge badge-primary badge-pill">unassignedBug</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Pending Bugs
            <span class="badge badge-warning badge-pill">pendingBug</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Reopen Bug
            <span class="badge badge-danger badge-pill">reopenBug</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Completed Bug
            <span class="badge badge-success badge-pill">completedBug</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default BugStatus;
