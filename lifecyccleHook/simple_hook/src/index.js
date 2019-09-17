import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Counter(){
  const [count,setCount] = useState(0);
  return(
   <div>
      <p>{count}</p>
      <button onCLick={ ()=>setCount(count+1) }> increment </button>
      <button onClick={ ()=>setCount(count-1) }> decrement </button>
   </div>
  )
}



ReactDOM.render(<Counter />, document.getElementById('root'));

