import React, { Component } from "react";
import ReactDOM from "react-dom";

//embed state directly into object like ivar.
//modify state using setState which takes a callback
//state change on serverState, props change, eventhandler
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleChange(e) {
    e.persist();
    //console.log("inputbox:", document.getElementById("inputbox").value);
    console.log("handlechange e:", e);
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <div>
        {this.state.username}
        <input
          value={this.state.username}
          type="text"
          placeholder="put stuff here"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
