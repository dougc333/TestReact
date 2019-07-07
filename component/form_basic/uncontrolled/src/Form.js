import React, { Component } from "react";

class Form extends Component {
  handleSubmit = () => {
    console.log("handleSubmit:", this.name.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={x => (this.name = x)} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default Form;
