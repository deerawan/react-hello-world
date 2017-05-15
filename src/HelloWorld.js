import React from 'react';
import './HelloWorld.css';

const HelloWorld = (props) => {
  return (<div className="HelloWorld">Hello world {props.name}</div>);
};

export default HelloWorld;