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
  render() {
    return (
      <div>
        <input placeholder="stuff should be dtyped here" ref={this.setRef} />
        <button onClick={e => this.clickButton(e)}> Submit </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
