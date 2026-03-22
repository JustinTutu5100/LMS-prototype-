const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth(['admin']), lessonController.addLesson);
router.get('/:courseId', auth(), lessonController.getLessons);
router.post('/complete', auth(), lessonController.markCompleted);

module.exports = router;