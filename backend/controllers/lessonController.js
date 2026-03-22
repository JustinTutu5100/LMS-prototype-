const Lesson = require('../models/lesson');
const Progress = require('../models/progress');

// Add a lesson (admin only)
exports.addLesson = async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all lessons for a course
exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({ courseId: req.params.courseId });
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark a lesson as completed for a user
exports.markCompleted = async (req, res) => {
  const { courseId, lessonId } = req.body;
  const userId = req.user.id;
  try {
    let progress = await Progress.findOne({ userId, courseId });
    if (!progress) {
      progress = new Progress({ userId, courseId, completedLessons: [lessonId] });
    } else if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
    }
    await progress.save();
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};