import React, { Component } from 'react';
import Welcome from './Welcome'
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.changeTitle = this.changeTitle.bind(this)

    this.state = {
      title: "Hola mundo desde estado"
    }
  }

  render() {
    const names = ["Daniel", "Angelica", "Emiliano"]
    return (
      <div>
        <Welcome name="Daniel" />
        <Welcome name="Angelica" />
          {names.map (name =>
            <Welcome name={name} />
          )}
        <p>Parrafo</p>
        <h2>{this.state.title}</h2>
        <button onClick={this.changeTitle}>Cambie el titulo</button>
        <ul>
          {names.map (name =>
            <li>{name}</li>
          )}
        </ul>
      </div>
    );
  }

  changeTitle(){
    this.setState({
      title: "Nuevo titulo"
    });
  }
}

export default App;
