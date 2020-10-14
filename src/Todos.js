import React, { Component } from 'react'
import TodoForm from './TodoForm'

export default class Todos extends Component {

  state = {
    todos: ["Clean sink", "Iron clothes"]
  }


  addTodo = (input) => {
    this.setState((state) => {
      return {todos: [...state.todos, input]}
    })
  }



  render() {

    const items = this.state.todos.map(t => {
                    return <li key={t} >{t}</li>
                  })

    return (
      <div>
        <h1>Todos</h1>
        <ul>
        {items}
        <TodoForm addTodo={this.addTodo}/>
        </ul>
      </div>
    )
  }
}
