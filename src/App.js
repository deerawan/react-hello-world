import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="budi" />
      <HelloWorld name="santi" />
      <HelloWorld name="lusi" />
      <HelloWorld name="thomas" />
    </div>
  );
};

export default App;