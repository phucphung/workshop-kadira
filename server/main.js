import { Meteor } from 'meteor/meteor';
import {Data} from '../imports/api/data.js';

Meteor.startup(() => {
  Meteor.publish('activities', function({limit, skip}) {

    Counts.publish(this, 'totalActivities', Data.find({}, {
      fields: {
        _id:1
      }
    }));
    return Data.find({}, {limit: limit, skip: skip});
  })
});
