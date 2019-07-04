import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text_data: "" };
  }

  handleChange = e => {
    this.setState({ text_data: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text_data}
          onChange={this.handleChange}
        />
        <p className="echo">Echo:{this.state.text_data}</p>
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    );
  }
}

export default App;
