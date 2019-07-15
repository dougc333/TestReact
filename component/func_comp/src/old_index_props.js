import React from "react";
import ReactDOM from "react-dom";


//ES6 newer
const App1 = props => {
  return <div>"this is app1",{props.name}</div>;
};

ReactDOM.render(<App1 name="foo is name" />, document.getElementById("root"));
