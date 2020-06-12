import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Paper,Grid,AppBar,Toolbar} from '@material-ui/core'
import UserList from './components/userList/userList'
import TopBar from './components/topbar/TopBar';



ReactDOM.render(
  <React.StrictMode>
    <Grid container spacing={8}>
      <TopBar></TopBar>
    </Grid>
    <div></div>
    <Grid item sm={3}>
      <Paper  className="cs142-main-grid-item">
        <UserList />
      </Paper>
    </Grid>
  </React.StrictMode>,
  document.getElementById('root')
);

