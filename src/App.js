import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel';

class App extends Component {
  render() {

    const data = [
      {
        "imgLink": "",
        "title": "slide 1",
        "text": ""
      },
      {
        "imgLink": "",
        "title": "slide 2",
        "text": ""
      },
      {
        "imgLink": "",
        "title": "slide 3",
        "text": ""
      },
      {
        "imgLink": "",
        "title": "slide 4",
        "text": ""
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Carousel slides={data} />
      </div>
    );
  }
}

export default App;
