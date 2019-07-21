
refs: there are different types of refs which get the value from a DOM call. 
1) callback function ref: this is in the ref arrow directory. Returns the value of the element
in the first arg of the callback function. 



2) string: deprecated. 


3) forward ref: 
Advantages of refs; they dont cause a re-render like when modifying props
manage focus
text selection 
media playback
integrate w/3rd party DOM
imperative animations 

Controlled forms: the control refers to keeping the state of the element in sync with the Component. For an Input 
element each character is updated into state, not the final string. 
uses prop to set state values in component from html form element or div element
Allows you to: 
  validate on submit
  valideate fields
  use propTypes to set default and type checking
  calls onChange after every character is entered in a text box which synchronizes input html to state exactly or atomically on character entry
  disable feature when no input
  dynamic inputs:
  several inputs for 1 data: 



controlled component react is controlling the state of the form. the only way to update/change the state of the form

is to update the component holding the form state. DOM controls the form but react is supposed to control
the state. React is in control of the form state. 


