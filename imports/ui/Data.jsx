import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { RaisedButton, Avatar, Chip} from 'material-ui';
import { blue200, lightBlue800, lightBlue50 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

class TagItem extends Component{
  render(){
    return(
      <Chip
      backgroundColor={blue200}
      style={styles.chip}
      >
        <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
          {this.props.number}
        </Avatar>
        {this.props.children}
      </Chip>
    )
  }
}

export default class Data extends Component {
  showEditForm() {
    this.props.showEditForm();
  }

  render() {


    return (
      
    )
  }
}
