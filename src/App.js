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
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hallo</h1>
        <p>Läuft!</p>
        <button>Namensänderung</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Star Wars
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
