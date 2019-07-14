import React, { Component } from "react";
import ReactDOM from "react-dom";

//embed state directly into object like ivar.
//modify state using setState which takes a callback
//state change on serverState, props change, eventhandler
class App extends Component {
  state = {
    username: "asdfasdf"
  };
  //the solution didnt bind the function in the ctor. maybe only for functional components?
  handleChange() {
    console.log("handlechange:", this.state.username);
  }
  render() {
    return (
      <div>
        {this.state.username}
        <input
          id="inputbox"
          type="text"
          placeholder="put stuff here"
          ref={x => (this.state.username = x)}
        />
        <button onClick={this.handleChange}>Presss here</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
