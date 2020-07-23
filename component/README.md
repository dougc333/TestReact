This is too basic post cs142. Some important points for slides old programming styles vs. current.

Outline:

1. simple_state:
   - state in ctor
   - how to bind a function to a component in the ctor using bind and function vs. arrow functions wo bind
   - how to use input box to update state
   - how to use setState and JSON syntax to update state variable in onChange event handler triggered off button click
   - props to set default values and type checking
   - no ctor means not extended from React.Component and use arrow funtion to set state, hooks
   - props to set default values and type checking
1. forms:
   - use form keyword, onSubmit, state changes after each character
   - 2 components, an AddItem and Form component
   - 2 styles arrow function and non arrow function
   - uncontrolled: uses ref to get value from DOM
   - controlled: means every change in state is reflectd in component, each key press results in state change
   - ref: no arrow function store state from input box
   - ref_arrow: the ref stores the value into the state var async. the input box event handler captures
   - the value of the input box on each keybox. No need to update state using refs.
1. state_example: udacity App/Game/Score component refactor
1. button: onClick handler
1. contactlist: how to display state w/JSX
1. favorite*movies: how to map/filter between different objects
   1* form1: controlled component, simplest, this is redundant as simpler version of echo in controlled1
1. func_comp: how to make functional component, convention, camel case naming, first letter lower case with upperCase second noun
1. num_likes: simpler version of favorite_movies, create hashtable, map usage, loop w/iterator
1. add more complicated contactlist which is full contactlist example including multiple components and event handlers for add/remove
1. proptypes: how to use proptypes to validate type and default value
1. how to use props and global state: project temp/ how to equate state in one component to props in another component. state liftup in react docs
1. controlled1: echo using onChange and input
1. controlled2:
1. ex1:
1. ex2:

the process for making these projects is:

1. npx create-react-app name_of_project
2. go into src/ and delete everything except index.js. this is debatable as index.css performs css reset
3. modify index.js to delete everything excepth the first 2 imports for React and ReactDOM and the last line for instantiation of ReactDOM
4. delete README.md and replace w/own explanation
5. run and test using npm start

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
