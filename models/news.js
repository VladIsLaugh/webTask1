const mongoose = require('mongoose');

const { Schema } = mongoose;

const newSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('news', newSchema);