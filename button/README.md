Buttons are the simplest combination of react programming where state is held inside
a react component and that state as it changes is propagated to the DOM. 

1) define a ctor and implement super(props) it it. This is necessary if you have state and 
if you want to bind methods. If none of these are true then dont create a ctor less component use a functional component instead.  How to manage component state? Use setState to change state outside of ctor
 and put init state into ctor using this.state=something; Never copy props because if it updates the change wont be propagated. The ctor is only called on component creation. 
2) bind class methods to this in the ctor and assign it a name. This allows the class to call it and preserves the state of this to what it was during component creation. 
3) event handlers in react convention. 



STATE:
class A extends Component{
  //can you put state outside ctor? 
  //do you need a this? 
  //this.num_clicks=0; no cause this not defined outside ctor
  //num_c = 0; no, not bound to this
  constructor(props){
    this.some_state = 0
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    this.setState((x)=>({
      console.log(e);
      this.some_state++;
    }));
  }

  render(){
    return(){
      <div onClick={this.handleClick}>{this.some_state}</div>
    }
  }
}


BIND:

EVANTS:
events are named using camelCase. Events are named w/camelCase. 

<button onClick="doSomething()">
  aasdfasd
</button>

in normal HTML becomes in react:

1) function names become camelCase variables in JSX brackets

<button onClick={doSomething}>
  aasdfasd
</button>

IN HTML you would use return false to prevent default behavior. 

<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

IN react you use preventDefault. 

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}



Using Components requires attaching member functions of Component to the this pointer. Archiac. 
This requires the use of the bind call if not using arrow functions or if using arrow functions in class field properties then the arrow function is automatically bound to this. This is only
true in ES2016+ which you can see using the babel REPL on the web. 

What is the difference between the 2 class functions, inc() and increment()?

class A{
  let counter = 0;
  inc = ()=>{   
    this.counter++;
  }
  increment(){
    this.counter++;
  }
}













There is a different syntax for ES5 vs ES6
these are the same for attaching functions to onClick

onClick = {this.handleRefreshClick.bind(this)}
or in ES6:
onClick={()=>this.handleRefreshClick()}

