import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.username = "";
    this.setRef = e => {
      console.log("setRef:%o", e);
      console.log("before setting this.username:", this.username.value);
      this.username = e;
      console.log("after setting this.username:", this.username.value);
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
