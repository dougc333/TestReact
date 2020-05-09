import React from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import { getThemeProps } from '@material-ui/styles';


class App extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {text_data:""};
    this.foo = "asdf";
    console.log("asfd");
  }

  handleChange= (e,name)=>{
    console.log("name:",name);
    let name="foo";
    console.log("event:",e);
    console.log("event.target:",e.target);
    console.log("x: ",e.pageX,"y: ",e.pageY);
    console.log("e.innerText:",e.innerText);
    console.log("e.target.outerText:",e.target.outerText);
    console.log("e.currentTarget:",e.currentTarget);
    console.log("object keys:",(Object.keys(e.currentTarget)));

    console.log("e.currentTarget.value:",e.currentTarget.value);
    //console.log("e.getTarget",e.getTarget());
    this.set_state({text_data:name});
    console.log(e);
  }

  render(){
    console.log("in render:")
     return(<div className="App">
      <Button variant='contained' color='primary' onClick={this.handleChange} value="fffffff">
        asdfasdfasfasdfsdfsd
      </Button>
    </div>);
  }

}


export default App;
