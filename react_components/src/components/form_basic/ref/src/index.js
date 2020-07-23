import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.username = "";
    this.setRef = e => {
      this.username = e;
    };
  }

  onChange = e => {
    console.log("onChange:", this.username.value);
  };

  render() {
    return (
      <div>
        <input placeholder="enter data here" ref={this.setRef} />
        <button onClick={e => this.onChange(e)}>Submit</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
