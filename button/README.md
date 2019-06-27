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

