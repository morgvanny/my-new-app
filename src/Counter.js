import React from 'react'

export default class Counter extends React.Component {
  state = {
    num: 0
  }

  componentDidMount(){
    this.interval = window.setInterval(()=> {
      this.setState((state) => ({num: state.num + 1}))
    }, 1000)
  }

  componentWillUnmount(){
    window.clearInterval(this.interval)
  }

  render(){
    return <p>Count: {this.state.num}</p>
  }
}
