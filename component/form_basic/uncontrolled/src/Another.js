import React, { Component } from "react";

class Another extends Component {
  state = {
    firstValue: {
      first_field: "",
      second_field: ""
    },
    secondValue: ""
  };

  updateOnChange = () => {
    console.log("updateOnChange");

  };
  handleSubmit = e => {
    e.preventDefault(); 
    console.log("handleSubmit");
    
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Another component</p>
        <input
          type="text"
          name="firstValue"
          placeholder="enter firstValuetext here"
          value={this.state.firstValue.first_field}
          onChange={this.updateOnChange}
        />

        <button onClick={this.updateOnChange} />
      </form>
    );
  }
}

export default Another;
