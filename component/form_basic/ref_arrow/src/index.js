import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    store_stuff: ""
  };

  setRef = e => {
    this.setState({ store_stuff: e });
  };

  clickButton = e => {
    console.log("store_stuff:", this.state.store_stuff.value);
  };
  //that is odd, it accumulates in e.target.value instead of just being a single character
  //cause that is what is in the text box.
  onChange = e => {
    e.persist();
    console.log("onChange:", e.target.value);
  };

  render() {
    return (
      <div>
        <input
          placeholder="stuff should be dtyped here"
          ref={this.setRef}
          onChange={this.onChange}
        />
        <button onClick={e => this.clickButton(e)}> Submit </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
