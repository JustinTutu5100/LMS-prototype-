// backend/controllers/lessonController.js
import Lesson from '../models/lesson.js';
import Progress from '../models/progress.js';

// Add a lesson (admin only)
export const addLesson = async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all lessons for a course
export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({ courseId: req.params.courseId });
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark a lesson as completed for a user
export const markCompleted = async (req, res) => {
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
