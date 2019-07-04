import React, { useState } from "react";
import "./App.css";

//function showData(props) {
//  return <p>Echo:{props.data}</p>;
//}

const App = () => {
  const [value, setValue] = useState("");
  const handleChange = e => setValue(e.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p className="echo">Echo:{value}</p>
      <p>This should mirror the text you typed into the input field.</p>
    </div>
  );
};

export default App;
