import React from 'react'

export default class Button extends React.Component {

  render(){
    return <button onClick={this.props.toggle}>Turn {this.props.status ? "Off" : "On" }</button>
  }
}
