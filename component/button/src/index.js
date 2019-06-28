import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     isToggleOn: true,
     num:0 
    };
    this.num_click = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, num_click) => ({
      isToggleOn: !state.isToggleOn
    }));
    this.state.num++;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <div id="nc">{this.state.num}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
