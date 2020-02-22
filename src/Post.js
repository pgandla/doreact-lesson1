import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    Post: ""
  };
  handleClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/2").then(resp => {
      this.setState({ Post: resp.data.title });
    });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Get data
        </button>
        <p>{this.state.Post}</p>
      </div>
    );
  }
}
export default Post;
