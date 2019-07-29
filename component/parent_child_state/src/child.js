import React from "react";
import { Card, Icon } from "semantic-ui-react";
//import semantic-ui-css from "semantic.min.css";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      id: this.props.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    console.log("child updateCount");
    this.props.handleCounter(this.state);
  }
  //how to associate e.target.value with the rigth id? Put the id in this.stae
  //and make it a parameter to the callback sent to parent
  
  handleChange(e) {
    e.persist();
    //console.log("event", e);
    //console.log(e.target.value);
    console.log("handleChange:", this.state.status);
    this.setState({ status: !this.state.status }, this.updateCount);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Description>
              Written By:{this.props.author}
              <br />
              <Icon name="book" /> {this.props.isbn}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <label>Read</label>
              <input type="checkbox" onChange={this.handleChange} />
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
export default Child;
