const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countSchema = new Schema({
  name: String,
  count: Number
});

const model = mongoose.model('countModel', countSchema)
module.exports = model;
