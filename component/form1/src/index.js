import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//
//
//
class App extends Component{
  state={email: this.props.email}
  handleChange=(event)=>{
    this.setState({email:event.target.value})
  }
  render(){
    return(
      <form>
         <input type="text" value={this.state.email} \>
         onChange = {this.handleChange} \>
 
      </form>
     )
  }

}



ReactDOM.render(<App />, document.getElementById('root'));

