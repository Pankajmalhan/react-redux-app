import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {addNewBug} from '../../action/Action';
class AddBug extends Component {
  constructor(props){
    super(props);
    this.state={
      description:'',
      project:'',
      priority:''
    }
  }
  addBug=()=>{
    this.props.addNewBug(Object.assign({},{id:Date.now()+Math.random()},this.state));
  }
  render() {
    return (
      <div className="card">
        <h4 className="card-header">Bug Dashboard</h4>
        <div className="card-body">
          <h4 className="card-title">Add new bug</h4>

          <form>
            <div className="form-row">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e)=>{
                    this.setState({
                      description:e.target.value
                    })
                  }}
                  id="description"
                  name="description"
                />
              </div>
              <div className="col-auto">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Priority"
                  id="reprioritysponsible"
                  name="priority"
                  onChange={(e)=>{
                    this.setState({
                      project:e.target.value
                    })
                  }}
                >
                  <option value="Bike">Bike</option>
                  <option value="Car">Car</option>
                  <option value="Health">Health</option>
                  <option value="Home">Home</option>
                  <option value="ProHealth">ProHealth</option>
                </select>
              </div>
              <div className="col-auto">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Priority"
                  id="reprioritysponsible"
                  name="priority"
                  onChange={(e)=>{
                    this.setState({
                      priority:e.target.value
                    })
                  }}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-info" onClick={this.addBug}>
                  Add Bug
                </button>
              </div>
            </div>
          </form>
          <br />
          <a href="#" className="btn btn-danger">
            Clear List
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addNewBug:addNewBug 
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBug);

