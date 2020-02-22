import React, { Component } from "react";
class unCtrlForm extends Component {
  submitHandle = e => {
    e.preventDefault();
    alert(this.refs.txtName.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <label>
            First Name :
            <input
              type="text"
              name="txtName"
              ref="txtName"
              defaultValue="React"
            />
          </label>
          <input type="Submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default unCtrlForm;
