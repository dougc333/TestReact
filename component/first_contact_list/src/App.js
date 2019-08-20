import React, {Component} from 'react';


class ContactList extends Component{
  render(){
    const people = this.props.contacts
    return <ol>
      {people.map((person)=>(
        <li key={person.name}>{person.name}</li>
      ))
      }
    </ol>
  }

}


function App() {
  return (
    <div className="App">
      <ContactList contacts={[
        {name:'first'},
        {name:'second'},
        {name:'third'}
      ]}/>
      <ContactList contacts={[
        {name:'one'},
        {name:'two'},
        {name:'three'}
        ]}/>  
    </div>
  );
}

export default App;
