import React, { Component } from 'react';
import './App.css';
import Header from '../navbar/navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p> Hello world </p>
      </div>
    );
  }
}

export default App;
