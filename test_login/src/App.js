import React from 'react';
import Login1 from './components/login1/login1'
import Login2 from './components/login2/login2'
import EmailInput from './components/email1/email'
import './App.css';

class App extends React.Component {
  state={
    email_value:"email default"
  }
  handleEmailChange=(e)=>{
    this.setState({email_value:e.target.value})
  }
  render(){
    return (
      <div>
      <Login1></Login1>  
      <Login2></Login2>
      <EmailInput email_value={this.state.email_value} handleChange = {this.handleEmailChange} />
      </div>
    );
  }
}

export default App;
