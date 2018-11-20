import React from "react";

import "./Person.css";

const person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>
        Ich bin {props.name} eine Person und {props.age} Jahre alt!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
