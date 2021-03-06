import React, { Component } from "react";
class AddBug extends Component {
  render() {
    return (
      <div class="card">
        <h4 class="card-header">Bug Dashboard</h4>
        <div class="card-body">
          <h4 class="card-title">Add new bug</h4>

          <form>
            <div class="form-row">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  id="description"
                  name="description"
                />
              </div>
              <div class="col-auto">
                <select
                  type="text"
                  class="form-control"
                  placeholder="Priority"
                  id="reprioritysponsible"
                  name="priority"
                >
                  <option value="Bike">Bike</option>
                  <option value="Car">Car</option>
                  <option value="Health">Health</option>
                  <option value="Home">Home</option>
                  <option value="ProHealth">ProHealth</option>
                </select>
              </div>
              <div class="col-auto">
                <select
                  type="text"
                  class="form-control"
                  placeholder="Priority"
                  id="reprioritysponsible"
                  name="priority"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-info">
                  Add Bug
                </button>
              </div>
            </div>
          </form>
          <br />
          <a href="#" class="btn btn-danger">
            Clear List
          </a>
        </div>
      </div>
    );
  }
}

export default AddBug;
