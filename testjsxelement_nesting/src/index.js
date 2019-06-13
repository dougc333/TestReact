import React from 'react';
import ReactDOM from 'react-dom';


const people = [
 {name:'aaaa'},
 {name:'bbbb'},
 {name:'cccc'}
]


const element = React.createElement('div',null,
  React.createElement('div',null,'i am a nested div would be interesting how react does validation for elements which cant be nested')
)

const nested = React.createElement('div',null,
  React.createElement('strong',null,'nested react create element')
)

const Jsx_element = <div key='jsx_element'>jsx element am i here</div>
const Jsx_second = <div key='jsx_second'>jsx second do you see me</div>


const list_example = React.createElement('ol',null,
 React.createElement('li',null,'first'),
 React.createElement('li',null, 'second'),
 React.createElement('li',null,'third')
)

const another_list = React.createElement('ol',null,
   people.map((x)=>(React.createElement('li',null,x.name))
)) 

//a jsx element should be nested inside a div
//wrap js in curly braces for jsx
const jsx_const_no_key = <div> <ol>
  {people.map((x)=>(
  <li>{x.name}</li>
))}
</ol>
</div>

const jsx_const_key =<div> <ol>
{people.map((x)=>(
  <li key={x.name}>{x.name}</li>
))}
</ol> 
</div>

ReactDOM.render(
  <div>
    <Jsx_element/>,
    <Jsx_second/>,
  </div>, 
  document.body);

