import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    username: ""
  };

  handleChange = e => {
    console.log("handleChange e.target.value:", e.target.value);
    console.log("handleChange e.target.name:", e.target.name);

    //this.setState(username:e.target.value);
  };

  disableButton = e => {
    console.log("disablebutton");
    return false;
  };

  buttonClick = e => {
    console.log("buttonClick");
    console.log("handleChange e.target.value:", e.target.value);
    console.log("handleChange e.target.name:", e.target.name);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter username here:"
          onChange={this.handleChange}
          name="input_username"
        />
        <button onChange={this.buttonClick} disable={this.disableButton}>
          Submit
        </button>

        <p>{this.state.username}</p>
      </div>
    );
  } //end render
}

ReactDOM.render(<App />, document.getElementById("root"));
