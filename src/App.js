import React, { Component } from 'react';
import './App.css';

import Person from './person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 33 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 },
    ],
    showUser: true,
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
    console.log(persons);
    console.log(this.state.persons);

    this.setState({
      persons,
    });
  };

  render() {
    // Style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showUser) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.handleChange(event, person.id)}
                deleted={() => this.handleDelete(person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p>this is working</p>
        <button style={style} onClick={this.toggleUser}>
          show user
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
