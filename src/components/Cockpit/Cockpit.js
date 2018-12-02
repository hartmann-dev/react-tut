import React from "react";
import Auxiliary from "../../hoc/Auxiliary"
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.button;

  if (props.showPersons) {
    btnClass = [classes.button, classes.red].join (' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Auxiliary>
      <h1>Hallo {props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>Läuft!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Auxiliary>
  );
};

export default cockpit;
