import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hallo</h1>
        <p>Läuft!</p>
        <Person />
        <Person />
        <Person />
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
