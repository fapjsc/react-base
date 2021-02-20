import React from 'react';
// import './Person.css';
import styled from 'styled-components';

// person div style
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (max-width: 900px) {
    background-color: #eee;
    color: blue;
  }
`;

const person = props => {
  return (
    <StyledDiv>
      <p onClick={props.deleted}>
        i'm {props.name} and i am {props.age} years old
      </p>
      <input type="text" onChange={props.changed} />
    </StyledDiv>
  );
};

export default person;
