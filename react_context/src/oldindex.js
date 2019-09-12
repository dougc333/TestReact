//test component
import React from 'react'
import ReactDOM from 'react-dom'

function Parent({name}){
  return(
    <div>
      <h1>parent</h1>
      <Child name={name}/>  
    </div>
  )
}

function Child({name}){
  return(
   <div>
     <h1>Child</h1>
     <GrandChild name={name}/>  
   </div>
  )
}

function GrandChild({name}){
    return(
      <div>
        <h3>Grandchild</h3>
        <h3>Name:{name}</h3>
      </div>
    )
}

class App extends React.Component{
  render(){
    const name = "Bob";
    return(
      <Parent name={name}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
