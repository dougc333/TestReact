import React from 'react'
import {TextField,FormLabel,FormControl,FormControlLabel,Checkbox,FormGroup} from '@material-ui/core'

class Login2 extends React.Component{
  state = {
    question: "",
    level: "",
    category: "",
    option1: "",
    option2: "",
    option3: "",
    option4: ""
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render(){
    return(
      <div>
        Login2
        <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Check the correct answer/answers options
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <div>
                          <Checkbox
                            onChange={this.handleChange("answer")}
                            value="option1"
                          />
                          <TextField
                            id="option1"
                            label="Option#1"
                            value={this.state.option1}
                            onChange={this.handleChange("option1")}
                            margin="normal"
                          />
                        </div>
                      }
                      //   label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={
                        <div>
                          <Checkbox
                            onChange={this.handleChange("answer")}
                            value="option1"
                          />
                          <TextField
                            id="option2"
                            label="Option#2"
                            value={this.state.option2}
                            onChange={this.handleChange("option2")}
                            margin="normal"
                          />
                        </div>
                      }
                      //   label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={
                        <div>
                          <Checkbox
                            onChange={this.handleChange("answer")}
                            value="option3"
                          />
                          <TextField
                            id="option3"
                            label="Option#3"
                            value={this.state.option3}
                            onChange={this.handleChange("option3")}
                            margin="normal"
                          />
                        </div>
                      }
                      //   label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={
                        <div>
                          <Checkbox
                            onChange={this.handleChange("answer")}
                            value="option4"
                          />
                          <TextField
                            id="option4"
                            label="Option#4"
                            value={this.state.option4}
                            onChange={this.handleChange("option4")}
                            margin="normal"
                          />
                        </div>
                      }
                      //   label="Gilad Gray"
                    />
                  </FormGroup>
                  {/* <FormHelperText>Be careful</FormHelperText> */}
                </FormControl>
      </div>
    )    
  }
}

export default Login2