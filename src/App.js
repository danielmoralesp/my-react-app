import React, { Component } from 'react';
import Welcome from './Welcome'
import axios from 'axios'
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.changeTitle = this.changeTitle.bind(this)

    this.state = {
      title: "Hola mundo desde estado",
      names: []
    }

    axios.get("http://localhost:3001/names")
      .then(response => {
        this.setState({
          names: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
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
        <ul>
          {this.state.names.map(name =>
            <li key={name}>{name}</li>
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
