import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = props => {
  const style = {
    '@media (max-width: 900px)': {
      width: '400px',
      backgroundColor: '#eee',
    },
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.deleted}>
        i'm {props.name} and i am {props.age} years old
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Radium(person);
