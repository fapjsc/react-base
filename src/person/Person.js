import React from 'react';
import './Person.css';

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.deleted}>
        i'm {props.name} and i am {props.age} years old
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
