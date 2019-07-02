import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    this.state = {
      wantToRead: 0,
      read: 0,
      currentlyReading: 0,
      books: [
        {
          title: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling",
          index: 0,
          wantToRead: 0,
          read: 0
        },
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          index: 1,
          wantToRead: 0,
          read: 0
        },
        {
          title: "Oh, the Places You'll Go!",
          author: "Seuss",
          index: 2,
          wantToRead: 0,
          read: 0
        },
        {
          title: "The Adventures of Tom Sawyer",
          author: "Mark Twain",
          index: 3,
          wantToRead: 0,
          read: 0
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
