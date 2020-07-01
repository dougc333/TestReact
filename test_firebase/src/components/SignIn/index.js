import React from 'react'
import {Box,Paper,withStyles,Input,Divider, Container} from '@material-ui/core'

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 2,
    },
    padding: {
      padding: theme.spacing.unit*10
    },
    root: {
        width: "30%",
        maxWidth: 150,
        backgroundColor: theme.palette.background.paper,
      },
});

  
class SignIn extends React.Component{
  render(){
  const { classes } = this.props;
  return(
    <Container maxWidth='sm'>
    <Paper variant="outlined" square>
    <div>
    <Input className={classes.root} placeholder="Name">NAME</Input>
    </div>
    <Input className={classes.root} placeholder ="PASSWORD">Password</Input>
    </Paper>
    </Container>
  )
  }
}
export default  withStyles(styles)(SignIn)