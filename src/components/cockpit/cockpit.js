import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  background-color: ${props => (props.altClass ? 'blue' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
        background-color: ${props => (props.altClass ? 'aqua' : 'lightgreen')};
        color: black;
      },
`;

const cockpit = props => {
  const classes = [];

  // const testClass = ['big red bold'];

  if (props.persons.length <= 2) {
    classes.push('red'); // classess = ['red']
  }

  if (props.persons.length <= 1) {
    classes.push('bold'); // classess = ['red', 'bold']
  }

  if (props.persons.length == 0) {
    classes.push('big'); // classes = ['red', 'bold', 'big']
  }

  return (
    <div>
      <h1>React App</h1>
      <p className={classes.join(' ')}>this is working</p>
      <StyleButton altClass={props.showUser} onClick={props.toggleUser}>
        show user
      </StyleButton>
    </div>
  );
};

export default cockpit;
