import React from 'react';
import logo from './logo.svg';
import './App.css';


class Parent extends React.Component{
  constructor(props){
    super(props);
    this.handleParentClick = this.handleParentClick.bind(this);
    this.callbackFn=this.callbackFn.bind(this);
    this.parentCallback=this.parentFoo.bind(this);
    this.state={
      name:'parent name',
      child:'parent numChild'
    }
    this.parent_data='parent data';
  }
  handleParentClick(e){
    console.log("parentClick e:",e);
  }
  parentFoo(){
    console.log('parentFoo');
  }

  callbackFn(childData){
    this.setState({child:childData});
    console.log("parentCallback:",childData);
  }

  render(){
    return(
       <div className='parentDiv'><button onClick={this.handleParentClick} >parent</button>
       <Child 
         dataFromParent = {this.state.name}
         parentCallback = {this.callbackFn}
         foo={this.parentCallback}
         foobar = {this.parentFoo}>

        
       </Child> 
       </div>);
  }

}

class Child extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      numToys:''
    }
    this.handleChildClick = this.handleChildClick.bind(this);
  }

  handleChildClick(e){
    console.log("handleChildClick",this.props.dataFromParent);
    this.props.parentCallback("data from child to parent");
    this.props.foobar();
  };

  render(){
    return (<div className="childDiv"><button onClick={this.handleChildClick}>child</button></div>);
  }
}


function App() {
  return (
    <div className="App">
      <Parent>
      </Parent>
    </div>
  );
}

export default App;
