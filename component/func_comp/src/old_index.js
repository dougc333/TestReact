import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(){
  return(
  <div>
    <h6>each functional component can only return 1 element</h6>
  </div>)
}

function FirstComp(){
 return(
   <div>
     and the first letter of the component must be capitalized
   </div>
 ) 
}



ReactDOM.render(
     <Welcome />,
  document.getElementById('root'));

