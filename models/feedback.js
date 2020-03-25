const mongoose = require('mongoose');

const { Schema } = mongoose;

const newSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('feedback', newSchema);