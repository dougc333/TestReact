import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//old way is to use props for state components and put props in ctor
class Before extends Component{
  constructor(props){
    super(props);
    this.state = {count:props.initialCount};
  }
}

var Counter = createReactClass({
  getInitialState: function(){
    return {count:this.props.initialCount};
  }
});


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

