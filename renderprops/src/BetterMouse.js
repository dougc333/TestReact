import React from "react";

class BetterMouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  handleMouse = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouse}>
        MousePos:{this.state.x}, {this.state.y}
      </div>
    );
  }
}
export default BetterMouse;
