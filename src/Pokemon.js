import React from "react";

export default function Pokemon(props) {
  return (
    <div>
      {props.name ? (
        <>
          <h1>{props.name}</h1>
          <img src={props.img} alt={`${props.name}`} />
          <h2>Weight: {props.weight}</h2>
        </>
      ) : (
        <p>Loading Pokemon Data...</p>
      )}
    </div>
  );
}
