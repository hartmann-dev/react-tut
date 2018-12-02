import React, { Component } from "react";

import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Contructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount");
  }

  render() {
    console.log("[Persons.j] Inside render");
    return (
      <WithClass classes={classes.person}>
        <p onClick={this.props.click}>
          Ich bin {this.props.name} eine Person und {this.props.age} Jahre alt!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}
export default Person;
