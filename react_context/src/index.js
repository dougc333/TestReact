//test component
import React from 'react'
import ReactDOM from 'react-dom'


const Context = React.createContext()

function Parent(){
  return(
    <div>
      <h1>parent</h1>
      <Child />  
    </div>
  )
}

function Child(){
  return(
   <div>
     <h1>Child</h1>
     <GrandChild />  
   </div>
  )
}

function GrandChild({name}){
    return(
     <Context.Consumer>
      {(name)=>(
       <div>
        <h3>Grandchild</h3>
        <h3>Name:{name}</h3>
      </div>
      )}
     </Context.Consumer>
    );
}

class App extends React.Component{
  render(){
    const name = "Bob";
    return(
      <Context.Provider value={name} >
      <Parent />
      </Context.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
