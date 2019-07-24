import React from 'react';
import logo from './logo.svg';
import './App.css';


data=[
  {a:1},
  {b:2},
  {c:3},
  {d:[10,20,30]}
  ];
  

function App() {
  return (
    <div className="App">
      < ListItem data={data} />
    
    </div>
  );
}

export default App;
