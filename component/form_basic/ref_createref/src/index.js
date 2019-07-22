import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.onChange.bind(this);
  }

  onChange(e) {
    e.persist();
    console.log(e.target.value);
  }

  componentDidMount() {
    //ref updates happen before this. verify state update
    console.log("comp did Mount");
  }

  render() {
    return (
      <div>
        <input
          placeholder="enter data"
          ref={this.textInput}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
