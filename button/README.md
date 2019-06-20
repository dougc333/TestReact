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




