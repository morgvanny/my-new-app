import React, { Component } from 'react'

export default class TodoForm extends Component {

  state = {input: ''}

  changeInput = (e) => {
      this.setState({input: e.target.value})
    }

  submitTodo = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.input)
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitTodo}>
        <input name="todo" onChange={this.changeInput} value={this.state.input}/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}
