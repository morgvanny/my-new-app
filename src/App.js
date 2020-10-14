import React from 'react';
import './App.css';
import Counter from './Counter'

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
                  names: ["Sara", "Cahal", "Edite","Another"],
                  showing: true,
                }
    this.toggleShowing = this.toggleShowing.bind(this)
  }

  componentWillUnmount(){
    this.interval.clear()
  }

  toggleShowing(){
    this.setState((state) => ({showing: !state.showing}))
  }

  render() {
    const welcomes = this.state.names.map(name => <Welcome key={name} name={name}/>)
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.toggleShowing}>{this.state.showing ? "Hide" : "Show"}</button>
        {welcomes}
        {this.state.showing ? <Counter /> : null }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
