import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BoilingVerdict(props) {
  if (props.celsius > 100) {
    return <p>hot</p>;
  }
  return <p>not hot</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temp in Celsius</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
