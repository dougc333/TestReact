import React,{Component} from 'react';
import ReactDOM from 'react-dom';



//new way is to embed state directly into object like ivar. 
class App extends Component{
  state = {
   username:"asdfasdf"
  }
  render(){
    return (<div>{this.state.username}</div>)
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

