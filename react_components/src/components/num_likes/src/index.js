import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {movies,profiles,users} from './data'




let map = {};

for (const k in profiles) {
  //console.log(profiles[k]["favoriteMovieID"]);
  //console.log(profiles[k]["favoriteMovieID"] in map);
  if (profiles[k]["favoriteMovieID"] in map == false) {
    map[profiles[k]["favoriteMovieID"]] = [];
    map[profiles[k]["favoriteMovieID"]].push(profiles[k]["userID"]);
  } else {
    //console.log('map true');
    let arr = map[profiles[k]["favoriteMovieID"]];
    //console.log('arr contains:', arr);
    //console.log('adding:', profiles[k]['userID']);
    arr.push(profiles[k]["userID"]);
    //console.log('arr after add:', arr);
    map[profiles[k]["favoriteMovieID"]] = arr;
    //console.log('after add:', map[profiles[k]['favoriteMovieID']]);
  }
}


function lookup_uname(o) {
  console.log("lookup_uname");
  console.log("user::", users[o]["name"]);
  return (<li> {users[o]["name"]} </li>);
}

class App extends Component {
  render() {
    
    let movie_names = [];

    for (const k in movies) {
  	console.log(movies[k]["name"]);
  	console.log(movies[k]["id"]);
  	let s = <h2> {movies[k]["name"]} </h2>;
  	movie_names.push(s);
  	let arr = map[movies[k]["id"]];
  	console.log("arr:", arr, " typeof arr:", typeof arr);
  	if (typeof arr != "undefined") {
    	  movie_names.push(<p>Liked By:</p>);
    	  let n = arr.map(x => lookup_uname(x));
    	  console.log("n:", n);
    	  movie_names.push(n );
  	} else {
    	  console.log("undefined no favorites");
    	  movie_names.push(<p>None of the current users liked this movie</p>);
  	}
   	console.log("movie_names after push:", movie_names);
    
    }//endfor

    return (
      <div>
	{movie_names}
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

