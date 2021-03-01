const mongoose = require('mongoose');
const collectionSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  allDiffs: {
    type: Array,
  },
  longitude: {
    type: Array,
  },
  latitude: {
    type: Array,
  },
  count: {
    type: Number,
  },
}, { versionKey: false });
module.exports = mongoose.model('collection', collectionSchema);