import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  num_click = 0;
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    this.num_click++;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" + { tihs.num_click } : "OFF"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
