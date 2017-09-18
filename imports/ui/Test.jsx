import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// database - collection
import { Data } from '../api/data';

class Test extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return <p> Loading... </p>;
  }


};

export default createContainer(() => {
  Meteor.subscribe('activities');
  return {
    activities: Data.find().fetch(),
  };
}, Test);
