import { Meteor } from 'meteor/meteor';
import {Data} from '../imports/api/data.js';

Meteor.startup(() => {
  Meteor.publish('activities', function(limit) {
    return Data.find({}, {limit: limit});
  })
});
