// import React from "react";

// export default function Goodbye({ name }) {
//   return <p>Goodbye, {name}!</p>;
// }
import React, { Component } from "react";

export const age = 35;

export default class Goodbye extends Component {
  render() {
    const { name } = this.props;
    return <p>Goodbye, {name}!</p>;
  }
}
