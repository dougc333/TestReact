import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    console.log("userList ctor");
    //console.log('userList ctor userListModel():',window.cs142models.userListModel());
    //this.userId = window.cs142models.userListModel();
    //console.log(this.userId);
    //console.log(this.userId[0].first_name, this.userId[0].last_name);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event,props){
    console.log("handleClick event:",event);
    console.log("handleClick props:", props);
  }
  render() {
    return (
      <div>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://material-ui.com/demos/lists/">Lists</a> and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
          display your users like so:
        </Typography>
        <List component="nav">
          <ListItem onClick={this.handleClick}>
            <ListItemText primary={'aaaaaa'}  />
          </ListItem>
          <Divider />
          <ListItem onClick={this.handleClick}> 
            <ListItemText primary={'bbbbbb'} />
          </ListItem>
          <Divider />
          <ListItem onClick={this.handleClick}>
            <ListItemText primary={'cccccc'} />
          </ListItem>
          <Divider />
        </List>
        <Typography variant="body1">
          The model comes in from window.cs142models.userListModel()
        </Typography>
      </div>
    );
  }
}

export default UserList;
