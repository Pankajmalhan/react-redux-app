import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class BugList extends Component {
  render() {
    console.log(this.props,"component")
    return (
      <>
        <h4>{this.props.message}</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">BugId</th>
              <th scope="col">Project</th>
              <th scope="col">Description</th>
              <th scope="col">Priority</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.bugList.map((item)=><tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.project}</td>
              <td>{item.description}</td>
              <td>{item.priority}</td>
            </tr>)
            }
            
          </tbody>
        </table>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    bugList: state.bug.bugsList,
    message:state.global
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BugList);

