import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App {
  state = {
    first_box: "first box",
    second_box: "second box"
  };

  handleChange = e => {};
  render() {
    <form>
      <input
        id="#firstbox"
        value={this.state.first_box}
        placeholder="firstbox"
      />
      <button>First button</button>
      <input
        id="#secondbox"
        value={this.state.second_box}
        placeholder="secondbox"
      />
      <button>second button</button>
    </form>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
