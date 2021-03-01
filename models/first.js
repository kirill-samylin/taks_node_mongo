const mongoose = require('mongoose');
const firstSchema = new mongoose.Schema({
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  name: {
    type: String,
  },
  location: {
    type: Object,
  },
  students: {
    type: Array,
  },
}, { versionKey: false });
module.exports = mongoose.model('first', firstSchema);