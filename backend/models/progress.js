const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseId: { type: String, required: true },
  completedLessons: [{ type: String }],
  quizScores: [{ lessonId: String, score: Number }]
});

module.exports = mongoose.model('Progress', progressSchema);