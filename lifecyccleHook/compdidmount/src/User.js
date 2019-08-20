//where is fetchUser and where is ../utils/userAPI
import React, {Component} from 'react'
import fetchUser from '../utils/UserAPI'

class User extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      age:''
    }
  }
  componentDidMount(){
    fetchUser().then((user)=>this.setState({
      name:user.name,
      age:user.age
    }));
  }
  render(){
    return(
      <div>
        <p>Name:{this.state.name}</p>
        <p>Age:{this.state.age}</p>
      </div>
    );

  } // end render
} //end component

export default User;


