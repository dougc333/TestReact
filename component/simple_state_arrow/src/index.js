import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    username: ""
  };

  handleChange = e => {
    console.log("handleChange e.target.value:", e);

    this.setState({ username: e.target.value });
  };

  disableButton = () => {
    return (this.state.username === "").toString();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter username here:"
          onChange={this.handleChange.bind(this)}
        />
        <button disable={this.disableButton()}>Submit</button>
        <p>Echo of this.state</p>
        <p>{this.state.username}</p>
      </div>
    );
  } //end render
}

ReactDOM.render(<App />, document.getElementById("root"));
