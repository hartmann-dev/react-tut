import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hallo</h1>
        <p>Läuft!</p>
        <Person name="Harry" age="35" />
        <Person name="Linus" age="9">
          My Hobbies: Star Wars
        </Person>
        <Person name="Hilde" age="1" />
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
