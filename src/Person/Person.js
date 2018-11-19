import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        Ich bin {props.name} eine Person und {props.age} Jahre alt!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
