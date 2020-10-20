import React from "react";
import Button from "./Button";
import "./App.css";
import Counter from "./Counter";
import Goodbye from "./Goodbye";
import PokemonContainer from "./PokemonContainer";

function Welcome(props) {
  console.log("Welcome rendered");
  return <h1>Hello, {props.name}</h1>;
}
class App extends React.Component {
  state = {
    names: ["Morgan", "Bryce"],
    firstName: "",
    lastName: "",
    showing: true,
  };

  toggleShowing = () => {
    this.setState((state) => ({ showing: !state.showing }));
  };

  addName = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      names: [...state.names, state.newName],
      newName: "",
    }));
  };

  changeNameField = (e) => {
    let nameStr = "";
    if (e.target.value.length > 0) {
      nameStr = e.target.value[0].toUpperCase() + e.target.value.slice(1);
    }
    this.setState({ [e.target.name]: nameStr });
  };

  render() {
    console.log("App rendered");
    const welcomes = this.state.names.map((name) => (
      <Welcome key={name} name={name} />
    ));

    return (
      <div className="App">
        <header className="App-header">
          <Button />

          <PokemonContainer />

          <button onClick={this.toggleShowing}>
            {this.state.showing ? "Hide" : "Show"}
          </button>
          {welcomes}
          <form onSubmit={this.addName}>
            <label>
              First Name:
              <input
                onChange={this.changeNameField}
                name="firstName"
                value={this.state.firstName}
              />
            </label>
            <label>
              Last Name:
              <input
                onChange={this.changeNameField}
                name="lastName"
                value={this.state.lastName}
              />
            </label>
            <input type="submit" />
          </form>
          {this.state.showing ? <Counter /> : null}
          <p>Age: {this.props.age}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Goodbye name={"BJ"} />
        </header>
      </div>
    );
  }
}

export default App;
