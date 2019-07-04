
Outline:
1) simple_state: how to define state in this.state in ctor when extending Component. 
1) state_example: how to use onChange to change global state in 1 component
1) state_example_refactored: XXX not completed. how to decompose props and global state to individual components
1) button: onClick handler
1) contactlist: how to display state w/JSX 
1) favorite_movies: how to map/filter between different objects
1_ form1: controlled component, simplest, this is redundant as simpler version of echo in controlled1
1) func_comp: how to make functional component, convention, camel case naming, first letter lower case with upperCase second noun
1) num_likes: simpler version of favorite_movies, create hashtable, map usage, loop w/iterator
1) add more complicated contactlist which is full contactlist example including multiple components and event handlers for add/remove
1) proptypes: how to use proptypes to validate type and default value
1) how to use props and global state: project temp/ how to equate state in one component to props in another component. state liftup in react docs
2) controlled1: echo using onChange and input
3) controlled2: not done
4) ex1: not done
5) ex2: not done


the process for making these projects is:
1) npx create-react-app name_of_project
2) go into src/ and delete everything except index.js. this is debatable as index.css performs css reset
3) modify index.js to delete everything excepth the first 2 imports for React and ReactDOM and the last line for instantiation of ReactDOM
4) delete README.md and replace w/own explanation
5) run and test using npm start


Is it better to use: 
function foo(){
  return xxx;
}

or

const foo = ()=>{
  return xxx;
}


Outline: components = reusability and partitioning of code. Components which change can be updated saving
resources for larger scale. Components which dont have state dont change and shouldnt requrire server/client 
resources. This refacctoring into functional/state components can increase performance but the penalty is the laoding of 
the react runtime. 


