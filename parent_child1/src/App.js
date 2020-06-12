import React from 'react';
import './App.css';

//send data from parent to child, 
class Parent extends React.Component{
  constructor(props){
    super(props);
    this.handleParentClick = this.handleParentClick.bind(this);
    this.callbackFn=this.callbackFn.bind(this);
    this.parentCallback=this.parentFoo.bind(this);
    this.state={
      name:'parent name',
      current_info:'none'
    }
    this.parent_data='parent data';
  }
  handleParentClick(e){
    console.log("parentClick e:",e);
  }
  parentFoo(){
    console.log('parentFoo');
  }

  setInfo=(newInfo)=>{
    console.log("setInfo!!!!!")
    this.setState({current_info:newInfo});
  }

  callbackFn(childData){
    this.setState({child:childData});
    console.log("parent callbackFn when child changes:",childData);
  }

  render(){
    return(
       <div className='parentDiv'>
         <button onClick={this.handleParentClick} >parent
        </button>
    <div>div:{this.state.current_info}</div>
       <Child 
         dataFromParent = {this.state.name}
         parentCallback = {this.callbackFn}
         foo={this.parentCallback}
         foobar = {this.parentFoo}
         onNewInfo={this.setInfo}
         >
       </Child> 
       </div>);
  }

}

class Child extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:''
    }
    this.handleChildClick = this.handleChildClick.bind(this);
    this.handleNewInfo = this.handleNewInfo.bind(this);
  }

  handleChildClick(e){
    console.log('handleChildClick this:',this)
    console.log("handleChildClick",this.props.dataFromParent);
    this.props.parentCallback("data from child to parent");
    console.log("child button click value:",this.value) //undefined
  };

  handleNewInfo=(evt)=>{
    this.props.onNewInfo(evt.target.value);
    console.log("handleNewInfo:",document.getElementById('f'));
  }

  render(){
    return (
    <div className="childDiv">
      <button onClick={this.handleChildClick} onChange={this.handleNewInfo} ></button>

      {this.props.foo}
      aaaa
    </div>);
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
