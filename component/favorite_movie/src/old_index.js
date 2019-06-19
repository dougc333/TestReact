import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {movies,profiles,users} from './data'




class App extends Component {
  render() {
    const user_names = Object.keys(users).map((x)=>(users[x]['name']));
    return (
      <div>
        <h2>Favorite Movies</h2>
	{user_names.map((x)=><li key={x}>{x}</li>)}
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

