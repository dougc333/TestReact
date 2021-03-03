import React from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div style={{ position: "absolute", left: mouse.x, top: mouse.y }}>
        This is Cat, {mouse.x},{mouse.y}
      </div>
    );
  }
}

class MouseCat extends React.Component {
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
        <Cat mouse={this.state}></Cat>
      </div>
    );
  }
}

export default MouseCat;
