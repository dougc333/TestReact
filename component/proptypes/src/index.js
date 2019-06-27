import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


class App extends Component{

  render(){
   return <div>stuff{this.props.text}</div>
  }

}

App.propTypes ={
  text:PropTypes.string.isRequired
}

ReactDOM.render(<App />, document.getElementById('root'));

