import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

class App extends React.Component {


  state = {
      names: ["Sara", "Cahal", "Edite","Another"]
    }



  render() {

  const variable = "Hi!"
  return (
    <div className="App">
      <header className="App-header">
      <h1>{variable}</h1>
      {this.state.names.map(name => <Welcome name={name}/>)}
        <p>
           <code>src/App.js</code> and save to reload.
        </p>
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
