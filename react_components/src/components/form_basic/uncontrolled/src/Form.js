import React, { Component } from "react";
//uncontrolled form uses a ref
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
