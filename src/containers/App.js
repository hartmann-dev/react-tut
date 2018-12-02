import React, { PureComponent } from "react";
import classes from "./App.css";

import WithClass from "../hoc/WithClass";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Contructor", props);
    this.state = {
      persons: [
        {
          id: 1,
          name: "Harry",
          age: 35
        },
        {
          id: 2,
          name: "Linus",
          age: 9
        },
        {
          id: 3,
          name: "Ilse",
          age: 1
        }
      ],
      otherState: "was anderes",
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] Inside render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Zeich her
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hallo!!")
    // );
  }
}

export default App;
