import React from 'react'
//import ReactDOM from 'react-router-dom'
import {Grid,TextField, FormControlLabel, Checkbox} from '@material-ui/core'

const Login1 =()=>(
  <div>
    <Grid container spacing={4} alignItems="flex-end">
      <Grid item>UserName</Grid>
      <Grid item md={true} sm={true} lg={true}>
          <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
      </Grid>
      <Grid item>Password</Grid>
      <Grid item>
        <FormControlLabel control={
          <Checkbox color="primary" />
        } label="Remember Me" />
      </Grid>
      <Grid item>3
      </Grid>
    </Grid>
  </div>
)

export default Login1;
