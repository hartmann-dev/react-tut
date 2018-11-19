import React from "react";

const person = props => {
  return (
    <p>
      Ich bin {props.name} eine Person und {props.age} Jahre alt!
    </p>
  );
};

export default person;
