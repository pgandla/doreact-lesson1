import React, { Component } from "react";

class ctlrForm extends Component {
  state = {
    fname: "",
    lname: ""
  };
  render() {
    return (
      <div>
        <form>
          <label>
            First Name :
            <input
              type="text"
              name="txtName"
              value={this.state.fname}
              onChange={this.changeHandle}
            />
          </label>
          <input type="Submit" value="Submit" />
        </form>
      </div>
    );
  }
}
