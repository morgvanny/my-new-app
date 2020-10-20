import React, { Component } from "react";
import Pokemon from "./Pokemon";

function rand() {
  return Math.floor(Math.random() * 892 + 1);
}

export default class PokemonContainer extends Component {
  state = {
    number: rand(),
  };

  generateNumber = () => {
    this.setState({ number: rand() });
  };

  componentDidMount() {
    this.getPokemon();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.number != this.state.number) {
      this.getPokemon();
    }
  }

  getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.number}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: data.name,
          weight: data.weight,
          img: data.sprites.front_default,
        });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.generateNumber}>Get a New Random Pokemon</button>
        <Pokemon
          name={this.state.name}
          weight={this.state.weight}
          img={this.state.img}
        />
      </div>
    );
  }
}
