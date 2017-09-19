import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {createContainer} from 'meteor/react-meteor-data';
import {Link} from 'react-router';
import ReactPaginate from 'react-paginate';

// database - collection
import {Data} from '../api/data';

const optionVar = new ReactiveVar(0);
const pagelimit = 20;
const updateSkip = (value) => {
  optionVar.set(value);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.state = {
      data: [],
      offset: 0,
      pageNumber: 10
    }
  }

  componentWillReceiveProps (props){
    const pageNumber = props.totalActivities/pagelimit;
    this.setState({
      pageNumber,
    })
  }

  handlePageClick (data){
    let selected = data.selected;
    let offset = Math.ceil(selected * pagelimit);
    updateSkip(offset);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar title="KADIRA performance tracking" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false} style={{
            backgroundColor: '#027780'
          }}></AppBar>
          <div className="row">
            <div className="col s12 m7">
              <h2>List Collection items</h2>
              <List>
                {this.props.activities.map( (activity, id)=>(
                  <ListItem key={activity._id} primaryText={id + '. ' + activity.type} />
                ))}
              </List>
              <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageNumber}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
            </div>
            <div className="col s12 m5">
              <h2>KADIRA</h2>

              <Link to="/bad" className="waves-effect waves-light btn light-blue darken-3">Click Here to slow down</Link>
            </div>

          </div>
          <div className="row">
            <div className="col s12">
              <br/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default createContainer(() => {
  const optionObj = {
    limit: pagelimit,
    skip: optionVar.get()
  }
  Meteor.subscribe('activities', optionObj);
  console.log(Data.find().count());
  return {
    activities: Data.find().fetch(),
    totalActivities: Counts.get('totalActivities'),

  };

}, App);
