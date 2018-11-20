import React from "react";
import Radium from "radium";

import "./Person.css";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="person" style={style}>
      <p onClick={props.click}>
        Ich bin {props.name} eine Person und {props.age} Jahre alt!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
