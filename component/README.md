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


