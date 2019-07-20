Component w/constructor without arrow function
how to setState
how to bind function to JSX element

1) how to bind a function handleChange to onChange in JSX element
2) how to use input box to update state on each keypress
3) setState needs e.persist() else get a synthetic event error. Or cache the target.value in the input until we need it. These
calls are async so either cache under user control or use persist to store event till async callback complete. 

