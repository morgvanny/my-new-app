import React from "react";
import { age } from "./Goodbye";
export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.toggle}>
        {age}Turn {this.props.status ? "Off" : "On"}
      </button>
    );
  }
}
