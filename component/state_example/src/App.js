import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      proposedAnswer:
        Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3,
      numQuestions: 0,
      numCorrect: 0
    };
    //should refactor this to use this.state{}

    this.handleTrue = this.handleTrue.bind(this);
    this.handleFalse = this.handleFalse.bind(this);
    this.update_question = this.update_question.bind(this);
  }

  handleTrue(e) {
    console.log("handleTrue event:", e);
    this.update_question();
    this.setState(state => ({
      numQuestions: this.state.numQuestions + 1,
      numCorrect: this.state.numCorrect + 1
    }));
  }
  handleFalse(e) {
    console.log("handleFalse event:", e);
    this.update_question();
    this.setState(state => ({
      numQuestions: this.state.numQuestions + 1
    }));
  }

  update_question() {
    this.setState(state => ({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      proposedAnswer:
        Math.floor(Math.random() * 3) +
        this.state.value1 +
        this.state.value2 +
        this.state.value3
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${
              this.state.value2
            } + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleTrue}>True</button>
          <button onClick={this.handleFalse}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
