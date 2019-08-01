jsx is a syntax wrapper for React.createElement(element_name, props(class for css), children);


src:https://reactjs.org/docs/jsx-in-depth.html


for example:

<Foo color="red">
  Foo here
</Foo>

is the same as

React.createElement(Foo, {color:'red'}, 'Foo here');


