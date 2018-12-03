import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Auxiliary";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Contructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount");
    //sthis.focusInput();
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Persons.j] Inside render");
    return (
      <Aux>
        {/*this.props.authendicated ? <p>Bin drin</p> : null*/}
        <AuthContext.Consumer>
          {auth => (auth ? <p>Bin drin</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          Ich bin {this.props.name} eine Person und {this.props.age} Jahre alt!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.person);
