import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Harry",
        age: 35
      },
      {
        name: "Linus",
        age: 9
      },
      {
        name: "Hilde",
        age: 1
      }
    ],
    otherState: "was anderes",
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log("click");
    // DON'T DO THIS: this.state.persons[0].name = "Harald";
    // DO THIS:
    this.setState({
      persons: [
        {
          name: "Harald",
          age: 35
        },
        {
          name: newName,
          age: 9
        },
        {
          name: "Hilde",
          age: 2
        }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: "Harry",
          age: 35
        },
        {
          name: event.target.value,
          age: 9
        },
        {
          name: "Hilde",
          age: 1
        }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hallo</h1>
        <p>Läuft!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hallo!!")
    // );
  }
}

export default App;
