const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  title: { type: String, required: true },
  contentType: { type: String, enum: ['text','video'], required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Lesson', lessonSchema);