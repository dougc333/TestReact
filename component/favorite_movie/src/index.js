import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {movies,profiles,users} from './data'




class App extends Component {
  render() {
    const user_names = Object.keys(users).map((x)=>(users[x]['name']));
    let output = []
    for (const x in Object.keys(profiles)){
       console.log(users[profiles[x]['userID']]['name']+' favorite movie is: ', movies[profiles[x]['favoriteMovieID']]['name']);
       output.push(<li>{users[profiles[x]['userID']]['name']}  favorite movie is:  {movies[profiles[x]['favoriteMovieID']]['name']}</li>);
    }
    //{user_names.map((x)=><li key={x}>{x}  favorite movie is </li>)}
    return (
      <div>
        <h2>Favorite Movies</h2>
	{output}
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

