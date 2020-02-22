import React, { Component } from "react";
import User from "./User";

class userState extends Component {
  state = {
    Users: [
      { name: "Tony", key: "u1" },
      { name: "Thor", key: "u2" }
    ]
  };
  render() {
    const CssStyle = {
      margin: "40px",
      border: "5px dashed blue"
    };
    return (
      <div>
        {this.state.Users.map(user => {
          return <User userName={user.name} key={user.key} />;
        })}
        <button onClick={this.clicked}>ClickMe</button>
      </div>
    );
  }
  clicked = () => {
    this.setState({
      Users: [
        { name: "Marvel", key: "i1" },
        { name: "Steve", key: "i2" }
      ]
    });
  };
}

export default userState;
