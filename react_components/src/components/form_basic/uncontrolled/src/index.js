import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./Form";
import Another from "./Another";
//there is no bind here have to use ref
//refs only work with Component, not functinal components
// odd w/no ctor because you define this._name in the html element
// and assign it to ref which is attached
// to the dom element

class App extends Component {
  render() {
    return (
      <div>
        this is Form component
        <Form />
        end Form component
        <Another />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
