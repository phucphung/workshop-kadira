import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {createContainer} from 'meteor/react-meteor-data';
import {Link} from 'react-router';

// database - collection
import {Data} from '../api/data';

class Bad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar title="KADIRA performance tracking" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={{
            backgroundColor: '#027780'
          }}></AppBar>
          <div className="row">
            <div className="col s12 m7"></div>
            <div className="col s12 m5">
              <h2>KADIRA</h2>
              <Link to="/" className="waves-effect waves-light btn light-blue darken-3">Click Here to go back</Link>
            </div>

          </div>
          <div className="row">
            <div className="col s12">
              <List>
                {this.props.activities.map( (activity, id)=>(
                  <ListItem key={activity._id} primaryText={id + '. ' + activity.type} />
                ))}
              </List>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default createContainer(() => {
  //let limit=20000+Math.round(Math.random()*1000);
  //Meteor.subscribe('activities', {skip: 0, limit: limit});
  Meteor.subscribe('activities_bad');
  console.log(Data.find().count());
  return {activities: Data.find().fetch()};
}, Bad);
