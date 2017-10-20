import React, { Component } from 'react';
import './App.css';
import JediList from '../jedi/list';
import SithList from '../sith/list';

/**
 * App main class
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <JediList />
        <SithList />
      </div>
    );
  }
}

export default App;
