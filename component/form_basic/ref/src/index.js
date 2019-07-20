import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component{
  const ref = React.createRef();
  state = {
    username:''
  }
  onChange(e){
    //e.persist();
    console.log("onChange:",e.target);
    console.log("ref:",ref);
  }

  render(){
    return(
      <div>
	<input placeholder="enter data here" ref={ref}  />
        <button onClick={this.onChange} >Submit</button>
      </div>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('root'));

