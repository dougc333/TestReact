import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class ContactList extends React.Component{
  render(){
    const p = [
	{name:'aaaa'},
	{name:'bbbb'},
	{name:'cccc'}
   ]
   return <ol>
     {p.map((x)=>(
	<li key={x.name}>{x.name}</li>
     ))}
   </ol>
  }
}


ReactDOM.render(<ContactList />, document.getElementById('root'));

