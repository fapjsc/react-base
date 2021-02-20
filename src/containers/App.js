import React, { Component } from 'react';

import './App.css';

import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 33 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 },
    ],
    showUser: false,
  };

  toggleUser = () => {
    const doesShow = this.state.showUser;
    this.setState({
      showUser: !doesShow,
    });
  };

  handleChange = (event, id) => {
    const person = { ...this.state.persons.find(p => p.id === id) };
    person.name = event.target.value;

    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });
  };

  handleDelete = id => {
    const persons = [...this.state.persons].filter(person => person.id !== id);

    this.setState({
      persons,
    });
  };

  render() {
    let persons = null;

    if (this.state.showUser) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.handleChange}
          deleted={this.handleDelete}
        />
      );

      // style.backgroundColor = 'red';
      // style.color = 'blue';

      // style[':hover'] = {
      //   backgroundColor: 'yellow',
      //   color: 'red',
      // };
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showUser={this.state.showUser}
          toggleUser={this.toggleUser}
        />
        {persons}
      </div>
    );
  }
}

export default App;
