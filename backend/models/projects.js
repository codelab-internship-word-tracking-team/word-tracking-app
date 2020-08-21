const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 280 },
  wordGoal: { type: Number },
  wordCountEvents: { type: Array, required: false }
});

module.exports = mongoose.model('Project', ProjectSchema, 'Projects');