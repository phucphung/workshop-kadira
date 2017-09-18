import { Mongo } from 'meteor/mongo';

export const Data = new Mongo.Collection('activities');

Data.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Data.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

// const DataSchema = new SimpleSchema({
// 
// });
//
// Data.attachSchema(DataSchema);
