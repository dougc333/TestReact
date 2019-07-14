import React, { Component } from "react";
import ReactDOM from "react-dom";

//embed state directly into object like ivar.
//modify state using setState which takes a callback
//state change on serverState, props change, eventhandler
class App extends Component {
  state = {
    username: "test username"
  };
  //the solution didnt bind the function in the ctor but if you use function_name=e=>{} there
  //is a bind done for you!! how to verify this? in the debugger
  //arrow functions bind this w/the function in ES6
  handleChange = e => {
    console.log("inputbox:", document.getElementById("inputbox").value);
    console.log("handlechange e:", e);
    this.setState({ username: document.getElementById("inputbox").value });
    console.log("after setstate:", this.state.username);
  };
  render() {
    return (
      <div>
        {this.state.username}
        <input
          id="inputbox"
          type="text"
          placeholder="put stuff here"
          //value={this.state.username}
        />
        <button onClick={this.handleChange}>Presss here</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
