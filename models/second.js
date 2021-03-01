const mongoose = require('mongoose');
const secondSchema = new mongoose.Schema({
  country: {
    type: String,
  },
  overallStudents: {
    type: Number,
  },
}, { versionKey: false });
module.exports = mongoose.model('second', secondSchema);