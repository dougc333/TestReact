const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};

Object.size = function(obj) {
  let num = 0;
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) num++;
  }
  return num;
};

map = {};

for (const k in profiles) {
  //console.log(profiles[k]["favoriteMovieID"]);
  //console.log(profiles[k]["favoriteMovieID"] in map);
  if (profiles[k]["favoriteMovieID"] in map == false) {
    map[profiles[k]["favoriteMovieID"]] = [];
    map[profiles[k]["favoriteMovieID"]].push(profiles[k]["userID"]);
  } else {
    //console.log('map true');
    arr = map[profiles[k]["favoriteMovieID"]];
    //console.log('arr contains:', arr);
    //console.log('adding:', profiles[k]['userID']);
    arr.push(profiles[k]["userID"]);
    //console.log('arr after add:', arr);
    map[profiles[k]["favoriteMovieID"]] = arr;
    //console.log('after add:', map[profiles[k]['favoriteMovieID']]);
  }
}

console.log("map:", map);

console.log("size movies:", Object.size(movies));
console.log("size users:", Object.size(users));
console.log("size profiles:", Object.size(profiles));

function lookup_uname(o) {
  console.log("lookup_uname");
  console.log("user::", users[o]["name"]);
  return "<li>" + users[o]["name"] + "</li>";
}

let movie_names = [];
for (const k in movies) {
  console.log(movies[k]["name"]);
  console.log(movies[k]["id"]);
  s = "<h2>" + movies[k]["name"] + "</h2>";
  movie_names.push(s);
  arr = map[movies[k]["id"]];
  console.log("arr:", arr, " typeof arr:", typeof arr);
  if (typeof arr != "undefined") {
    movie_names.push("<p>Liked By:</p><ul>");
    n = arr.map(x => lookup_uname(x));
    console.log("n:", n);
    movie_names.push(n + "</ul>");
  } else {
    console.log("undefined no favorites");
    movie_names.push("<p>None of the current users liked this movie</p>");
  }
  console.log("movie_names after push:", movie_names);
  //
}

console.log("size movie names:", Object.size(movie_names));
console.log("movie_names", movie_names);
