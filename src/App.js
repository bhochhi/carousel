import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarouselContainer from './components/carousel';

class App extends Component {
  render() {

    const data = [
      {
        "imgUrl": "https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123-1500x1000.jpg",
        "title": "slide 1",
        "text": ""
      },
      {
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ci0ezjHQGFexu2j2Ju9PlPbwxSGLc5v1kaDrOZuHkLNgB6pm",
        "title": "slide 2",
        "text": ""
      },
      {
        "imgUrl": "https://c1.staticflickr.com/9/8337/8249916497_118e8ea675_b.jpg",
        "title": "slide 3",
        "text": ""
      },
      {
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlaFu6tu5_djDS3HPyXak09gxOfXkePCKHEe5RRbUIzATlees",
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
        <CarouselContainer slides={data} />
      </div>
    );
  }
}

export default App;
