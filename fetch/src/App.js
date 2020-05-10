import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:null
    };
  }
  componentDidMount(){
    console.log("comp did mount");
    getData('http://localhost:3000/test/info')
    .then(d=> console.log(d))
    .catch(error=>{
      console.error("error");
    });
  }

  render(){
    console.log("render");
    return <div>asdfasfas</div>;
  }
}

async function getData(url='',data={}){
  const res =  fetch(url,{
    method:'GET',
    mode:'no-cors',
    credentials:'same-origin',
  });
  console.log("url:",url)
  console.log("res:",res)
  return res;
}
export default App;
