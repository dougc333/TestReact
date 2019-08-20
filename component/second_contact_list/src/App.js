import React from 'react';


class User extends React.Component{
  render(){
    return(
      <p>
        UserName:{this.props.username}
      </p>

    );
  }
}

function Customer(props){
  return(
    <p>
      CustomerName:{props.customer_name}
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <User username={"George"} />
      <Customer customer_name={"Customer"} />
    </div>
  );
}

export default App;
