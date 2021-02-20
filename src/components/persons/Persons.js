import React from 'react';

import Person from './person/Person';

const persons = props => {
  return props.persons.map(person => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={event => props.changed(event, person.id)}
        deleted={() => props.deleted(person.id)}
      />
    );
  });
};

export default persons;
