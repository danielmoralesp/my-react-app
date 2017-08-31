import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ["Daniel", "Angelica", "Emiliano"]
    return (
      <div>
        <h1>Hola Mundo </h1>
        <p>Parrafo</p>
        <ul>
          {names.map (name =>
            <li>{name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
